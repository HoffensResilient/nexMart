// src/auth/guards/admin.guard.ts

import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const ctx = context.switchToHttp().getRequest();
    const user = ctx.user;

    if (!user) {
      throw new ForbiddenException('User not authenticated');
    }
    if (user.role !== 'ADMIN') {
      throw new ForbiddenException('Admin access only');
    }

    return true;
  }
}
