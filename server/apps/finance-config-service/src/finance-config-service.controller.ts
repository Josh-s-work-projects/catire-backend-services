import { Controller, Get } from '@nestjs/common';
import { FinanceConfigServiceService } from './finance-config-service.service';

@Controller()
export class FinanceConfigServiceController {
  constructor(private readonly financeConfigServiceService: FinanceConfigServiceService) {}

  @Get()
  getHello(): string {
    return this.financeConfigServiceService.getHello();
  }
}
