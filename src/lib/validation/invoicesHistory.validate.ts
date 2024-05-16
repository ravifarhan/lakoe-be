import * as joi from 'joi';
import { CreateInvoiceHistoryDto } from 'src/invoice_histories/dto/create-invoice_history.dto';

export const ValidateInvoicesHistory = joi.object<CreateInvoiceHistoryDto>({
  status: joi.string().required(),
  // created_at: joi.date().required(),
  // invoicesId: joi.string().required()
});
