import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'src/prisma.service';
import { ValidateProfiles } from 'src/lib/validation/profiles.validate';
import { STATUS_CODE } from 'src/util/constant';

@Injectable()
export class ProfilesService {
  constructor(private prisma: PrismaService) {}

  async create(createProfileDto: CreateProfileDto) {
    const { error, value } = ValidateProfiles.validate(createProfileDto);
    if (error) {
      throw new Error(STATUS_CODE.INVALID);
    }

    const profile = await this.prisma.profiles.create({
      data: { ...value },
    });
    return profile;
  }

  async findAll() {
    const profile = await this.prisma.profiles.findMany();
    return profile;
  }

  async findOne(id: string) {
    const profile = await this.prisma.profiles.findFirst({
      where: { id },
    });
    return profile;
  }

  async update(id: string, updateProfileDto: UpdateProfileDto) {
    const { error, value } = ValidateProfiles.validate(updateProfileDto);
    if (error) {
      throw new Error(STATUS_CODE.INVALID);
    }

    const profile = await this.prisma.profiles.update({
      where: { id },
      data: { ...value },
    });
    return profile;
  }

  async remove(id: string) {
    const profile = await this.prisma.profiles.delete({
      where: { id },
    });
    return profile;
  }
}
