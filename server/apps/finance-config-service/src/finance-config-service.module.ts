import { Module } from '@nestjs/common';
import { FinanceConfigServiceController } from './finance-config-service.controller';
import { FinanceConfigServiceService } from './finance-config-service.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [FinanceConfigServiceController],
  providers: [FinanceConfigServiceService],
})
export class FinanceConfigServiceModule {}
