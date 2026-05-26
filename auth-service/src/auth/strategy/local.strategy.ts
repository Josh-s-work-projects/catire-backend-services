import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import AuthDTO from '../dto/auth.dto';
import { User } from '@prisma/client';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(payload: AuthDTO): Promise<User> {
    const result = await this.authService.validateUser(payload);
    if (!result) {
      throw new UnauthorizedException();
    }
    return result;
  }
}
