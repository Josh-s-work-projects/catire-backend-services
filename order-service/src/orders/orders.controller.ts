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
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dto/create-order.dto';
import { UpdateOrderDTO } from './dto/update-order.dto';
import { Prisma } from '@prisma/client';
import { type Response } from 'express';
import axios from 'axios';
import PDFDocument from 'pdfkit';
import { CheckPermission } from 'src/auth/permission.decorator';
import { PermissionGuard } from 'src/auth/permission.guard';
import { type Request as TypedRequest } from 'src/types/request';
import { Product } from './types/Product';

@Controller('api/order/orders')
export class OrdersController {
  constructor(private service: OrdersService) {}

  @Get()
  @UseGuards(PermissionGuard)
  @CheckPermission('Orders', 'read')
  async findAll(
    @Request() req: TypedRequest,
  ): Promise<Prisma.OrderGetPayload<{ include: { items: true } }>[]> {
    return await this.service.findAll(req.user);
  }

  @Get('report')
  async report(@Res() res: Response): Promise<void> {
    const orders = await this.service.findAll();

    const catalogUrl = process.env.CATALOG_SERVICE_URL || 'http://localhost';
    // Fetch product details for each item
    const requests: Array<Promise<CatalogResponse>> = [];
    type CatalogResponse = {
      orderId: string;
      itemId: string;
      product: Product | null;
    };
    for (const o of orders) {
      for (const it of o.items || []) {
        requests.push(
          axios
            .get<Product>(`${catalogUrl}/api/catalog/products/${it.product_id}`)
            .then((r) => ({
              orderId: o.id,
              itemId: it.id,
              product: r.data,
            }))
            .catch(() => ({ orderId: o.id, itemId: it.id, product: null })),
        );
      }
    }

    const results: CatalogResponse[] = await Promise.all(requests);
    const productsByOrder: Record<string, CatalogResponse[]> = {};
    for (const r of results) {
      productsByOrder[r.orderId] = productsByOrder[r.orderId] || [];
      productsByOrder[r.orderId].push(r);
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=orders-report.pdf',
    );

    const doc = new PDFDocument();
    doc.pipe(res);

    doc.fontSize(18).text('Reporte de pedidos', { align: 'center' });
    doc.moveDown();

    for (const o of orders) {
      doc.fontSize(12).text(`ID de pedido: ${o.id}`);
      const items = o.items || [];
      for (const it of items) {
        const found = (productsByOrder[o.id] || []).find(
          (p) => p.itemId === it.id,
        );
        if (found && found.product) {
          doc.text(
            `- ${found.product.name} (x${it.quantity}) - ${it.line_total}`,
          );
        } else {
          doc.text(
            `- Producto ID: ${it.product_id} (x${it.quantity}) - ${it.line_total}`,
          );
        }
      }
      doc.text(`Entrega: ${o.is_delivery}`);
      if (o.notes) doc.text(`Notas: ${o.notes}`);
      doc.moveDown();
    }

    doc.end();
  }

  @UseGuards(PermissionGuard)
  @CheckPermission('Orders', 'create')
  @Post()
  async create(
    @Request() req: TypedRequest,
    @Body() body: CreateOrderDTO,
  ): Promise<Prisma.OrderGetPayload<{ include: { items: true } }>> {
    return this.service.create({ ...body, user_id: req.user?.id });
  }

  @UseGuards(PermissionGuard)
  @CheckPermission('Orders', 'update')
  @Put(':id')
  async update(
    @Request() req: TypedRequest,
    @Param('id') id: string,
    @Body() body: UpdateOrderDTO,
  ): Promise<Prisma.OrderGetPayload<{ include: { items: true } }>> {
    return this.service.update(id, body);
  }

  @UseGuards(PermissionGuard)
  @CheckPermission('Orders', 'delete')
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.service.remove(id);
  }

  @UseGuards(PermissionGuard)
  @CheckPermission('Orders', 'read')
  @Get(':id')
  async findOne(
    @Request() req: TypedRequest,
    @Param('id') id: string,
  ): Promise<Prisma.OrderGetPayload<{ include: { items: true } }> | null> {
    return this.service.findOne(id, req.user);
  }
}
