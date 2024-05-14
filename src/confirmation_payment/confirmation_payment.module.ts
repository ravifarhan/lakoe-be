import { Module } from '@nestjs/common';
import { ConfirmationPaymentService } from './confirmation_payment.service';
import { ConfirmationPaymentController } from './confirmation_payment.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ConfirmationPaymentController],
  providers: [ConfirmationPaymentService, PrismaService],
})
export class ConfirmationPaymentModule {}
