
import {ApiProperty} from '@nestjs/swagger'




export class ConnectMenuDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
}
