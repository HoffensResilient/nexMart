import { ProductModel } from '../../products/models/product.model';
export declare class OrderModel {
    id: number;
    userId: number;
    products: ProductModel[];
    createdAt: Date;
}
