import * as joi from 'joi';
// import { CreateConfirmationPaymentDto } from "src/confirmation_payment/dto/create-confirmation_payment.dto";
import { CreatePaymentDto } from 'src/payments/dto/create-payment.dto';

export const ValidatePayments = joi.object<CreatePaymentDto>({
  bank: joi.string().required(),
  amount: joi.number().required(),
  status: joi.string().required(),
  moota_transaction_id: joi.string().required(),
});
