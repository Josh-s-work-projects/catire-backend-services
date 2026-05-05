
import {ApiProperty} from '@nestjs/swagger'




export class ConnectProductDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
}
