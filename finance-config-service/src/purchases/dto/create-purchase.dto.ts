import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreatePurchaseDTO {
  @IsNumber(undefined, { message: 'El id de la orden debe ser numérico.' })
  order_id!: number;

  @IsNumber({}, { message: 'El valor base debe ser numérico.' })
  @Min(0)
  purchase_base!: number;

  @IsNumber({}, { message: 'El valor adicional debe ser numérico.' })
  @Min(0)
  purchase_additional!: number;

  @IsNumber({}, { message: 'El total debe ser numérico.' })
  @Min(0)
  purchase_total!: number;

  @IsOptional()
  @IsString()
  notes?: string;
}
