import { Injectable } from '@nestjs/common';
import { CreateMessageTemplateDto } from './dto/create-message_template.dto';
import { UpdateMessageTemplateDto } from './dto/update-message_template.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MessageTemplatesService {
  constructor(private prisma: PrismaService) {}
  async create(createMessageTemplateDto: CreateMessageTemplateDto) {
    return await this.prisma.message_Templates.create({
      data: {
        ...createMessageTemplateDto,
      },
    });
  }

  async findAll() {
    return await this.prisma.message_Templates.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.message_Templates.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateMessageTemplateDto: UpdateMessageTemplateDto) {
    return await this.prisma.message_Templates.update({
      where: {
        id,
      },
      data: {
        ...updateMessageTemplateDto,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.message_Templates.delete({
      where: {
        id,
      },
    });
  }
}
