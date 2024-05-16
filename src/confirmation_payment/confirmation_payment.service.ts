import { Injectable } from '@nestjs/common';
import { CreateConfirmationPaymentDto } from './dto/create-confirmation_payment.dto';
import { UpdateConfirmationPaymentDto } from './dto/update-confirmation_payment.dto';
import { PrismaService } from 'src/prisma.service';
import { ValidateConfirmationPayment } from 'src/lib/validation/confirmationPayment.validate';
import { STATUS_CODE } from 'src/util/constant';

@Injectable()
export class ConfirmationPaymentService {
  constructor(private prisma: PrismaService) {}

  async create(createConfirmationPaymentDto: CreateConfirmationPaymentDto) {
    const { error, value } = ValidateConfirmationPayment.validate(
      createConfirmationPaymentDto,
    );
    if (error) {
      throw new Error(STATUS_CODE.INVALID);
    }
    const confirmation_payment = await this.prisma.confirmation_Payment.create({
      data: { ...value },
    });
    return confirmation_payment;
  }

  async findAll() {
    const confirmation_Payment =
      await this.prisma.confirmation_Payment.findMany();
    return confirmation_Payment;
  }

  async findOne(id: string) {
    const confirmation_Payment =
      await this.prisma.confirmation_Payment.findFirst({
        where: { id },
      });
    return confirmation_Payment;
  }

  async update(
    id: string,
    updateConfirmationPaymentDto: UpdateConfirmationPaymentDto,
  ) {
    const confirmation_Payment = await this.prisma.confirmation_Payment.update({
      where: { id },
      data: { ...updateConfirmationPaymentDto },
    });
    return confirmation_Payment;
  }

  async remove(id: string) {
    const confirmation_Payment = await this.prisma.confirmation_Payment.delete({
      where: { id },
    });
    return confirmation_Payment;
  }
}
