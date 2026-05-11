import { IsNumber, IsString, Max, Min, Validate } from 'class-validator';
import { IsUnique } from 'src/prisma/validator/IsUnique.validator';

export class CreateBranchDTO {
  @IsString({
    message: 'El nombre debe ser tipo texto.',
  })
  @Validate(IsUnique, ['branch', 'name'], {
    message: 'El nombre ya existe.',
  })
  name!: string;

  @IsNumber(undefined, {
    message: 'Las coordenadas longitud deben ser numérica.',
  })
  @Min(-180, {
    message: 'El valor mínimo debe ser -180',
  })
  @Max(180, {
    message: 'El valor máximo debe ser 180',
  })
  @Validate(IsUnique, ['branch', 'coordinates_long'], {
    message: 'La longitud ya existe.',
  })
  coordinates_long!: number;

  @IsNumber(undefined, {
    message: 'Las coordenadas latitud deben ser numérica.',
  })
  @Min(-90, {
    message: 'El valor mínimo debe ser -90',
  })
  @Max(90, {
    message: 'El valor máximo debe ser 180',
  })
  @Validate(IsUnique, ['branch', 'coordinates_lat'], {
    message: 'La latitud ya existe.',
  })
  coordinates_lat!: number;
}
