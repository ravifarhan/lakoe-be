import { Injectable } from '@nestjs/common';
// import { CreateSellerOrderDto } from './dto/create-seller-order.dto';
// import { UpdateSellerOrderDto } from './dto/update-seller-order.dto';

@Injectable()
export class SellerOrderService {
  // create(createSellerOrderDto: CreateSellerOrderDto) {
  //   return 'This action adds a new sellerOrder';
  // }

  findAll() {
    return `This action returns all sellerOrder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sellerOrder`;
  }

  // update(id: number, updateSellerOrderDto: UpdateSellerOrderDto) {
  //   return `This action updates a #${id} sellerOrder`;
  // }

  remove(id: number) {
    return `This action removes a #${id} sellerOrder`;
  }
}
