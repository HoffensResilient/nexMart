// user.resolver.ts

import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserModel } from './models/user.model';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [UserModel])
  users() {
    return this.userService.getUsers();
  }

  @Query(() => UserModel, { nullable: true })
  user(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUserById(id);
  }
}
