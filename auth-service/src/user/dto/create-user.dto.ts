import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  Validate,
} from 'class-validator';
import { IsUnique } from 'src/prisma/validator/IsUnique.validator';
export class CreateUserDto {
  @IsString({ message: 'El nombre completo debe ser de texto.' })
  @IsNotEmpty({ message: 'El nombre completo es requerido.' })
  full_name!: string;

  @IsNumber(undefined, { message: 'El id del rol debe ser numérico.' })
  @IsNotEmpty({ message: 'El id del rol es requerido.' })
  @Validate(IsUnique, ['user', 'role_id'], {
    message: 'Rol no encontrado o id incorrecto',
  })
  role_id!: number;

  @IsEmail(undefined, {
    message: 'Debe ser un correo válido.',
  })
  @IsNotEmpty({
    message: 'El correo es requerido.',
  })
  @Validate(IsUnique, ['user', 'email'], {
    message: 'Este correo ya existe, por favor use otro',
  })
  email!: string;

  @IsString({
    message: 'La cédula debe ser tipo texto.',
  })
  @IsNotEmpty({
    message: 'La cédula es requerida.',
  })
  dni!: number;

  @IsString({
    message: 'El primer teléfono debe ser texto.',
  })
  @IsNotEmpty({
    message: 'El primer teléfono es requerido.',
  })
  phone_1!: string;

  @IsString({
    message: 'El segundo teléfono debe ser texto.',
  })
  phone_2!: string;

  @IsString({
    message: 'La clave debe ser texto',
  })
  @IsNotEmpty({
    message: 'La clave es requerida',
  })
  @Min(6, {
    message: 'La clave debe tener un mínimo de 6 caracteres.',
  })
  password!: string;
}
