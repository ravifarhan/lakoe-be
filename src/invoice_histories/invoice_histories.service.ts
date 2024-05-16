import { Injectable } from '@nestjs/common';
import { CreateInvoiceHistoryDto } from './dto/create-invoice_history.dto';
import { UpdateInvoiceHistoryDto } from './dto/update-invoice_history.dto';
import { PrismaService } from 'src/prisma.service';
import { ValidateInvoicesHistory } from 'src/lib/validation/invoicesHistory.validate';
import { STATUS_CODE } from 'src/util/constant';

@Injectable()
export class InvoiceHistoriesService {
  constructor(private prisma: PrismaService) {}

  async create(createInvoiceHistoryDto: CreateInvoiceHistoryDto) {
    const { error, value } = ValidateInvoicesHistory.validate(
      createInvoiceHistoryDto,
    );
    if (error) {
      throw new Error(STATUS_CODE.INVALID);
    }

    const invoice_historie = await this.prisma.invoice_Histories.create({
      data: { ...value },
    });
    return invoice_historie;
  }

  async findAll() {
    const invoice_histories = await this.prisma.invoice_Histories.findMany();
    return invoice_histories;
    // return await this.prisma.invoice_Histories.findMany();
  }

  async findOne(id: string) {
    const invoice_historie = await this.prisma.invoice_Histories.findFirst({
      where: { id },
    });
    return invoice_historie;
  }

  async update(id: string, updateInvoiceHistoryDto: UpdateInvoiceHistoryDto) {
    const { error, value } = ValidateInvoicesHistory.validate(
      updateInvoiceHistoryDto,
    );
    if (error) {
      throw new Error(STATUS_CODE.INVALID);
    }
    const invoice_historie = await this.prisma.invoice_Histories.update({
      where: { id },
      data: { ...value },
    });
    return invoice_historie;
  }

  async remove(id: string) {
    const invoice_historie = await this.prisma.invoice_Histories.delete({
      where: { id },
    });
    return invoice_historie;
  }
}
