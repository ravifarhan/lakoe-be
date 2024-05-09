import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerOrderDto } from './create-seller-order.dto';

export class UpdateSellerOrderDto extends PartialType(CreateSellerOrderDto) {}
