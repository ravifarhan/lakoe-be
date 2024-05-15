import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { PrismaService } from 'src/prisma.service';
import { ValidateStores } from 'src/lib/validation/stores.validate';
import { STATUS_CODE } from 'src/util/constant';

@Injectable()
export class StoresService {
  constructor(private prisma: PrismaService) {}

  async create(createStoreDto: CreateStoreDto) {
    const { error, value } = ValidateStores.validate(createStoreDto);
    if (error) {
      throw new Error(STATUS_CODE.INVALID);
    }
    const store = await this.prisma.stores.create({
      data: { ...value },
    });
    return store;
  }

  async findAll() {
    const stores = await this.prisma.stores.findMany();
    return stores;
  }

  async findOne(id: string) {
    const store = await this.prisma.stores.findFirst({
      where: { id },
    });
    return store;
  }

  async update(id: string, updateStoreDto: UpdateStoreDto) {
    const { error, value } = ValidateStores.validate(updateStoreDto);
    if (error) {
      throw new Error(STATUS_CODE.INVALID);
    }
    const store = await this.prisma.stores.update({
      where: { id },
      data: { ...value },
    });
    return store;
  }

  async remove(id: string) {
    const store = await this.prisma.stores.delete({
      where: { id },
    });
    return store;
  }
}
