import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CurrencyRate } from '@prisma/client';
import { UpdateRatesDTO } from './dto/update-rates.dto';

@Injectable()
export class CurrencyRatesService {
  constructor(private prisma: PrismaService) {}

  async getRates(): Promise<CurrencyRate> {
    // Buscar la tasa más reciente
    let rate = await this.prisma.currencyRate.findFirst({
      where: { deleted_at: null },
      orderBy: { last_updated: 'desc' },
    });

    // Si no existe, crear una por defecto
    if (!rate) {
      rate = await this.prisma.currencyRate.create({
        data: {
          rate_usd: 1,
          rate_cop: 4000,
          rate_bs: 800,
        },
      });
    }

    return rate;
  }

  async updateRates(data: UpdateRatesDTO): Promise<CurrencyRate> {
    // Buscar la tasa actual
    const existing = await this.prisma.currencyRate.findFirst({
      where: { deleted_at: null },
      orderBy: { last_updated: 'desc' },
    });

    if (existing) {
      // Actualizar la existente
      return await this.prisma.currencyRate.update({
        where: { id: existing.id },
        data: {
          rate_cop: data.rate_cop,
          rate_bs: data.rate_bs,
        },
      });
    } else {
      // Crear nueva
      return await this.prisma.currencyRate.create({
        data: {
          rate_usd: 1,
          rate_cop: data.rate_cop,
          rate_bs: data.rate_bs,
        },
      });
    }
  }
}
