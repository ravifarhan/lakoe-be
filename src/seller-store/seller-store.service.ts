import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateSellerStoreDto } from './dto/create-seller-store.dto';
import { UpdateSellerStoreDto } from './dto/update-seller-store.dto';

@Injectable()
export class SellerStoreService {
  constructor(private prisma: PrismaService) {}

  async create(createSellerStoreDto: CreateSellerStoreDto) {
    console.log(`body : `, createSellerStoreDto);
    const store = await this.prisma.stores.create({
      data: {
        ...createSellerStoreDto,
      },
    });

    return store;
  }

  async findAll() {
    const stores = await this.prisma.stores.findMany();
    return stores;
  }

  async findOne(id: string) {
    return await this.prisma.stores.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateSellerStoreDto: UpdateSellerStoreDto) {
    return await this.prisma.stores.update({
      where: {
        id,
      },
      data: {
        ...updateSellerStoreDto,
      },
    });
  }

  async remove(id: string) {
    await this.prisma.stores.delete({
      where: {
        id,
      },
    });
    return `Store with id ${id} has been deleted`;
  }
}
