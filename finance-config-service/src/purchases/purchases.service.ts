import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Purchase } from '@prisma/client';
import { CreatePurchaseDTO } from './dto/create-purchase.dto';
import { UpdatePurchaseDTO } from './dto/update-purchase.dto';
import { User } from 'src/types/user';

@Injectable()
export class PurchasesService {
  constructor(private prisma: PrismaService) {}

  async findAll(user?: User): Promise<Purchase[]> {
    if (user && user.role.name === 'client') {
      return await this.prisma.purchase.findMany({
        where: { user_id: user.id },
      });
    }
    return await this.prisma.purchase.findMany();
  }
  async findOne(id: string, user?: User): Promise<Purchase | null> {
    const purchase = await this.prisma.purchase.findUnique({ where: { id } });
    if (!purchase) return null;
    if (user && user.role.name === 'client' && purchase.user_id !== user.id)
      return null;
    return purchase;
  }

  async create(data: CreatePurchaseDTO): Promise<Purchase> {
    return await this.prisma.purchase.create({ data });
  }

  async update(id: string, data: UpdatePurchaseDTO): Promise<Purchase> {
    return await this.prisma.purchase.update({ where: { id }, data });
  }

  async remove(id: string): Promise<boolean> {
    try {
      await this.prisma.purchase.delete({ where: { id } });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
