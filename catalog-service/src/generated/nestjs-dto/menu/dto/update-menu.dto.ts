
import {ApiProperty} from '@nestjs/swagger'




export class UpdateMenuDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
name?: string ;
}
