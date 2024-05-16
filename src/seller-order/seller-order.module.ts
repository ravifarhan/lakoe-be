import { Module } from '@nestjs/common';
import { SellerOrderService } from './seller-order.service';
import { SellerOrderController } from './seller-order.controller';

@Module({
  controllers: [SellerOrderController],
  providers: [SellerOrderService],
})
export class SellerOrderModule {}
