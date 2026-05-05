
import {ApiProperty} from '@nestjs/swagger'


export class ProductDto {
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
  type: 'string',
})
img_src: string ;
@ApiProperty({
  type: 'number',
  format: 'float',
})
base_price: number ;
}
