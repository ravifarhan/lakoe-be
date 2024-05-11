import { Test, TestingModule } from '@nestjs/testing';
import { SellerStoreService } from './seller-store.service';

describe('SellerStoreService', () => {
  let service: SellerStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellerStoreService],
    }).compile();

    service = module.get<SellerStoreService>(SellerStoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
