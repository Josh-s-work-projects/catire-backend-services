import { Controller, Get, Res } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { type Response } from 'express';
import PDFDocument from 'pdfkit';

@Controller('api/auth/users')
export class UsersReportController {
  constructor(private prisma: PrismaService) {}

  @Get('report')
  async report(@Res() res: Response) {
    const users = await this.prisma.user.findMany();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=users-report.pdf',
    );

    const doc = new PDFDocument();
    doc.pipe(res);

    doc.fontSize(18).text('Users Report', { align: 'center' });
    doc.moveDown();

    users.forEach((u) => {
      doc.fontSize(12).text(`ID: ${u.id}`);
      doc.text(`Name: ${u.full_name ?? ''}`);
      doc.text(`Email: ${u.email ?? ''}`);
      doc.moveDown();
    });

    doc.end();
  }
}
