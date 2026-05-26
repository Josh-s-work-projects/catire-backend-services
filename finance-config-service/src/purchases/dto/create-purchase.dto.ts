import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreatePurchaseDTO {
  @IsString()
  order_id!: string;

  @IsNumber({}, { message: 'El ID de usuario debe ser numérico.' })
  user_id!: number;

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

  @IsOptional()
  @IsString()
  invoice_number?: string;
}
