import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const payment = await this.prisma.payments.create({
      data: { ...createPaymentDto },
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
    const payment = await this.prisma.payments.update({
      where: { id },
      data: { ...updatePaymentDto },
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
