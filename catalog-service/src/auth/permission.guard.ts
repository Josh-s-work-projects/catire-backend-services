import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSION_KEY } from './permission.decorator';
import { Request } from '../types/request';
import { PermissionMetadata, Role } from '../types/permissions';
import axios from 'axios';
import { User } from 'src/types/user';
import { validateRequestToken } from './remote-auth.guard';

type CheckPermissionResponse = {
  allowed: boolean;
  role?: Role;
  user?: User;
};

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const metadata = this.reflector.get<PermissionMetadata>(
      PERMISSION_KEY,
      context.getHandler(),
    );
    if (!metadata) return true;

    const { module, action } = metadata;
    const req: Request = context.switchToHttp().getRequest();

    const { user, token } = await validateRequestToken(req);
    console.log(user);
    console.log(token);

    if (!user) throw new UnauthorizedException('Token inválido');
    req.user = user;

    const authUrl = process.env.AUTH_SERVICE_URL;

    try {
      const res = await axios.post<CheckPermissionResponse>(
        `${authUrl}/check-permission`,
        { token, module, action },
      );
      const data = res.data;

      if (data.allowed) {
        if (data.user) req.user = data.user;
        return true;
      }

      throw new ForbiddenException('Acceso denegado');
    } catch (err) {
      console.log(err);
      throw new UnauthorizedException('Token inválido');
    }
  }
}
