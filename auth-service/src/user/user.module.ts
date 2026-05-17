import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersReportController } from './users-report.controller';
import { UsersController } from './users.controller';

@Module({
  providers: [UserService, PrismaService],
  controllers: [UsersReportController, UsersController],
})
export class UserModule {}
