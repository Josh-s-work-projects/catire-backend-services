
import {ApiProperty} from '@nestjs/swagger'
import {Product} from '../../product/entities/product.entity'


export class Category {
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
  type: () => Product,
  isArray: true,
  required: false,
})
products?: Product[] ;
}
