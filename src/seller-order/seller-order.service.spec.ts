import { Test, TestingModule } from '@nestjs/testing';
import { SellerOrderService } from './seller-order.service';

describe('SellerOrderService', () => {
  let service: SellerOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellerOrderService],
    }).compile();

    service = module.get<SellerOrderService>(SellerOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
