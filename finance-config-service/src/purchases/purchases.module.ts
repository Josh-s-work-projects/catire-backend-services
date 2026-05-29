import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
@Module({
  imports: [],
  providers: [PurchasesService],
  controllers: [PurchasesController],
})
export class PurchasesModule {}
