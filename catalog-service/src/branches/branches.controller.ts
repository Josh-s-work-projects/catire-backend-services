import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BranchesService } from './branches.service';
import { Branch, Prisma } from '@prisma/client';

@Controller('branches')
export class BranchesController {
  constructor(private readonly branchesService: BranchesService) {}

  @Post()
  async create(
    @Body() createBranchDto: Prisma.BranchCreateInput,
  ): Promise<Branch> {
    return await this.branchesService.create(createBranchDto);
  }

  @Get()
  async findAll(): Promise<Branch[]> {
    return await this.branchesService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Branch | null> {
    return await this.branchesService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBranchDto: Prisma.BranchUpdateInput,
  ): Promise<Branch> {
    return await this.branchesService.update(+id, updateBranchDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Branch | null> {
    return await this.branchesService.remove(+id);
  }
}
