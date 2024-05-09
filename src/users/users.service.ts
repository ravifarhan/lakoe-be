import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const users = await this.prisma.users.create({
      data: {
        ...createUserDto,
      },
    });

    return users;
  }

  async findAll() {
    const users = await this.prisma.users.findMany();
    return users;
  }

  async findOne(id: string) {
    return await this.prisma.users.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updateUser = await this.prisma.users.update({
      where: { id },
      data: { ...updateUserDto },
    });
    return updateUser;
  }

  async remove(id: string) {
    await this.prisma.users.delete({ where: { id } });
    return `User with id ${id} has been deleted`;
  }
}
