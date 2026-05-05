import { ApiProperty } from '@nestjs/swagger'


export class CreateBranchDto {
  @ApiProperty({
    type: 'string',
    required: true,
  })
  name: string;
  
  @ApiProperty({
    type: 'string',
    required: true,
  })
  coordinates_long: string;
  
  @ApiProperty({
    type: 'string',
    required: true,
  })
  coordinates_lat: string;
}
