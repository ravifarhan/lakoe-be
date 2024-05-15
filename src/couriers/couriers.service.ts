import { Injectable } from '@nestjs/common';
import { CreateCourierDto } from './dto/create-courier.dto';
import { UpdateCourierDto } from './dto/update-courier.dto';
import { PrismaService } from 'src/prisma.service';
import { ValidateCouriers } from 'src/lib/validation/couriers.validate';
import { STATUS_CODE } from 'src/util/constant';

@Injectable()
export class CouriersService {
  constructor(private prisma: PrismaService) {}

  async create(createCourierDto: CreateCourierDto) {
    const { error, value } = ValidateCouriers.validate(createCourierDto);
    if (error) {
      throw new Error(STATUS_CODE.INVALID);
    }
    const courier = await this.prisma.couriers.create({
      data: { ...value },
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
    const { error, value } = ValidateCouriers.validate(updateCourierDto);
    if (error) {
      throw new Error(STATUS_CODE.INVALID);
    }
    const courier = await this.prisma.couriers.update({
      where: { id },
      data: { ...value },
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
