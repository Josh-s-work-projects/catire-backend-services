import {
  Controller,
  Get,
  Param,
  Res,
  Body,
  Post,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CheckPermission } from 'src/auth/permission.decorator';
import { PermissionGuard } from 'src/auth/permission.guard';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { Product } from '@prisma/client';
import { type Response } from 'express';
import PDFDocument from 'pdfkit';

@Controller('api/catalog/products')
export class ProductsController {
  constructor(private service: ProductsService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.service.findAll();
  }

  @Get('report')
  async report(@Res() res: Response) {
    const products = await this.service.findAll();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=products-report.pdf',
    );

    const doc = new PDFDocument();
    doc.pipe(res);

    doc.fontSize(18).text('Products Report', { align: 'center' });
    doc.moveDown();

    products.forEach((p) => {
      doc.fontSize(12).text(`ID: ${p.id} - ${p.name}`);
      doc.text(`Price: ${p.base_price}`);
      doc.text(`Category ID: ${p.category_id}`);
      doc.moveDown();
    });

    doc.end();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product | null> {
    return this.service.findOne(Number(id));
  }

  @Post()
  @UseGuards(PermissionGuard)
  @CheckPermission('Products', 'create')
  async create(@Body() body: CreateProductDTO): Promise<Product> {
    return this.service.create(body);
  }

  @Put(':id')
  @UseGuards(PermissionGuard)
  @CheckPermission('Products', 'update')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateProductDTO,
  ): Promise<Product> {
    return this.service.update(Number(id), body);
  }

  @Delete(':id')
  @UseGuards(PermissionGuard)
  @CheckPermission('Products', 'delete')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.service.remove(Number(id));
  }
}
