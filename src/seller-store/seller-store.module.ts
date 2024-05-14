import { Module } from '@nestjs/common';
import { SellerStoreService } from './seller-store.service';
import { SellerStoreController } from './seller-store.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SellerStoreController],
  providers: [SellerStoreService, PrismaService],
})
export class SellerStoreModule {}
