import { PrismaService } from '../../prisma/prisma.service';
import { User } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User | null>;
}
