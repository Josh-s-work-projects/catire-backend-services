
import {ApiProperty} from '@nestjs/swagger'




export class CreateCategoryDto {
  @ApiProperty({
  type: 'string',
})
name: string ;
}
