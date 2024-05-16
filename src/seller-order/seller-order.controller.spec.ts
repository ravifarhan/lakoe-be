import { Test, TestingModule } from '@nestjs/testing';
import { SellerOrderController } from './seller-order.controller';
import { SellerOrderService } from './seller-order.service';

describe('SellerOrderController', () => {
  let controller: SellerOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellerOrderController],
      providers: [SellerOrderService],
    }).compile();

    controller = module.get<SellerOrderController>(SellerOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
