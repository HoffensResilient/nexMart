import { OrderService } from './order.service';
import { CreateOrderInput } from './dto/create-order.input';
export declare class OrderResolver {
    private orderService;
    constructor(orderService: OrderService);
    ordersByUser(userId: number): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
    }[]>;
    allOrders(): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
    }[]>;
    myOrders(user: any): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
    }[]>;
    createOrder(user: any, data: CreateOrderInput): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
    }>;
}
