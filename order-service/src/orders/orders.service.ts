import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateOrderDTO } from './dto/create-order.dto';
import { UpdateOrderDTO } from './dto/update-order.dto';
import { User } from 'src/types/user';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async findAll(
    user?: User,
  ): Promise<Prisma.OrderGetPayload<{ include: { items: true } }>[]> {
    const include = { items: true };
    if (user && user.role.name === 'client') {
      return await this.prisma.order.findMany({
        where: { user_id: user.id },
        include,
      });
    }
    return await this.prisma.order.findMany({ include });
  }

  async findOne(
    id: string,
    user?: User,
  ): Promise<Prisma.OrderGetPayload<{ include: { items: true } }> | null> {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: { items: true },
    });
    if (!order) return null;
    if (user && user.role.name === 'client' && order.user_id !== user.id)
      return null;
    return order;
  }

  async create(
    data: CreateOrderDTO,
  ): Promise<Prisma.OrderGetPayload<{ include: { items: true } }>> {
    // create order with optional nested items
    const { items, ...rest } = data;
    const createData: Prisma.OrderCreateInput = { ...rest };

    if (items && Array.isArray(items) && items.length > 0) {
      createData.items = { create: items };
    }
    return await this.prisma.order.create({
      data: createData,
      include: { items: true },
    });
  }

  async update(
    id: string,
    data: UpdateOrderDTO,
  ): Promise<Prisma.OrderGetPayload<{ include: { items: true } }>> {
    const { items, ...rest } = data;
    const updateData: Prisma.OrderUpdateInput = { ...rest };
    if (items && Array.isArray(items) && items.length > 0) {
      updateData.items = { create: items };
    }
    return await this.prisma.order.update({
      where: { id },
      data: updateData,
      include: { items: true },
    });
  }

  async remove(
    id: string,
  ): Promise<Prisma.OrderGetPayload<{ include: { items: true } }>> {
    return await this.prisma.order.delete({
      where: { id },
      include: { items: true },
    });
  }
}
