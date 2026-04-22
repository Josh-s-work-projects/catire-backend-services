import { Test, TestingModule } from '@nestjs/testing';
import { FinanceConfigServiceController } from './finance-config-service.controller';
import { FinanceConfigServiceService } from './finance-config-service.service';

describe('FinanceConfigServiceController', () => {
  let financeConfigServiceController: FinanceConfigServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FinanceConfigServiceController],
      providers: [FinanceConfigServiceService],
    }).compile();

    financeConfigServiceController = app.get<FinanceConfigServiceController>(FinanceConfigServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(financeConfigServiceController.getHello()).toBe('Hello World!');
    });
  });
});
