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
  Request,
} from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { CreatePurchaseDTO } from './dto/create-purchase.dto';
import { UpdatePurchaseDTO } from './dto/update-purchase.dto';
import { Purchase } from '@prisma/client';
import { type Response } from 'express';
import PDFDocument from 'pdfkit';
import { CheckPermission } from '../auth/permission.decorator';
import { PermissionGuard } from '../auth/permission.guard';
import { RemoteAuthGuard } from '../auth/remote-auth.guard';
import { type Request as TypedRequest } from '../types/request';

@UseGuards(RemoteAuthGuard, PermissionGuard)
@Controller('api/finance/purchases')
export class PurchasesController {
  constructor(private service: PurchasesService) {}

  @Get()
  @UseGuards(PermissionGuard)
  @CheckPermission('Purchases', 'read')
  async findAll(): Promise<Purchase[]> {
    // If client, the guard allowed; service will filter by req.user
    return await this.service.findAll();
  }

  @Get('report')
  @UseGuards(PermissionGuard)
  @CheckPermission('Purchases', 'read')
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
  @UseGuards(PermissionGuard)
  @CheckPermission('Purchases', 'read')
  async findOne(
    @Request() req: TypedRequest,
    @Param('id') id: string,
  ): Promise<Purchase | null> {
    return await this.service.findOne(id, req.user);
  }

  @Post()
  @UseGuards(PermissionGuard)
  @CheckPermission('Purchases', 'create')
  async create(
    @Request() req: TypedRequest,
    @Body() body: CreatePurchaseDTO,
  ): Promise<Purchase> {
    // Attach user_id from token
    const data = { ...body, user_id: req.user?.id };
    return await this.service.create(data);
  }

  @Put(':id')
  @UseGuards(PermissionGuard)
  @CheckPermission('Purchases', 'update')
  async update(
    @Param('id') id: string,
    @Body() body: UpdatePurchaseDTO,
  ): Promise<Purchase> {
    return await this.service.update(id, body);
  }

  @Delete(':id')
  @UseGuards(PermissionGuard)
  @CheckPermission('Purchases', 'delete')
  async remove(@Param('id') id: string): Promise<boolean> {
    return await this.service.remove(id);
  }
}
