import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { IsRelationship } from './validator/IsRelationship.validator';

@Global()
@Module({
  providers: [
    PrismaService,
    {
      provide: IsRelationship,
      useClass: IsRelationship,
    },
  ],
  exports: [PrismaService, IsRelationship],
})
export class PrismaModule {}
