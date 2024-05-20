import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';
import { ValidateProducts } from 'src/lib/validation/products.validate';
import { STATUS_CODE } from 'src/util/constant';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    const { error, value } = ValidateProducts.validate(createProductDto);
    if (error) {
      console.log(error, 'ini error');
    }

    const product = await this.prisma.products.create({
      data: { ...value },
    });
    return product;
  }

  async findAll() {
    const products = await this.prisma.products.findMany();
    return products;
  }

  async findOne(id: string) {
    const product = await this.prisma.products.findFirst({
      where: { id },
    });
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const { error, value } = ValidateProducts.validate(updateProductDto);
    if (error) {
      throw new Error(STATUS_CODE.INVALID);
    }
    const product = await this.prisma.products.update({
      where: { id },
      data: { ...value },
    });
    return product;
  }

  async remove(id: string) {
    const product = await this.prisma.products.delete({
      where: { id },
    });
    return product;
  }
}
