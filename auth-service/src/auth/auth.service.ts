import * as bcrypt from 'bcrypt';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenDTO, AccessTokenDTO } from './dto/jwt.dto';
import { User } from '@prisma/client';
import AuthDTO from './dto/auth.dto';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
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
    } catch (error) {
      console.log('Error', error);
      return null;
    }
  }

  async login(payload: AuthDTO): Promise<AccessTokenDTO> {
    const user = await this.validateUser(payload);
    if (user) {
      const payload = { sub: user.id, username: user.email };

      return {
        access_token: await this.jwtService.signAsync(payload),
        error: '',
      };
    }

    return {
      access_token: '',
      error: 'Credenciales incorrectas. Intenta nuevamente',
    };
  }

  async refreshToken(body: RefreshTokenDTO) {
    try {
      const payload = await this.jwtService.verifyAsync<User>(
        body.refreshToken,
      );

      const refreshToken = await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: '1hrs',
      });
      return { refreshToken };
    } catch (error) {
      if (error instanceof Error)
        throw new InternalServerErrorException(error.message);
    }
  }
}
