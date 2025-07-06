// auth.resolver.ts

// import { Resolver, Mutation, Args, Query, ObjectType, Field } from '@nestjs/graphql';

// @ObjectType()
// class AuthResponse {
//   @Field()
//   message: string;
// }

// @Resolver()
// export class AuthResolver {
//   @Query(() => String)
//   hello(): string {
//     return 'Hello Hoffen, from NexMart AuthResolver!';
//   }

//   @Mutation(() => AuthResponse)
//   login(
//     @Args('email') email: string,
//     @Args('password') password: string
//   ): AuthResponse {
//     return { message: 'mock-token' };
//   }

//   @Mutation(() => AuthResponse)
//   register(
//     @Args('email') email: string,
//     @Args('password') password: string
//   ): AuthResponse {
//     return { message: 'registered' };
//   }
// }


// import { Resolver, Mutation, Args, ObjectType, Field } from '@nestjs/graphql';
// import { AuthService } from './auth.service';

// @ObjectType()
// class TokenResponse {
//   @Field()
//   accessToken: string;
// }

// @ObjectType()
// class RegisterResponse {
//   @Field()
//   message: string;
// }

// @Resolver()
// export class AuthResolver {
//   constructor(private authService: AuthService) {}

//   @Mutation(() => RegisterResponse)
//   register(
//     @Args('email') email: string,
//     @Args('password') password: string
//   ) {
//     return this.authService.register(email, password);
//   }

//   @Mutation(() => TokenResponse)
//   login(
//     @Args('email') email: string,
//     @Args('password') password: string
//   ) {
//     return this.authService.login(email, password);
//   }
// }



import { Resolver, Query, Mutation, Args, ObjectType, Field } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { RegisterInput } from './dto/register.input';

@ObjectType()
class TokenResponse {
  @Field()
  accessToken: string;
}

@ObjectType()
class RegisterResponse {
  @Field()
  message: string;
}

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  // Dummy query to check if server is up
  @Query(() => String)
  hello(): string {
    return 'Hello, Hoffen from NexMart Auth!';
  }

  // Secured query example
  @Query(() => String)
  @UseGuards(GqlAuthGuard)
  securedHello(): string {
    return 'Hello, you are authenticated!';
  }

  // Register mutation using DTO input
  @Mutation(() => RegisterResponse)
  register(@Args('registerInput') registerInput: RegisterInput) {
    return this.authService.register(registerInput.email, registerInput.password);
  }

  // Login mutation remains same
  @Mutation(() => TokenResponse)
  login(
    @Args('email') email: string,
    @Args('password') password: string
  ) {
    return this.authService.login(email, password);
  }
}




