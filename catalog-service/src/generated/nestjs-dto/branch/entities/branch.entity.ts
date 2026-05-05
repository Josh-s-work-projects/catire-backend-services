
import {ApiProperty} from '@nestjs/swagger'
import {Menu} from '../../menu/entities/menu.entity'


export class Branch {
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
@ApiProperty({
  type: () => Menu,
  isArray: true,
  required: false,
})
menus?: Menu[] ;
}
