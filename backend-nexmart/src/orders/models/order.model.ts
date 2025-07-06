import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProductModel } from '../../products/models/product.model';

@ObjectType()
export class OrderModel {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field(() => [ProductModel])
  products: ProductModel[];

  @Field()
  createdAt: Date;
}


