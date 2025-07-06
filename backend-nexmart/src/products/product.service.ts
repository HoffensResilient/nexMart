// product.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateProductInput } from './dto/create-product.input';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(data: CreateProductInput) {
    return this.prisma.product.create({ data });
  }

  async getProducts() {
    return this.prisma.product.findMany();
  }

  async getProductBySlug(slug: string) {
    const product = await this.prisma.product.findUnique({ where: { slug } });
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async updateProduct(id: number, data: Partial<CreateProductInput>) {
    return this.prisma.product.update({ where: { id }, data });
  }

  async deleteProduct(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
}
