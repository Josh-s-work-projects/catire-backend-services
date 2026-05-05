
import {ApiProperty} from '@nestjs/swagger'




export class UpdateCategoryDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
name?: string ;
}
