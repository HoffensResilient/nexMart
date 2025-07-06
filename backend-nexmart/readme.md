/src
├── app.module.ts
├── main.ts
│
├── auth/
│   ├── auth.module.ts
│   ├── auth.service.ts
│   ├── auth.resolver.ts
│   ├── jwt.strategy.ts
│   ├── dto/
│   │   ├── register.input.ts
│   │   └── login.input.ts        ← (optional if needed)
│   ├── types/                    ← (Missing this needed)
│   │   ├── token-response.ts
│   │   └── register-response.ts
│   └── guards/
│       ├── gql-auth.guard.ts
│       └── roles.guard.ts
│
├── users/
│   ├── user.module.ts
│   ├── user.service.ts
│   ├── user.resolver.ts
│   ├── dto/
│   │   └── update-user.input.ts  ← (future)
│   └── models/
│       └── user.model.ts         ← (future)
│
├── products/
│   ├── product.module.ts
│   ├── product.service.ts
│   ├── product.resolver.ts
│   ├── dto/
│   │   └── create-product.input.ts
│   └── models/
│       └── product.model.ts
│
├── orders/
│   ├── order.module.ts
│   ├── order.service.ts
│   ├── order.resolver.ts
│   ├── dto/
│   │   └── create-order.input.ts
│   └── models/
│       └── order.model.ts
│
├── prisma/
│   ├── prisma.service.ts
│   ├── schema.prisma
│   └── seed.ts
│
.env
package.json
tsconfig.json
