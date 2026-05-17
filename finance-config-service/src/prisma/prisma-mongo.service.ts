import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../generated/mongo-client';

@Injectable()
export class PrismaMongoService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      accelerateUrl: process.env['MONGO_URL'],
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
