import { IsEmail, IsNotEmpty, IsString, Min } from 'class-validator';

export default class AuthDTO {
  @IsNotEmpty({
    message: 'El correo es requerido.',
  })
  @IsString({
    message: 'El correo debe ser de tipo texto.',
  })
  @IsEmail(undefined, {
    message: 'El correo debe ser válido.',
  })
  email!: string;

  @IsNotEmpty({
    message: 'La clave es requerida.',
  })
  @IsString({
    message: 'La clave debe ser de tipo texto.',
  })
  @Min(6, {
    message: 'La clave debe tener un mínimo de 6 caracteres.',
  })
  password!: number;
}
