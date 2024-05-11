import { Test, TestingModule } from '@nestjs/testing';
import { SellerStoreController } from './seller-store.controller';
import { SellerStoreService } from './seller-store.service';

describe('SellerStoreController', () => {
  let controller: SellerStoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellerStoreController],
      providers: [SellerStoreService],
    }).compile();

    controller = module.get<SellerStoreController>(SellerStoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
