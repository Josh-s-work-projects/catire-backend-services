import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AccessTokenDTO, TokenPairDTO } from './dto/jwt.dto';
import { User } from '@prisma/client';
import AuthDTO from './dto/auth.dto';
import { Payload } from './strategy/jwt.strategy';
import { UserRole } from 'src/types/user';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async validateUser(body: AuthDTO): Promise<User | null> {
    try {
      const user = await this.userService.findOneUser(body.email);
      if (!user) return null;

      const matchResult = await bcrypt.compare(
        String(body.password),
        String(user.password),
      );
      if (user && matchResult) {
        return user;
      }
      return null;
    } catch (error: unknown) {
      if (error instanceof Error) console.error('Error', error.message);
      else console.error('Error', error);
      return null;
    }
  }
  async login(payload: AuthDTO): Promise<TokenPairDTO | AccessTokenDTO> {
    const user = await this.validateUser(payload);
    if (!user) {
      throw new UnauthorizedException('Correo o clave incorrectos.');
    }

    return await this.issueTokens(user);
  }

  private async createAndSaveRefreshToken(user: User): Promise<string> {
    const payload: Payload = { userId: user.id, username: user.email };
    const refreshToken = await this.jwtService.signAsync(payload);

    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    await this.prisma.refreshToken.create({
      data: {
        token: refreshToken,
        user_id: user.id,
        expires_at: expiresAt,
      },
    });

    return refreshToken;
  }

  public async issueTokens(user: User): Promise<TokenPairDTO> {
    const payload: Payload = { userId: user.id, username: user.email };
    const access_token = await this.jwtService.signAsync(payload);
    const refresh_token = await this.createAndSaveRefreshToken(user);

    return { access_token, refresh_token, message: '' };
  }

  async verifyToken(token: string): Promise<UserRole | null> {
    try {
      if (!token) return null;
      const payload = await this.jwtService.verifyAsync<Payload>(token, {
        secret: process.env.JWT_SECRET,
      });

      const userId = Number(payload.userId);
      const user = await this.userService.getUserById(userId);
      if (!user) return null;

      return user;
    } catch (error: unknown) {
      if (error instanceof Error) console.error(error.message);
      else console.error(error);
      return null;
    }
  }

  async logout(refreshToken: string) {
    if (!refreshToken) return { success: false };
    try {
      type TokenRecord = {
        id: number;
      } | null;

      const found = (await this.prisma.refreshToken.findUnique({
        where: { token: refreshToken },
      })) as TokenRecord;
      if (!found) return { success: false };
      await this.prisma.refreshToken.delete({ where: { id: found.id } });
      return { success: true };
    } catch (e: unknown) {
      if (e instanceof Error) console.error(e.message);
      else console.error(e);
      return { success: false };
    }
  }

  async logoutAll(userId: number) {
    try {
      await this.prisma.refreshToken.deleteMany({ where: { user_id: userId } });
      return { success: true };
    } catch (e: unknown) {
      if (e instanceof Error) console.error(e.message);
      else console.error(e);
      return { success: false };
    }
  }

  async getRoleById(id: number) {
    return await this.prisma.role.findUnique({ where: { id } });
  }
}
