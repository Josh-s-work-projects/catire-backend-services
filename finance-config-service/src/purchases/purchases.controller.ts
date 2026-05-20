import {
  Controller,
  Get,
  Param,
  Res,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { CreatePurchaseDTO } from './dto/create-purchase.dto';
import { UpdatePurchaseDTO } from './dto/update-purchase.dto';
import { Purchase } from 'src/generated/postgres-client';
import { type Response } from 'express';
import PDFDocument from 'pdfkit';

@Controller('api/finance/purchases')
export class PurchasesController {
  constructor(private service: PurchasesService) {}

  @Get()
  async findAll(): Promise<Purchase[]> {
    return await this.service.findAll();
  }

  @Get('report')
  async report(@Res() res: Response): Promise<void> {
    const purchases = await this.service.findAll();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=purchases-report.pdf',
    );

    const doc = new PDFDocument();
    doc.pipe(res);

    doc.fontSize(18).text('Purchases Report', { align: 'center' });
    doc.moveDown();

    purchases.forEach((p: Purchase) => {
      doc.fontSize(12).text(`ID: ${p.id}`);
      doc.text(`Order ID: ${p.order_id}`);
      doc.text(`Base: ${p.purchase_base.toString()}`);
      doc.text(`Additional: ${p.purchase_additional.toString()}`);
      doc.text(`Total: ${p.purchase_total.toString()}`);
      if (p.notes) doc.text(`Notes: ${p.notes}`);
      doc.moveDown();
    });

    doc.end();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Purchase | null> {
    return await this.service.findOne(Number(id));
  }

  @Post()
  async create(@Body() body: CreatePurchaseDTO): Promise<Purchase> {
    return await this.service.create(body);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdatePurchaseDTO,
  ): Promise<Purchase> {
    return await this.service.update(Number(id), body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return await this.service.remove(Number(id));
  }
}
