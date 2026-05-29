import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreatePurchaseDTO {
  @IsString({
    message: 'order_id: El ID de la orden debe ser una cadena de texto.',
  })
  order_id!: string;

  @IsNumber({}, { message: 'user_id: El ID de usuario debe ser numérico.' })
  user_id!: number;

  @IsNumber({}, { message: 'purchase_base: El valor base debe ser numérico.' })
  @Min(0)
  purchase_base!: number;

  @IsNumber(
    {},
    {
      message: 'purchase_additional: El valor adicional debe ser numérico.',
    },
  )
  @Min(0)
  purchase_additional!: number;

  @IsNumber({}, { message: 'purchase_total: El total debe ser numérico.' })
  @Min(0)
  purchase_total!: number;

  @IsOptional()
  @IsString({
    message: 'notes: Las notas deben ser texto.',
  })
  notes?: string;

  @IsOptional()
  @IsString({
    message: 'invoice_number: El número de factura debe ser texto.',
  })
  invoice_number?: string;
}
