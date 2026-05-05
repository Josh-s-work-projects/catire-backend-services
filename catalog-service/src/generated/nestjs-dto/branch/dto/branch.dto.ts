
import {ApiProperty} from '@nestjs/swagger'


export class BranchDto {
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
coordinates_long: string ;
@ApiProperty({
  type: 'string',
})
coordinates_lat: string ;
}
