export class CreatePaymentDto {
  bank: string;
  amount: number;
  status: string;
  moota_transaction_id: string;
  usersId: string;
}
