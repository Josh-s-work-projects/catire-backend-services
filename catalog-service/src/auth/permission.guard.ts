import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import axios from 'axios';
import { type Request } from 'express';
import { PERMISSION_KEY } from './permission.decorator';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    const metadata =
      this.reflector.get(PERMISSION_KEY, context.getHandler()) ||
      this.reflector.get(PERMISSION_KEY, context.getClass());
    if (!metadata) return true;

    const { module, action } = metadata;
    const req = context.switchToHttp().getRequest();
    const header = String(
      req.headers?.authorization || req.headers?.Authorization || '',
    );
    let token: string | undefined = undefined;
    if (header && header.startsWith('Bearer ')) token = header.slice(7);
    if (!token) {
      const body = req.body as { token?: string } | undefined;
      if (body?.token) token = body.token;
    }
    if (!token) throw new UnauthorizedException('Token no proporcionado');

    const authUrl = process.env.AUTH_SERVICE_URL || 'http://localhost:3000';
    try {
      const res = await axios.post<{ allowed: boolean; user?: any }>(
        `${authUrl}/auth/check-permission`,
        {
          token,
          module,
          action,
        },
      );
      if (res.data && res.data.allowed) {
        req.user = res.data.user || req.user;
        return true;
      }
      throw new UnauthorizedException('Acceso denegado');
    } catch {
      throw new UnauthorizedException('Acceso denegado');
    }
  }
}
