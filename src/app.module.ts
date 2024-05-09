import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SellerOrderModule } from './seller-order/seller-order.module';

@Module({
  imports: [UsersModule, SellerOrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
