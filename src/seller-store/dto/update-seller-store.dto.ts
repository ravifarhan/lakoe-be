import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerStoreDto } from './create-seller-store.dto';

export class UpdateSellerStoreDto extends PartialType(CreateSellerStoreDto) {}
