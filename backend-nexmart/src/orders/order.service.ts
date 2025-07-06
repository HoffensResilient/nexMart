// order.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Order, Product } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

//   async createOrder(userId: number, productIds: number[]): Promise<Order> {
//     return this.prisma.order.create({
//       data: {
//         userId,
//         products: {
//           connect: productIds.map(id => ({ id })),
//         },
//       },
//       include: { products: true },
//     });
//   }

    async createOrder(userId: number, productIds: number[]): Promise<Order> {
    // ✅ Step 1: Verify all product IDs exist
    const products = await this.prisma.product.findMany({
        where: { id: { in: productIds } },
    });

    if (products.length !== productIds.length) {
        throw new Error('One or more product IDs are invalid.');
    }

    // ✅ Step 2: Proceed with order creation
    return this.prisma.order.create({
        data: {
        user: { connect: { id: userId } },
        products: {
            connect: productIds.map((id) => ({ id })),
        },
        },
        include: {
        user: true,
        products: true,
        },
    });
    }


  async getOrdersByUser(userId: number): Promise<Order[]> {
    return this.prisma.order.findMany({
      where: { userId },
      include: { products: true },
    });
  }

  async getAllOrders(): Promise<Order[]> {
    return this.prisma.order.findMany({ include: { products: true } });
  }
}





