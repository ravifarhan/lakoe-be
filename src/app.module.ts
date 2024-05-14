import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SellerOrderModule } from './seller-order/seller-order.module';
import { SellerStoreModule } from './seller-store/seller-store.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, SellerOrderModule, SellerStoreModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
