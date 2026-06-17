import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateOrderDTO, CreateOrderItemDTO } from './dto/create-order.dto';
import { UpdateOrderDTO } from './dto/update-order.dto';
import { User } from 'src/types/user';
import axios from 'axios';

export type OrderWithItems = Prisma.OrderGetPayload<{
  include: { items: true };
}>;

export type OrderWithUser = OrderWithItems & {
  user: User | null;
};

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async findAll(token: string, user?: User): Promise<OrderWithUser[]> {
    let orders: OrderWithItems[];

    if (user && user.role.name === 'client') {
      orders = await this.prisma.order.findMany({
        where: { user_id: user.id },
        include: { items: true },
      });
    } else {
      orders = await this.prisma.order.findMany({ include: { items: true } });
    }

    const ordersWithUsers = await Promise.all(
      orders.map(async (order) => {
        const user = await this.getUser(order.user_id, token).catch(() => null);

        return {
          ...order,
          user,
        };
      }),
    );

    return ordersWithUsers;
  }

  async findOne(
    id: string,
    token: string,
    user?: User,
  ): Promise<OrderWithUser | null> {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: { items: true },
    });

    if (!order) return null;
    if (user && user.role.name === 'client' && order.user_id !== user.id)
      return null;

    const userData = await this.getUser(order.user_id, token).catch(() => null);

    return {
      ...order,
      user: userData,
    };
  }

  async create(
    data: CreateOrderDTO,
    token: string,
    user_id: number,
  ): Promise<Prisma.OrderGetPayload<{ include: { items: true } }>> {
    const { items, ...rest } = data;
    const createData: Prisma.OrderCreateInput = { ...rest, user_id };

    if (items && Array.isArray(items) && items.length > 0) {
      const sanitized = await this.getValidateItems(items, token);
      createData.items = { create: sanitized };
    }

    return await this.prisma.order.create({
      data: createData,
      include: { items: true },
    });
  }

  async update(
    id: string,
    data: UpdateOrderDTO,
    token: string,
  ): Promise<Prisma.OrderGetPayload<{ include: { items: true } }>> {
    const { items, ...rest } = data;
    const updateData: Prisma.OrderUpdateInput = { ...rest };

    if (items && Array.isArray(items) && items.length > 0) {
      const sanitized = await this.getValidateItems(items, token);
      updateData.items = { create: sanitized };
    }

    return await this.prisma.order.update({
      where: { id },
      data: updateData,
      include: { items: true },
    });
  }

  async remove(id: string) {
    await this.prisma.orderDetails.deleteMany({
      where: { order_id: id },
    });

    return this.prisma.order.delete({
      where: { id },
      include: { items: true },
    });
  }

  async getValidateItems(
    items: CreateOrderItemDTO[],
    token: string,
  ): Promise<any[]> {
    const sanitized = items.map(
      async (it): Promise<CreateOrderItemDTO | undefined> => {
        try {
          const product = await axios.get(
            `${process.env.CATALOG_SERVICE_URL}/products/${it.product_id}`,
            { headers: { authorization: token } },
          );
          if (!product) {
            throw new NotFoundException(
              `Producto con ID ${it.product_id} no encontrado.`,
            );
          }
          return {
            product_id: it.product_id,
            quantity: typeof it.quantity === 'number' ? it.quantity : 1,
            base_price: it.base_price,
            features: it.features,
          };
        } catch (err) {
          console.log(err);
          throw new NotFoundException(
            `Producto con ID ${it.product_id} no encontrado.`,
          );
        }
      },
    );

    return await Promise.all(sanitized);
  }

  async getUser(user_id: number, token: string) {
    try {
      const res = await axios.get<User>(
        `${process.env.AUTH_SERVICE_URL}/users/${user_id}`,
        { headers: { authorization: token } },
      );
      const user = res.data;

      if (!user) {
        throw new NotFoundException(`Usuario con ID ${user_id} no encontrado.`);
      }

      return user;
    } catch (error) {
      console.log(error);
      throw new NotFoundException(`Usuario con ID ${user_id} no encontrado.`);
    }
  }
}
