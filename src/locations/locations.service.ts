import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LocationsService {
  constructor(private prisma: PrismaService) {}
  async create(createLocationDto: CreateLocationDto) {
    const locations = await this.prisma.locations.create({
      data: {
        ...createLocationDto,
      },
    });
    return locations;
  }

  async findAll() {
    const locations = await this.prisma.locations.findMany();
    return locations;
  }

  findOne(id: string) {
    const locations = this.prisma.locations.findFirst({
      where: {
        id,
      },
    });
    return locations;
  }

  async update(id: string, updateLocationDto: UpdateLocationDto) {
    const locations = await this.prisma.locations.update({
      where: {
        id,
      },
      data: {
        ...updateLocationDto,
      },
    });
    return locations;
  }

  async remove(id: string) {
    const locations = await this.prisma.locations.delete({
      where: {
        id,
      },
    });
    return locations;
  }
}
