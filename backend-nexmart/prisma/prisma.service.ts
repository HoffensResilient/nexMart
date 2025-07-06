// src/prisma/prisma.service.ts

import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  // Optional: Clear all DB for testing/dev environments
  async cleanDatabase() {
    await this.$transaction([
      this.order.deleteMany(),
      this.product.deleteMany(),
      this.user.deleteMany(),
    ]);
  }
}
