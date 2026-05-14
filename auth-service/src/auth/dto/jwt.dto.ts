import { IsNotEmpty, IsString } from 'class-validator';

export class RefreshTokenDTO {
  @IsString({
    message: 'El token debe ser de tipo texto.',
  })
  @IsNotEmpty({
    message: 'El token es requerido,',
  })
  refreshToken!: string;
}

export class AccessTokenDTO {
  @IsString()
  access_token!: string;

  @IsString()
  error!: string;
}
