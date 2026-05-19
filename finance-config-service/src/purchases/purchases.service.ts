import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma-postgres.service';
import { Purchase } from 'src/generated/postgres-client';
import { CreatePurchaseDTO } from './dto/create-purchase.dto';
import { UpdatePurchaseDTO } from './dto/update-purchase.dto';

@Injectable()
export class PurchasesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Purchase[]> {
    return await this.prisma.purchase.findMany();
  }

  async findOne(id: number): Promise<Purchase | null> {
    return await this.prisma.purchase.findUnique({ where: { id } });
  }

  async create(data: CreatePurchaseDTO): Promise<Purchase> {
    return await this.prisma.purchase.create({ data });
  }

  async update(id: number, data: UpdatePurchaseDTO): Promise<Purchase> {
    return await this.prisma.purchase.update({ where: { id }, data });
  }

  async remove(id: number): Promise<boolean> {
    try {
      await this.prisma.purchase.delete({ where: { id } });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
