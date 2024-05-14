import { PartialType } from '@nestjs/mapped-types';
import { CreateConfirmationPaymentDto } from './create-confirmation_payment.dto';

export class UpdateConfirmationPaymentDto extends PartialType(
  CreateConfirmationPaymentDto,
) {}
