
import {ApiProperty} from '@nestjs/swagger'




export class ConnectCategoryDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
}
