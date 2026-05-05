
import {ApiProperty} from '@nestjs/swagger'




export class UpdateBranchDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
name?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
coordinates_long?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
coordinates_lat?: string ;
}
