import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Branch, Prisma } from '@prisma/client';

@Injectable()
export class BranchesService {
  constructor(private prisma: PrismaService) {}

  async create(createBranchDto: Prisma.BranchCreateInput): Promise<Branch> {
    return this.prisma.branch.create({
      data: createBranchDto,
    });
  }

  async getAll(): Promise<Branch[]> {
    return this.prisma.branch.findMany();
  }

  async findOne(id: number): Promise<Branch | null> {
    return this.prisma.branch.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateBranchDto: Prisma.BranchUpdateInput,
  ): Promise<Branch> {
    return this.prisma.branch.update({
      where: { id },
      data: updateBranchDto,
    });
  }

  async remove(id: number): Promise<Branch | null> {
    return this.prisma.branch.delete({
      where: { id },
    });
  }
}
