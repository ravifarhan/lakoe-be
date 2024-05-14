import { Injectable } from '@nestjs/common';
import { CreateCourierDto } from './dto/create-courier.dto';
import { UpdateCourierDto } from './dto/update-courier.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CouriersService {
  constructor(private prisma: PrismaService) {}

  async create(createCourierDto: CreateCourierDto) {
    const courier = await this.prisma.couriers.create({
      data: { ...createCourierDto },
    });
    return courier;
  }

  async findAll() {
    const couriers = await this.prisma.couriers.findMany();
    return couriers;
  }

  async findOne(id: string) {
    const courier = await this.prisma.couriers.findFirst({
      where: { id },
    });
    return courier;
  }

  async update(id: string, updateCourierDto: UpdateCourierDto) {
    const courier = await this.prisma.couriers.update({
      where: { id },
      data: { ...updateCourierDto },
    });
    return courier;
  }

  async remove(id: string) {
    const courier = await this.prisma.couriers.delete({
      where: { id },
    });
    return courier;
  }
}
