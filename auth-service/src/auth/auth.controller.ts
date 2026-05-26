import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LogoutDTO, RefreshTokenDTO } from './dto/jwt.dto';
import { type Request as TypedRequest } from 'src/types';
import { User } from '@prisma/client';
import { DefaultPermissions, Role } from 'prisma/types';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('/register')
  async register(@Body() body: CreateUserDto) {
    return await this.userService.createUser(body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req: TypedRequest) {
    return this.authService.issueTokens(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async getProfile(@Request() req: TypedRequest): Promise<User | null> {
    return await this.userService.getUserById(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/refresh-token')
  // Refresh tokens are handled via refresh token only (no access token required)
  async refreshToken(@Body() body: RefreshTokenDTO) {
    return await this.authService.refreshToken(body);
  }

  @Post('/logout')
  async logout(@Body() body: LogoutDTO) {
    const result = await this.authService.logout(body.refreshToken);
    return {
      message: result.success ? 'Sesión cerrada' : 'No se encontró el token',
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('/logout-all')
  async logoutAll(@Request() req: TypedRequest) {
    const userId: number = req.user.id;
    const result = await this.authService.logoutAll(Number(userId));
    return {
      message: result.success
        ? 'Se eliminaron las sesiones'
        : 'No se pudieron eliminar las sesiones',
    };
  }

  @Post('/validate')
  async validateToken(
    @Body('token') token: string,
    @Request() req: TypedRequest,
  ) {
    // allow token via body or Authorization header
    if (!token) {
      const header = req.headers.authorization;
      if (header && header.startsWith('Bearer ')) token = header.slice(7);
    }

    const info = await this.authService.verifyToken(token);
    if (!info) throw new UnauthorizedException('Token inválido');
    return info;
  }

  @Post('/check-permission')
  async checkPermission(
    @Body() body: { token?: string; module: string; action: string },
    @Request() req: TypedRequest,
  ) {
    let token: string = '';
    const header = req.headers.authorization;
    if (header && header.startsWith('Bearer ')) {
      token = header.slice(7);
    } else if (body.token) {
      token = body.token;
    }

    const info = await this.authService.verifyToken(token);
    if (!info) throw new UnauthorizedException('Token inválido');

    // fetch role's permissions JSON from DB
    const roleId = info.role_id ?? null;
    if (!roleId) return { allowed: false, message: 'Rol no encontrado' };

    const role = await this.authService.getRoleById(roleId);
    if (!role) return { allowed: false, message: 'Rol no encontrado' };

    const perms = role.permissions_json as DefaultPermissions;
    const modulePerm = perms[role.name as Role];
    const allowed =
      Array.isArray(modulePerm) && modulePerm.includes(body.action);

    return { allowed, role, user: info };
  }
}
