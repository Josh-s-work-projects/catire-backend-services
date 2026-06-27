import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrdersReportController } from './orders-report.controller';
import { OrdersGateway } from './orders.gateway';
@Module({
  imports: [],
  providers: [OrdersService, OrdersGateway],
  controllers: [OrdersReportController, OrdersController],
})
export class OrdersModule {}
