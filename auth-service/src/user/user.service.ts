import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { UpdateUserDTO } from './dto/update-user.dto';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(body: CreateUserDto): Promise<User | null> {
    try {
      const salts = await bcrypt.genSalt();
      const hash = await bcrypt.hash(body.password, salts);

      const newUser = await this.prisma.user.create({
        data: {
          ...body,
          password: hash,
        },
      });

      return newUser;
    } catch (error) {
      console.log('ERROR: ', error);
      return null;
    }
  }

  async findOneUser(email: string): Promise<User | null> {
    try {
      const user = await this.prisma.user.findFirst({ where: { email } });
      return user;
    } catch (error) {
      console.log('ERROR: ', error);
      return null;
    }
  }

  async getUserById(id: number): Promise<User | null> {
    try {
      const user = await this.prisma.user.findFirst({ where: { id } });
      return user;
    } catch (error) {
      console.log('ERROR: ', error);
      return null;
    }
  }

  async findAllUsers(): Promise<User[]> {
    try {
      return await this.prisma.user.findMany();
    } catch (error) {
      console.log('ERROR: ', error);
      return [];
    }
  }

  async updateUser(id: number, data: UpdateUserDTO): Promise<User | null> {
    try {
      let newPassword = data.password;
      if (data.password) {
        const salts = await bcrypt.genSalt();
        newPassword = await bcrypt.hash(data.password, salts);
      }

      const updated = await this.prisma.user.update({
        where: { id },
        data: { ...data, password: newPassword } as User,
      });

      return updated;
    } catch (error) {
      console.log('ERROR: ', error);
      return null;
    }
  }

  async deleteUser(id: number): Promise<boolean> {
    try {
      await this.prisma.user.delete({ where: { id } });
      return true;
    } catch (error) {
      console.log('ERROR: ', error);
      return false;
    }
  }
}
