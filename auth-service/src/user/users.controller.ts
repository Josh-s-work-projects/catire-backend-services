import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from '@prisma/client';

@Controller('api/auth/users')
export class UsersController {
  constructor(private service: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.service.findAllUsers();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User | null> {
    return this.service.getUserById(Number(id));
  }

  @Post()
  async create(@Body() body: CreateUserDto): Promise<User | null> {
    return this.service.createUser(body);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateUserDTO,
  ): Promise<User | null> {
    return this.service.updateUser(Number(id), body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.service.deleteUser(Number(id));
  }
}
