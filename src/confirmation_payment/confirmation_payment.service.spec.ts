import { Test, TestingModule } from '@nestjs/testing';
import { ConfirmationPaymentService } from './confirmation_payment.service';

describe('ConfirmationPaymentService', () => {
  let service: ConfirmationPaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfirmationPaymentService],
    }).compile();

    service = module.get<ConfirmationPaymentService>(
      ConfirmationPaymentService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
