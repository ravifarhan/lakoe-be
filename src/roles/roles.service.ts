import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/prisma.service';
import { ValidateRoles } from 'src/lib/validation/roles.validate';
import { STATUS_CODE } from 'src/util/constant';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  async create(createRoleDto: CreateRoleDto) {
    const { error, value } = ValidateRoles.validate(createRoleDto);
    if (error) {
      throw new Error(STATUS_CODE.INVALID);
    }

    const role = await this.prisma.roles.create({
      data: { ...value },
    });
    return role;
  }

  async findAll() {
    const roles = await this.prisma.roles.findMany();
    return roles;
  }

  async findOne(id: string) {
    const role = await this.prisma.roles.findFirst({
      where: { id },
    });
    return role;
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    const { error, value } = ValidateRoles.validate(updateRoleDto);
    if (error) {
      throw new Error(STATUS_CODE.INVALID);
    }

    const role = await this.prisma.roles.update({
      where: { id },
      data: { ...value },
    });
    return role;
  }

  async remove(id: string) {
    const role = await this.prisma.roles.delete({
      where: { id },
    });
    return role;
  }
}
