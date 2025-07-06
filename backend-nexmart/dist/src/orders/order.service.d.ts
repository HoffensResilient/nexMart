import { PrismaService } from '../../prisma/prisma.service';
import { Order } from '@prisma/client';
export declare class OrderService {
    private prisma;
    constructor(prisma: PrismaService);
    createOrder(userId: number, productIds: number[]): Promise<Order>;
    getOrdersByUser(userId: number): Promise<Order[]>;
    getAllOrders(): Promise<Order[]>;
}
