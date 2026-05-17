import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class OrderDetailDTO {
  @IsString()
  name_tag!: string;

  @IsString()
  value!: string;

  @IsNumber()
  product_id!: number;
}

export class CreateOrderDTO {
  @IsNumber()
  product_id!: number;

  @IsNumber()
  quantity!: number;

  @IsBoolean()
  is_delivery!: boolean;

  @IsOptional()
  @IsString()
  notes?: string;
}
