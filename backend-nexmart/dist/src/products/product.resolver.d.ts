import { ProductService } from './product.service';
import { CreateProductInput } from './dto/create-product.input';
export declare class ProductResolver {
    private readonly productService;
    constructor(productService: ProductService);
    getAllProducts(): Promise<{
        id: number;
        title: string;
        slug: string;
        price: number;
        image: string;
        category: string;
    }[]>;
    getProduct(slug: string): Promise<{
        id: number;
        title: string;
        slug: string;
        price: number;
        image: string;
        category: string;
    }>;
    createProduct(input: CreateProductInput): Promise<{
        id: number;
        title: string;
        slug: string;
        price: number;
        image: string;
        category: string;
    }>;
}
