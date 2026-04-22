import { NestFactory } from '@nestjs/core';
import { OrderServiceModule } from '../../order-service/src/order-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    OrderServiceModule,
    {
      transport: Transport.REDIS,
      options: {
        host: process.env.REDIS_HOST || 'localhost',
        port: 6379,
      },
    },
  );
  await app.listen();
  console.log('Order Service is listening via Redis Broker');
}
bootstrap();