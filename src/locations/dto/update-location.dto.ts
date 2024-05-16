import { PartialType } from '@nestjs/mapped-types';
import { CreateLocationDto } from './create-location.dto';

export class UpdateLocationDto extends PartialType(CreateLocationDto) {
  id: string;
  name?: string;
  address?: string;
  postal_id?: string;
  city_district?: string;
  latitude?: string;
  longitude?: string;
}
