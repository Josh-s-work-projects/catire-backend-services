import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PurchasesModule } from './purchases/purchases.module';

@Module({
  imports: [PrismaModule, PurchasesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
