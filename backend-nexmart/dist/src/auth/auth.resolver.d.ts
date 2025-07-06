import { AuthService } from './auth.service';
import { RegisterInput } from './dto/register.input';
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    hello(): string;
    securedHello(): string;
    register(registerInput: RegisterInput): Promise<{
        message: string;
    }>;
    login(email: string, password: string): Promise<{
        accessToken: string;
    }>;
}
