import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { PermissionGuard } from '../auth/permission.guard';
import { CheckPermission } from '../auth/permission.decorator';

@UseGuards(JwtAuthGuard, PermissionGuard)
@Controller('users')
export class UsersController {
  constructor(private service: UserService) {}

  @Get()
  @CheckPermission('Users', 'read')
  async findAll(): Promise<User[]> {
    return this.service.findAllUsers();
  }

  @Get(':id')
  @CheckPermission('Users', 'read')
  async findOne(@Param('id') id: string): Promise<User | null> {
    return this.service.getUserById(Number(id));
  }

  @Post()
  @CheckPermission('Users', 'create')
  async create(@Body() body: CreateUserDto): Promise<User | null> {
    return this.service.createUser(body);
  }

  @Put(':id')
  @CheckPermission('Users', 'update')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateUserDTO,
  ): Promise<User | null> {
    return this.service.updateUser(Number(id), body);
  }

  @Delete(':id')
  @CheckPermission('Users', 'delete')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.service.deleteUser(Number(id));
  }
}
