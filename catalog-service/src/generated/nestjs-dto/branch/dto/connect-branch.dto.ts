
import {ApiProperty} from '@nestjs/swagger'




export class ConnectBranchDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
}
