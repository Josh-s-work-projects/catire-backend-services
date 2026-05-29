import { IsNumber, IsString, Min, Validate } from 'class-validator';
import { IsRelationship } from 'src/prisma/validator/IsRelationship.validator';

export class CreateProductDTO {
  @IsNumber(undefined, {
    message: 'menu_id: El id del menú debe ser numérico.',
  })
  @Validate(IsRelationship, ['menu', 'id'], {
    message: 'menu_id: El menú no existe o id inválido.',
  })
  menu_id!: number;

  @IsString({ message: 'name: El nombre debe ser texto.' })
  name!: string;

  @IsString({ message: 'img_src: La ruta de la imagen debe ser texto.' })
  img_src!: string;

  @IsNumber(undefined, {
    message: 'base_price: El precio base debe ser numérico.',
  })
  @Min(0, { message: 'base_price: El precio debe ser >= 0' })
  base_price!: number;

  @IsNumber(undefined, {
    message: 'category_id: El id de categoría debe ser numérico.',
  })
  @Validate(IsRelationship, ['category', 'id'], {
    message: 'category_id: La categoría no existe o id inválido.',
  })
  category_id!: number;
}
