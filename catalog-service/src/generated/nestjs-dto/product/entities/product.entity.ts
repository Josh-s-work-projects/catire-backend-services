
import {ApiProperty} from '@nestjs/swagger'
import {Menu} from '../../menu/entities/menu.entity'
import {Category} from '../../category/entities/category.entity'


export class Product {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
menu_id: number ;
@ApiProperty({
  type: 'string',
})
name: string ;
@ApiProperty({
  type: 'string',
})
img_src: string ;
@ApiProperty({
  type: 'number',
  format: 'float',
})
base_price: number ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
category_id: number ;
@ApiProperty({
  type: () => Menu,
  required: false,
})
menu?: Menu ;
@ApiProperty({
  type: () => Category,
  required: false,
})
category?: Category ;
}
