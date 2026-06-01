import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateOrderItemDTO {
  @IsNumber(undefined, {
    message: 'product_id: El ID del producto debe ser numérico.',
  })
  product_id!: number;

  @IsNumber(undefined, {
    message: 'menu_id: El ID del menú debe ser numérico.',
  })
  menu_id!: number;

  @IsString({
    message:
      'name: El nombre del producto o menú debe ser una cadena de texto.',
  })
  name!: string;

  @IsString({
    message: 'img_src: La ruta de la imagen debe ser una cadena de texto.',
  })
  img_src!: string;

  @IsNumber(undefined, {
    message: 'base_price: El precio base debe ser numérico.',
  })
  base_price!: number;

  @IsNumber(undefined, {
    message: 'category_id: El ID de categoría debe ser numérico.',
  })
  category_id!: number;

  @IsNumber(undefined, {
    message: 'quantity: La cantidad debe ser numérica.',
  })
  quantity!: number;

  @IsNumber(undefined, {
    message: 'line_total: El total de la línea debe ser numérico.',
  })
  line_total!: number;
}

export class CreateOrderDTO {
  @IsOptional()
  @IsNumber(undefined, {
    message: 'user_id: El ID de usuario debe ser numérico.',
  })
  user_id?: number;

  @IsBoolean({
    message:
      'is_delivery: El valor de is_delivery debe ser booleano (true/false).',
  })
  is_delivery!: boolean;

  @IsOptional()
  @IsString({
    message: 'notes: Las notas deben ser una cadena de texto.',
  })
  notes?: string;

  @IsOptional()
  address?: Record<string, any>;

  @IsOptional()
  @IsArray({
    message: 'items: El campo items debe ser una lista valida.',
  })
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDTO)
  items?: CreateOrderItemDTO[];
}
