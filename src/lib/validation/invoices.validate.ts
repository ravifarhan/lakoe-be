import * as joi from 'joi';
import { CreateInvoiceDto } from 'src/invoices/dto/create-invoice.dto';

export const ValidateInvoices = joi.object<CreateInvoiceDto>({
  invoice_number: joi.string().required(),
  price: joi.number().required(),
  receiver_address: joi.string().required(),
  receiver_district: joi.string().required(),
  receiver_latitude: joi.string().required(),
  receiver_longitude: joi.string().required(),
  receiver_name: joi.string().required(),
  receiver_phone: joi.string().required(),
  service_charge: joi.number().required(),
  status: joi.string().required(),
  // usersId: joi.string().required()
  // paymentsId: joi.string().required(),
  // cartsId: joi.string().required(),
});
