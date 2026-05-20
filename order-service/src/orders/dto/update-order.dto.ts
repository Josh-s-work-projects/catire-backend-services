import { PartialType } from '@nestjs/swagger';
import { CreateOrderDTO } from './create-order.dto';

export class UpdateOrderDTO extends PartialType(CreateOrderDTO) {}
