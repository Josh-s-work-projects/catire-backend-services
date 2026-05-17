import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from '@prisma/client';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async findOne(id: number): Promise<Product | null> {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async create(data: CreateProductDTO): Promise<Product> {
    return this.prisma.product.create({ data: data as any });
  }

  async update(id: number, data: UpdateProductDTO): Promise<Product> {
    return this.prisma.product.update({ where: { id }, data: data as any });
  }

  async remove(id: number): Promise<boolean> {
    try {
      await this.prisma.product.delete({ where: { id } });
      return true;
    } catch (e) {
      return false;
    }
  }
}
