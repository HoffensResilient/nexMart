import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType('User')
export class UserModel {
  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  @Field()
  role: string;
}
