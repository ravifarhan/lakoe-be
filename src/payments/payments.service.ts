import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PrismaService } from 'src/prisma.service';
import { ValidatePayments } from 'src/lib/validation/payment.validate';
import { STATUS_CODE } from 'src/util/constant';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const { error, value } = ValidatePayments.validate(createPaymentDto);
    if (error) {
      throw new Error(STATUS_CODE.INVALID);
    }

    const payment = await this.prisma.payments.create({
      data: { ...value },
    });
    return payment;
  }

  async findAll() {
    const payments = await this.prisma.payments.findMany();
    return payments;
  }

  async findOne(id: string) {
    const payment = await this.prisma.payments.findFirst({
      where: { id },
    });
    return payment;
  }

  async update(id: string, updatePaymentDto: UpdatePaymentDto) {
    const { error, value } = ValidatePayments.validate(updatePaymentDto);
    if (error) {
      throw new Error(STATUS_CODE.INVALID);
    }

    const payment = await this.prisma.payments.update({
      where: { id },
      data: { ...value },
    });
    return payment;
  }

  async remove(id: string) {
    const payment = await this.prisma.payments.delete({
      where: { id },
    });
    return payment;
  }
}
