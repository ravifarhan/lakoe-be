import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async create(createInvoiceDto: CreateInvoiceDto) {
    const invoices = await this.prisma.invoices.create({
      data: {
        ...createInvoiceDto,
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
    const invoice = await this.prisma.invoices.update({
      where: {
        id,
      },
      data: { ...updateInvoiceDto },
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
