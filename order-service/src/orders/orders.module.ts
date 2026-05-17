import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaService as PrismaPostgresService } from '../prisma/prisma-postgres.service';
import { PrismaService as PrismaMongoService } from '../prisma/prisma-mongo.service';

@Module({
  imports: [],
  providers: [OrdersService, PrismaPostgresService, PrismaMongoService],
  controllers: [OrdersController],
})
export class OrdersModule {}
