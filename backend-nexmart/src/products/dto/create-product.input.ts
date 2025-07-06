import { InputType, Field, Float } from '@nestjs/graphql';
import { IsNotEmpty, IsPositive } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsNotEmpty()
  slug: string;

  @Field(() => Float)
  @IsPositive()
  price: number;

  @Field()
  image: string;

  @Field()
  category: string;
}
