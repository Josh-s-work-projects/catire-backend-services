import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import axios from 'axios';
import { PERMISSION_KEY } from './permission.decorator';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    const metadata = this.reflector.get(PERMISSION_KEY, context.getHandler()) || this.reflector.get(PERMISSION_KEY, context.getClass());
    if (!metadata) return true;

    const { module, action } = metadata as any;
    const req = context.switchToHttp().getRequest();
    const header = req.headers?.authorization || req.headers?.Authorization;
    let token: string | undefined = undefined;
    if (header && header.startsWith('Bearer ')) token = header.slice(7);
    if (!token && req.body && req.body.token) token = req.body.token;
    if (!token) throw new UnauthorizedException('Token no proporcionado');

    const authUrl = process.env.AUTH_SERVICE_URL || 'http://localhost:3000';
    try {
      const res = await axios.post(`${authUrl}/auth/check-permission`, { token, module, action });
      if (res.data && res.data.allowed) {
        req.user = res.data.user || req.user;
        return true;
      }
      throw new UnauthorizedException('Acceso denegado');
    } catch (err) {
      throw new UnauthorizedException('Acceso denegado');
    }
  }
}
