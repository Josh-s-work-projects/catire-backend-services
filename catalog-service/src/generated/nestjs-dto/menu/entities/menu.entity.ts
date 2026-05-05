
import {ApiProperty} from '@nestjs/swagger'
import {Branch} from '../../branch/entities/branch.entity'
import {Product} from '../../product/entities/product.entity'


export class Menu {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'string',
})
name: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
branch_id: number ;
@ApiProperty({
  type: () => Branch,
  required: false,
})
branch?: Branch ;
@ApiProperty({
  type: () => Product,
  isArray: true,
  required: false,
})
products?: Product[] ;
}
