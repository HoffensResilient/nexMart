"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const auth_service_1 = require("./auth.service");
const common_1 = require("@nestjs/common");
const gql_auth_guard_1 = require("./guards/gql-auth.guard");
const register_input_1 = require("./dto/register.input");
let TokenResponse = class TokenResponse {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], TokenResponse.prototype, "accessToken", void 0);
TokenResponse = __decorate([
    (0, graphql_1.ObjectType)()
], TokenResponse);
let RegisterResponse = class RegisterResponse {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RegisterResponse.prototype, "message", void 0);
RegisterResponse = __decorate([
    (0, graphql_1.ObjectType)()
], RegisterResponse);
let AuthResolver = class AuthResolver {
    constructor(authService) {
        this.authService = authService;
    }
    hello() {
        return 'Hello, Hoffen from NexMart Auth!';
    }
    securedHello() {
        return 'Hello, you are authenticated!';
    }
    register(registerInput) {
        return this.authService.register(registerInput.email, registerInput.password);
    }
    login(email, password) {
        return this.authService.login(email, password);
    }
};
exports.AuthResolver = AuthResolver;
__decorate([
    (0, graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AuthResolver.prototype, "hello", null);
__decorate([
    (0, graphql_1.Query)(() => String),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AuthResolver.prototype, "securedHello", null);
__decorate([
    (0, graphql_1.Mutation)(() => RegisterResponse),
    __param(0, (0, graphql_1.Args)('registerInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_input_1.RegisterInput]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "register", null);
__decorate([
    (0, graphql_1.Mutation)(() => TokenResponse),
    __param(0, (0, graphql_1.Args)('email')),
    __param(1, (0, graphql_1.Args)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "login", null);
exports.AuthResolver = AuthResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthResolver);
//# sourceMappingURL=auth.resolver.js.map