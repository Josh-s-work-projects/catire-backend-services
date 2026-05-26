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
import { CheckPermission } from 'src/auth/permission.decorator';
import { PermissionGuard } from 'src/auth/permission.guard';
import { MenusService } from './menus.service';
import { CreateMenuDTO } from './dto/create-menu.dto';
import { UpdateMenuDTO } from './dto/update-menu.dto';

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
  findAll() {
    return this.menusService.findAll();
  }

  @Get(':id')
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
