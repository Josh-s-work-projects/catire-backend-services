import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import axios from 'axios';
import { type Request } from 'express';

@Injectable()
export class RemoteAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
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
      const res = await axios.post<any>(`${authUrl}/auth/validate`, { token });
      req.user = res.data;
      return true;
    } catch {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
