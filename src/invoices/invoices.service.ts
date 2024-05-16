import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { PrismaService } from 'src/prisma.service';
import { STATUS_CODE } from 'src/util/constant';
import { ValidateInvoices } from 'src/lib/validation/invoices.validate';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async create(createInvoiceDto: CreateInvoiceDto) {
    const { error, value } = ValidateInvoices.validate(createInvoiceDto);
    if (error) {
      throw new Error(STATUS_CODE.INVALID);
    }

    const invoices = await this.prisma.invoices.create({
      data: {
        ...value,
      },
    });
    return invoices;
  }

  async findAll() {
    const invoices = await this.prisma.invoices.findMany();
    return invoices;
  }

  async findOne(id: string) {
    const invoice = await this.prisma.invoices.findFirst({
      where: { id },
    });
    return invoice;
  }

  async update(id: string, updateInvoiceDto: UpdateInvoiceDto) {
    const { error, value } = ValidateInvoices.validate(updateInvoiceDto);
    if (error) {
      throw new Error(STATUS_CODE.INVALID);
    }

    const invoice = await this.prisma.invoices.update({
      where: { id },
      data: { ...value },
    });
    return invoice;
  }

  async remove(id: string) {
    const invoice = await this.prisma.invoices.delete({
      where: { id },
    });

    return invoice;
  }
}
