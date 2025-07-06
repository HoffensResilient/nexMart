import { UserService } from './user.service';
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    users(): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }[]>;
    user(id: number): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
