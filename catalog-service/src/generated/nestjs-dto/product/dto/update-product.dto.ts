
import {ApiProperty} from '@nestjs/swagger'




export class UpdateProductDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
name?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
img_src?: string ;
@ApiProperty({
  type: 'number',
  format: 'float',
  required: false,
})
base_price?: number ;
}
