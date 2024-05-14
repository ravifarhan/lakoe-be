import { Module } from '@nestjs/common';
import { CouriersService } from './couriers.service';
import { CouriersController } from './couriers.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CouriersController],
  providers: [CouriersService, PrismaService],
})
export class CouriersModule {}
