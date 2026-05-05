import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Branch } from '@prisma/client';
import { CreateBranchDto } from 'src/generated/nestjs-dto/branch/dto/create-branch.dto';
import { UpdateBranchDto } from 'src/generated/nestjs-dto/branch/dto/update-branch.dto';

@Injectable()
export class BranchesService {
  constructor(private prisma: PrismaService) {}

  async create(createBranchDto: CreateBranchDto): Promise<Branch> {
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

  async update(id: number, updateBranchDto: UpdateBranchDto): Promise<Branch> {
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
