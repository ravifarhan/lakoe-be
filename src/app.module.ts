import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { InvoicesModule } from './invoices/invoices.module';
import { PaymentsModule } from './payments/payments.module';
import { CouriersModule } from './couriers/couriers.module';
import { ConfirmationPaymentModule } from './confirmation_payment/confirmation_payment.module';
import { InvoiceHistoriesModule } from './invoice_histories/invoice_histories.module';

@Module({
  imports: [
    UsersModule,
    InvoicesModule,
    PaymentsModule,
    CouriersModule,
    ConfirmationPaymentModule,
    InvoiceHistoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
