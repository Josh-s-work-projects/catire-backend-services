import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma-postgres.service';
import { Order } from '../generated/postgres-client';
import { CreateOrderDTO } from './dto/create-order.dto';
import { UpdateOrderDTO } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Order[]> {
    return await this.prisma.order.findMany({
      include: {
        details: true,
      },
    });
  }

  async findOne(id: number): Promise<Order | null> {
    return await this.prisma.order.findUnique({
      where: {
        id,
      },
      include: {
        details: true,
      },
    });
  }

  async create(data: CreateOrderDTO): Promise<Order> {
    return await this.prisma.order.create({ data });
  }

  async update(id: number, data: UpdateOrderDTO): Promise<Order> {
    return await this.prisma.order.update({ where: { id }, data });
  }

  async remove(id: number): Promise<boolean> {
    try {
      await this.prisma.order.delete({ where: { id } });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
