import { Global, Module } from '@nestjs/common';
import { PrismaService as PrismaPostgresService } from './prisma-postgres.service';
import { PrismaService as PrismaMongoService } from './prisma-mongo.service';
import { IsRelationship } from './validator/IsRelationship.validator';
import { IsUnique } from './validator/IsUnique.validator';

@Global()
@Module({
  providers: [
    PrismaPostgresService,
    PrismaMongoService,
    {
      provide: IsRelationship,
      useClass: IsRelationship,
    },
    {
      provide: IsUnique,
      useClass: IsUnique,
    },
  ],
  exports: [
    PrismaPostgresService,
    PrismaMongoService,
    IsRelationship,
    IsUnique,
  ],
})
export class PrismaModule {}
