import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
} from '@nestjs/common';
import { SellerStoreService } from './seller-store.service';
import { CreateSellerStoreDto } from './dto/create-seller-store.dto';
import { UpdateSellerStoreDto } from './dto/update-seller-store.dto';

@Controller('seller-store')
export class SellerStoreController {
  constructor(private readonly sellerStoreService: SellerStoreService) {}

  @Post()
  create(@Body() createSellerStoreDto: CreateSellerStoreDto) {
    return this.sellerStoreService.create(createSellerStoreDto);
  }

  @Get()
  findAll(@Request() req) {
    const user_id = req.user;
    console.log(user_id), `ini user id`;

    return this.sellerStoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerStoreService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSellerStoreDto: UpdateSellerStoreDto,
  ) {
    return this.sellerStoreService.update(id, updateSellerStoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerStoreService.remove(id);
  }
}
