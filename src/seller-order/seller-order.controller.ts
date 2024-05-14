import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SellerOrderService } from './seller-order.service';
// import { CreateSellerOrderDto } from './dto/create-seller-order.dto';
// import { UpdateSellerOrderDto } from './dto/update-seller-order.dto';

@Controller('seller-order')
export class SellerOrderController {
  constructor(private readonly sellerOrderService: SellerOrderService) {}

  // @Post()
  // create(@Body() createSellerOrderDto: CreateSellerOrderDto) {
  //   return this.sellerOrderService.create(createSellerOrderDto);
  // }

  @Get()
  findAll() {
    return this.sellerOrderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerOrderService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSellerOrderDto: UpdateSellerOrderDto) {
  //   return this.sellerOrderService.update(+id, updateSellerOrderDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerOrderService.remove(+id);
  }
}
