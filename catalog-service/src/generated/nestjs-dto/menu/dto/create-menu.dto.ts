
import {ApiProperty} from '@nestjs/swagger'




export class CreateMenuDto {
  @ApiProperty({
  type: 'string',
})
name: string ;
}
