import { ObjectType, Field, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class ProductModel {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  slug: string;

  @Field(() => Float)
  price: number;

  @Field()
  image: string;

  @Field()
  category: string;
}
