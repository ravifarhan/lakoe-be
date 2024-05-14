import { Test, TestingModule } from '@nestjs/testing';
import { CouriersController } from './couriers.controller';
import { CouriersService } from './couriers.service';

describe('CouriersController', () => {
  let controller: CouriersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CouriersController],
      providers: [CouriersService],
    }).compile();

    controller = module.get<CouriersController>(CouriersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
