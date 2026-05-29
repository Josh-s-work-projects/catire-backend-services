import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
  Validate,
} from 'class-validator';
import { IsUnique } from 'src/prisma/validator/IsUnique.validator';
export class CreateUserDto {
  @IsString({ message: 'full_name: El nombre completo debe ser de texto.' })
  @IsNotEmpty({ message: 'full_name: El nombre completo es requerido.' })
  full_name!: string;

  @IsNumber(undefined, { message: 'role_id: El id del rol debe ser numérico.' })
  @IsNotEmpty({ message: 'role_id: El id del rol es requerido.' })
  @Validate(IsUnique, ['user', 'role_id'], {
    message: 'Rol no encontrado o id incorrecto',
  })
  role_id!: number;

  @IsEmail(undefined, {
    message: 'email: Debe ser un correo válido.',
  })
  @IsNotEmpty({
    message: 'email: El correo es requerido.',
  })
  @Validate(IsUnique, ['user', 'email'], {
    message: 'email: Este correo ya existe, por favor use otro',
  })
  email!: string;

  @IsNumber(undefined, { message: 'dni: La cédula debe ser numérica.' })
  @IsNotEmpty({ message: 'dni: La cédula es requerida.' })
  dni!: number;

  @IsString({
    message: 'phone_1: El primer teléfono debe ser texto.',
  })
  @IsNotEmpty({
    message: 'phone_1: El primer teléfono es requerido.',
  })
  phone_1!: string;

  @IsString({
    message: 'phone_2: El segundo teléfono debe ser texto.',
  })
  phone_2!: string;

  @IsString({ message: 'password: La clave debe ser texto' })
  @IsNotEmpty({ message: 'password: La clave es requerida' })
  @MinLength(6, {
    message: 'password: La clave debe tener un mínimo de 6 caracteres.',
  })
  password!: string;
}
