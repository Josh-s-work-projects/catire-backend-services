import {
  Controller,
  Get,
  Body,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { CurrencyRatesService } from './currency-rates.service';
import { UpdateRatesDTO } from './dto/update-rates.dto';
import { CurrencyRate } from '@prisma/client';
import { CheckPermission } from '../auth/permission.decorator';
import { PermissionGuard } from '../auth/permission.guard';
import { RemoteAuthGuard } from '../auth/remote-auth.guard';

@Controller('currency-rates')
export class CurrencyRatesController {
  constructor(private service: CurrencyRatesService) {}

  // Público - cualquier usuario autenticado puede ver las tasas
  @Get()
  async getRates(): Promise<CurrencyRate> {
    return await this.service.getRates();
  }

  // Solo admin puede actualizar tasas
  @Patch()
  @UseGuards(RemoteAuthGuard, PermissionGuard)
  @CheckPermission('Purchases', 'update')
  async updateRates(@Body() body: UpdateRatesDTO): Promise<CurrencyRate> {
    return await this.service.updateRates(body);
  }
}
