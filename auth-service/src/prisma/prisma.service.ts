import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    // Adapter and client types may not be fully resolvable in some environments
    // cast to known shapes to avoid unsafe-call/assignment lint warnings.
    const adapter = new PrismaPg({
      connectionString: process.env['DATABASE_URL']!,
    }) as unknown as object;

    // Use the PrismaClient constructor parameter type so the argument is properly typed
    const prismaOptions = { adapter } as unknown as ConstructorParameters<
      typeof PrismaClient
    >[0];

    super(prismaOptions);
  }

  async onModuleInit() {
    await this.$connect();
  }
}
