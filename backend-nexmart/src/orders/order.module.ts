// order.module.ts

// import { Module } from '@nestjs/common';
// import { OrderService } from './order.service';
// import { OrderResolver } from './order.resolver';
// import { PrismaService } from '../../prisma/prisma.service';

// @Module({
//   providers: [OrderService, OrderResolver, PrismaService],
//   exports: [OrderService],
// })
// export class OrderModule {}


import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [OrderService, OrderResolver],
})
export class OrderModule {}
