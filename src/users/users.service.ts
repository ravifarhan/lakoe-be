import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const userExists = await this.prisma.users.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    if (userExists) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    createUserDto.password = hashedPassword;

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

  async findOneByName(name: string) {
    return await this.prisma.users.findFirst({
      where: {
        OR: [
          {
            name,
          },
          {
            email: name,
          },
        ],
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
