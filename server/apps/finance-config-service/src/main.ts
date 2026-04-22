import { NestFactory } from '@nestjs/core';
import { FinanceConfigServiceModule } from './finance-config-service.module';

async function bootstrap() {
  const app = await NestFactory.create(FinanceConfigServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
