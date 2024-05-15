import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SellerOrderModule } from './seller-order/seller-order.module';
import { SellerStoreModule } from './seller-store/seller-store.module';
import { AuthModule } from './auth/auth.module';
import { InvoicesModule } from './invoices/invoices.module';
import { PaymentsModule } from './payments/payments.module';
import { CouriersModule } from './couriers/couriers.module';
import { ConfirmationPaymentModule } from './confirmation_payment/confirmation_payment.module';
import { InvoiceHistoriesModule } from './invoice_histories/invoice_histories.module';
import { StoresModule } from './stores/stores.module';
import { ProductsModule } from './products/products.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    UsersModule,
    SellerOrderModule,
    SellerStoreModule,
    AuthModule,
    InvoicesModule,
    PaymentsModule,
    CouriersModule,
    ConfirmationPaymentModule,
    InvoiceHistoriesModule,
    StoresModule,
    ProductsModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
