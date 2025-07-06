// auth.module.ts

// import { Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
// import { AuthService } from './auth.service';
// import { AuthResolver } from './auth.resolver';
// import { JwtStrategy } from './jwt.strategy';

// @Module({
//   imports: [
//     PassportModule,
//     JwtModule.register({
//       secret: process.env.JWT_SECRET || 'supersecretkey',
//       signOptions: { expiresIn: '1d' },
//     }),
//   ],
//   providers: [AuthService, AuthResolver, JwtStrategy],
// })
// export class AuthModule {}


// import { Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
// import { AuthService } from './auth.service';
// import { AuthResolver } from './auth.resolver';
// import { JwtStrategy } from './jwt.strategy';
// import { PrismaModule } from '../../prisma/prisma.module';

// @Module({
//   imports: [
//     PassportModule,
//     JwtModule.register({
//       secret: process.env.JWT_SECRET || 'supersecretkeyhoffen',
//       signOptions: { expiresIn: '1d' },
//     }),
//     PrismaModule,
//   ],
//   providers: [AuthService, AuthResolver, JwtStrategy],
// })
// export class AuthModule {}

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtStrategy } from './jwt.strategy';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'supersecretkeyhoffen',
      signOptions: { expiresIn: '7d' },
    }),
    PrismaModule,
  ],
  providers: [AuthService, AuthResolver, JwtStrategy, GqlAuthGuard],
})
export class AuthModule {}
