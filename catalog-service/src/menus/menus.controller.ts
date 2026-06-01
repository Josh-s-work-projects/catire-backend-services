import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CheckPermission } from '../auth/permission.decorator';
import { PermissionGuard } from '../auth/permission.guard';
import { RemoteAuthGuard } from '../auth/remote-auth.guard';
import { MenusService } from './menus.service';
import { CreateMenuDTO } from './dto/create-menu.dto';
import { UpdateMenuDTO } from './dto/update-menu.dto';

@UseGuards(RemoteAuthGuard, PermissionGuard)
@Controller('menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @Post()
  @UseGuards(PermissionGuard)
  @CheckPermission('Menus', 'create')
  create(@Body() createMenuDto: CreateMenuDTO) {
    return this.menusService.create(createMenuDto);
  }

  @Get()
  @UseGuards(PermissionGuard)
  @CheckPermission('Menus', 'read')
  findAll() {
    return this.menusService.findAll();
  }

  @Get(':id')
  @UseGuards(PermissionGuard)
  @CheckPermission('Menus', 'read')
  findOne(@Param('id') id: string) {
    return this.menusService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(PermissionGuard)
  @CheckPermission('Menus', 'update')
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDTO) {
    return this.menusService.update(+id, updateMenuDto);
  }

  @Delete(':id')
  @UseGuards(PermissionGuard)
  @CheckPermission('Menus', 'delete')
  remove(@Param('id') id: string) {
    return this.menusService.remove(+id);
  }
}
