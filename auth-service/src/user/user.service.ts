import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

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
}
