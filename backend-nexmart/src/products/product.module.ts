// product.module.ts


// The First version
// import { Module } from '@nestjs/common';
// import { ProductService } from './product.service';
// import { ProductResolver } from './product.resolver';
// import { PrismaService } from '../../prisma/prisma.service';

// @Module({
//   providers: [ProductService, ProductResolver, PrismaService],
// })
// export class ProductModule {}



// The second version
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ProductService, ProductResolver],
})
export class ProductModule {}




// ✅ **Short answer:**

// The second version is better.

// ### Key difference:

// * **First version**: Directly provides `PrismaService` in `ProductModule`.
// * **Second version**: Imports `PrismaModule`, which properly encapsulates and shares `PrismaService` (better for reusability and DI).

// ✅ **Use second version** — it's **cleaner**, **modular**, and follows **NestJS best practices**.
