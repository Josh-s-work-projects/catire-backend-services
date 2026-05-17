import { IsNumber, IsString, IsUrl, Min, Validate } from 'class-validator';
import { IsRelationship } from 'src/prisma/validator/IsRelationship.validator';

export class CreateProductDTO {
  @IsNumber(undefined, { message: 'El id del menú debe ser numérico.' })
  @Validate(IsRelationship, ['menu', 'id'], {
    message: 'El menú no existe o id inválido.',
  })
  menu_id!: number;

  @IsString({ message: 'El nombre debe ser texto.' })
  name!: string;

  @IsString({ message: 'La ruta de la imagen debe ser texto.' })
  img_src!: string;

  @IsNumber(undefined, { message: 'El precio base debe ser numérico.' })
  @Min(0, { message: 'El precio debe ser >= 0' })
  base_price!: number;

  @IsNumber(undefined, { message: 'El id de categoría debe ser numérico.' })
  @Validate(IsRelationship, ['category', 'id'], {
    message: 'La categoría no existe o id inválido.',
  })
  category_id!: number;
}
