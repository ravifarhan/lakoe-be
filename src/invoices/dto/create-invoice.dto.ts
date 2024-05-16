export class CreateInvoiceDto {
  price: number;
  service_charge: number;
  status: string;
  receiver_longitude: string;
  receiver_latitude: string;
  receiver_district: string;
  receiver_phone: string;
  receiver_address: string;
  receiver_name: string;
  invoice_number: string;
  // cartsId: string;
  // paymentsId: string;
  // usersId: string;
}
