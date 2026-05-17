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
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dto/create-order.dto';
import { UpdateOrderDTO } from './dto/update-order.dto';
import { Order } from '../generated/postgres-client';
import { type Response } from 'express';
import axios from 'axios';
import PDFDocument from 'pdfkit';
import { Product } from './types/Product';

@Controller('api/order/orders')
export class OrdersController {
  constructor(private service: OrdersService) {}

  @Get()
  async findAll(): Promise<Order[]> {
    return this.service.findAll();
  }

  @Get('report')
  async report(@Res() res: Response): Promise<void> {
    const orders = await this.service.findAll();

    const productPromises = orders.map((o) =>
      axios
        .get<Product>(`http://localhost/api/catalog/products/${o.product_id}`)
        .then((r) => r.data)
        .catch(() => null),
    );

    const products = await Promise.all(productPromises);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=orders-report.pdf',
    );

    const doc = new PDFDocument();
    doc.pipe(res);

    doc.fontSize(18).text('Orders Report', { align: 'center' });
    doc.moveDown();

    orders.forEach((o, idx) => {
      const product = products[idx];
      doc.fontSize(12).text(`Order ID: ${o.id}`);
      if (product) {
        doc.text(`Product: ${product.name} (id:${product.id})`);
      } else {
        doc.text(`Product ID: ${o.product_id}`);
      }
      doc.text(`Quantity: ${o.quantity}, Delivery: ${o.is_delivery}`);
      if (o.notes) doc.text(`Notes: ${o.notes}`);
      doc.moveDown();
    });

    doc.end();
  }

  @Post()
  async create(@Body() body: CreateOrderDTO): Promise<Order> {
    return this.service.create(body);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateOrderDTO,
  ): Promise<Order> {
    return this.service.update(Number(id), body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.service.remove(Number(id));
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Order | null> {
    return this.service.findOne(Number(id));
  }
}
