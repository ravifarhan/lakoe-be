import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma.service';
import { ValidateCategories } from 'src/lib/validation/categories.validate';
import { STATUS_CODE } from 'src/util/constant';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const { error, value } = ValidateCategories.validate(createCategoryDto);
    if (error) {
      throw new Error(STATUS_CODE.INVALID);
    }

    const categorie = await this.prisma.categories.create({
      data: { ...value },
    });
    return categorie;
  }

  async findAll() {
    const categories = await this.prisma.categories.findMany();
    return categories;
  }

  async findOne(id: string) {
    const categorie = await this.prisma.categories.findFirst({
      where: { id },
    });
    return categorie;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const { error, value } = ValidateCategories.validate(updateCategoryDto);
    if (error) {
      throw new Error(STATUS_CODE.INVALID);
    }

    const categorie = await this.prisma.categories.update({
      where: { id },
      data: { ...value },
    });
    return categorie;
  }

  async remove(id: string) {
    const categorie = await this.prisma.categories.delete({
      where: { id },
    });
    return categorie;
  }
}
