// product.resolver.ts

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { CreateProductInput } from './dto/create-product.input';
import { ProductModel } from './models/product.model';

@Resolver(() => ProductModel)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  // ✅ Query: Get all products
  @Query(() => [ProductModel], { name: 'products' })
  getAllProducts() {
    return this.productService.getProducts();
  }

  // ✅ Query: Get single product by slug
  @Query(() => ProductModel, { name: 'product' })
  getProduct(@Args('slug') slug: string) {
    return this.productService.getProductBySlug(slug);
  }

  // ✅ Mutation: Create a new product
  @Mutation(() => ProductModel, { name: 'createProduct' })
  createProduct(@Args('input') input: CreateProductInput) {
    return this.productService.createProduct(input);
  }
}
