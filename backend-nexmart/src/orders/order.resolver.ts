// order.resolver.ts

// src/orders/order.resolver.ts

import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { OrderModel } from './models/order.model';
import { CreateOrderInput } from './dto/create-order.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { AdminGuard } from '../auth/guards/admin.guard';

@Resolver(() => OrderModel)
export class OrderResolver {
  constructor(private orderService: OrderService) {}

  // Admin-only: Query orders by any userId
  @UseGuards(GqlAuthGuard, AdminGuard)
  @Query(() => [OrderModel], { name: 'ordersByUser' })
  ordersByUser(@Args('userId', { type: () => Int }) userId: number) {
    return this.orderService.getOrdersByUser(userId);
  }

  // Admin-only: Query all orders
  @UseGuards(GqlAuthGuard, AdminGuard)
  @Query(() => [OrderModel], { name: 'allOrders' })
  allOrders() {
    return this.orderService.getAllOrders();
  }

  // Authenticated user: Get their own orders
  @UseGuards(GqlAuthGuard)
  @Query(() => [OrderModel], { name: 'myOrders' })
  myOrders(@CurrentUser() user: any) {
    return this.orderService.getOrdersByUser(user.id);
  }

  // Authenticated user: Create order
  @UseGuards(GqlAuthGuard)
  @Mutation(() => OrderModel)
  createOrder(
    @CurrentUser() user: any,
    @Args('data') data: CreateOrderInput,
  ) {
    return this.orderService.createOrder(user.id, data.productIds);
  }
}
