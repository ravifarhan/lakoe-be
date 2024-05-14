import { Test, TestingModule } from '@nestjs/testing';
import { ConfirmationPaymentController } from './confirmation_payment.controller';
import { ConfirmationPaymentService } from './confirmation_payment.service';

describe('ConfirmationPaymentController', () => {
  let controller: ConfirmationPaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfirmationPaymentController],
      providers: [ConfirmationPaymentService],
    }).compile();

    controller = module.get<ConfirmationPaymentController>(
      ConfirmationPaymentController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
