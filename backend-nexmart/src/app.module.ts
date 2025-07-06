// app.module.ts

// app.module.ts

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { ProductModule } from './products/product.module';  // fixed folder name
import { OrderModule } from './orders/order.module';
import { UserModule } from './users/user.module';           // added UserModule

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    AuthModule,
    PrismaModule,
    ProductModule,
    OrderModule,
    UserModule,  // added here
  ],
})
export class AppModule {}
