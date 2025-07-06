import { PrismaService } from '../../prisma/prisma.service';
import { CreateProductInput } from './dto/create-product.input';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    createProduct(data: CreateProductInput): Promise<{
        id: number;
        title: string;
        slug: string;
        price: number;
        image: string;
        category: string;
    }>;
    getProducts(): Promise<{
        id: number;
        title: string;
        slug: string;
        price: number;
        image: string;
        category: string;
    }[]>;
    getProductBySlug(slug: string): Promise<{
        id: number;
        title: string;
        slug: string;
        price: number;
        image: string;
        category: string;
    }>;
    updateProduct(id: number, data: Partial<CreateProductInput>): Promise<{
        id: number;
        title: string;
        slug: string;
        price: number;
        image: string;
        category: string;
    }>;
    deleteProduct(id: number): Promise<{
        id: number;
        title: string;
        slug: string;
        price: number;
        image: string;
        category: string;
    }>;
}
