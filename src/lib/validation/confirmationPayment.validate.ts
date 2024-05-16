import * as joi from 'joi';
import { CreateConfirmationPaymentDto } from 'src/confirmation_payment/dto/create-confirmation_payment.dto';

export const ValidateConfirmationPayment =
  joi.object<CreateConfirmationPaymentDto>({
    amount: joi.number().required(),
    bank: joi.string().required(),
    // invoicesId: joi.string().required()
  });
