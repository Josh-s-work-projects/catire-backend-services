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
  @IsNumber()
  product_id!: number;

  @IsNumber()
  menu_id!: number;

  @IsString()
  name!: string;

  @IsString()
  img_src!: string;

  @IsNumber()
  base_price!: number;

  @IsNumber()
  category_id!: number;

  @IsNumber()
  quantity!: number;

  @IsNumber()
  line_total!: number;
}

export class CreateOrderDTO {
  @IsOptional()
  @IsNumber()
  user_id?: number;

  @IsBoolean()
  is_delivery!: boolean;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  address?: Record<string, any>;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDTO)
  items?: CreateOrderItemDTO[];
}
