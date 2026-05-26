import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CheckPermission } from 'src/auth/permission.decorator';
import { PermissionGuard } from 'src/auth/permission.guard';
import { BranchesService } from './branches.service';
import { Branch } from '@prisma/client';
import { CreateBranchDTO } from './dto/create-branch.dto';
import { UpdateBranchDTO } from './dto/update-branch.dto';

@Controller('branches')
export class BranchesController {
  constructor(private readonly branchesService: BranchesService) {}

  @Post()
  @UseGuards(PermissionGuard)
  @CheckPermission('Branches', 'create')
  async create(@Body() createBranchDto: CreateBranchDTO): Promise<Branch> {
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
  @UseGuards(PermissionGuard)
  @CheckPermission('Branches', 'update')
  async update(
    @Param('id') id: string,
    @Body() updateBranchDto: UpdateBranchDTO,
  ): Promise<Branch> {
    return await this.branchesService.update(+id, updateBranchDto);
  }

  @Delete(':id')
  @UseGuards(PermissionGuard)
  @CheckPermission('Branches', 'delete')
  async remove(@Param('id') id: string): Promise<Branch | null> {
    return await this.branchesService.remove(+id);
  }
}
