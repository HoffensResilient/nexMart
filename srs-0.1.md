# Final Backend Folder Structure

```
backend-nexmart/
├── src/
│   ├── auth/
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts ✅ handles login/register, bcrypt + jwt
│   │   ├── auth.resolver.ts ✅ exposes GraphQL mutations
│   │   ├── dto/
│   │   │   └── register.input.ts ✅ for register mutation input
│   │   ├── guards/
│   │   │   └── gql-auth.guard.ts ✅ JWT-based guard
│   │   ├── strategies/
│   │   │   └── jwt.strategy.ts ✅ passport-jwt
│   │
│   ├── product/
│   │   ├── product.module.ts
│   │   ├── product.service.ts ✅ handles DB logic for products
│   │   ├── product.resolver.ts ✅ GraphQL query/mutation
│   │   ├── dto/
│   │   │   └── create-product.input.ts ✅ product creation DTO
│   │   ├── models/
│   │   │   └── product.model.ts ✅ GraphQL model
│
│   ├── orders/
│   │   ├── order.module.ts
│   │   ├── order.service.ts ✅ creates order, connects user + products
│   │   ├── order.resolver.ts ✅ GraphQL mutation + query
│   │   ├── dto/
│   │   │   └── create-order.input.ts ✅ input: productIds
│   │   ├── models/
│   │   │   └── order.model.ts ✅ includes products and userId
│   ├── users/
│   │   ├── user.module.ts
│   │   ├── user.service.ts
│   │   ├── user.resolver.ts
│   │   ├── dto/
│   │   │   └── create-user.input.ts 
│   │   └── models/
│   │       └── user.model.ts         # GraphQL model 
│   ├── prisma/
│   │   ├── prisma.module.ts
│   │   ├── prisma.service.ts ✅ connects to DB
│
│   ├── app.module.ts ✅ Root module
│   └── main.ts ✅ Bootstrap
│
├── prisma/
│   ├── schema.prisma ✅ Prisma schema (User, Product, Order)
│   └── seed.ts ✅ Seeds test user + sample products
│
├── .env ✅ DATABASE_URL, JWT_SECRET
├── package.json
├── tsconfig.json
```

# SRS 1.0

Absolutely, Hoffen. Here's a **professional-grade SDLC and architecture breakdown** for your **NexMart eCommerce MVP**, written from a **Project Manager + Tech Lead perspective** with a focus on:

---

### 📦 Project: NexMart – Modern eCommerce MVP

> **Stack**: Next.js (App Router) + TailwindCSS + NestJS + GraphQL + Prisma + PostgreSQL + CMS (Sanity)
> **Audience**: End-users (shoppers) and Admin (product management)
> **Deployment**: Vercel (frontend) + Render (backend) + Supabase/Render DB

---

# 🔁 Software Development Life Cycle (SDLC)

| Phase             | Deliverables                                                               |
| ----------------- | -------------------------------------------------------------------------- |
| 1. Planning       | Scope, features, user roles, page flows                                    |
| 2. Requirement    | Wireframes, workflows, authentication, product & order modules             |
| 3. Design         | Component structure, system architecture, DB schema                        |
| 4. Implementation | Code modules: Next.js frontend, NestJS API, GraphQL schema                 |
| 5. Testing        | Unit tests (Jest), integration (Playwright), GraphQL tests, auth scenarios |
| 6. Deployment     | Vercel (FE), Render (BE), PostgreSQL setup                                 |
| 7. Maintenance    | Error tracking, content updating (CMS), versioning                         |

---

# 👥 Roles

* **Frontend User (Shopper)**
* **Admin (Product Manager)**
* **Backend API Service**
* **CMS Editor (optional via Sanity)**

---

# 🌐 Page Architecture (Next.js - App Router)

## 👨‍💼 User-Facing Pages

| Route              | Purpose                          | Component           |
| ------------------ | -------------------------------- | ------------------- |
| `/`                | Home page with featured products | `HomePage`          |
| `/products`        | Product catalog                  | `ProductListPage`   |
| `/products/[slug]` | Single product detail            | `ProductDetailPage` |
| `/cart`            | Shopping cart                    | `CartPage`          |
| `/checkout`        | Place order (auth required)      | `CheckoutPage`      |
| `/login`           | Login page                       | `LoginPage`         |
| `/register`        | Register page                    | `RegisterPage`      |
| `/account/orders`  | User's past orders               | `UserOrdersPage`    |

---

## 🛠️ Admin Pages

| Route                  | Purpose                  | Component              |
| ---------------------- | ------------------------ | ---------------------- |
| `/admin`               | Admin dashboard overview | `AdminDashboardPage`   |
| `/admin/products`      | Manage products (CRUD)   | `AdminProductListPage` |
| `/admin/products/new`  | Create new product       | `ProductFormPage`      |
| `/admin/products/[id]` | Edit product             | `ProductEditPage`      |
| `/admin/orders`        | View all customer orders | `AdminOrdersPage`      |

---

# 🗂️ Project Structure

## 📁 `/frontend-nexmart/` – Next.js App Router

```
/app
  /layout.tsx
  /page.tsx (Home)
  /products/page.tsx
  /products/[slug]/page.tsx
  /cart/page.tsx
  /checkout/page.tsx
  /login/page.tsx
  /register/page.tsx
  /account/orders/page.tsx
  /admin/
    /page.tsx
    /products/page.tsx
    /products/new/page.tsx
    /products/[id]/page.tsx
    /orders/page.tsx

/components
  /ProductCard.tsx
  /ProductForm.tsx
  /OrderCard.tsx
  /Layout.tsx
  /Header.tsx
  /AuthGuard.tsx

/lib
  graphql-client.ts
  auth.ts
  cart.ts
  products.ts
  orders.ts

/middleware.ts
/public
  /images
```

---

## 📁 `/backend-nexmart/` – NestJS + GraphQL

```
/src
  /app.module.ts
  /main.ts

  /auth
    auth.module.ts
    auth.service.ts
    auth.resolver.ts
    jwt.strategy.ts
    guards/
      gql-auth.guard.ts
      roles.guard.ts

  /users
    user.module.ts
    user.service.ts
    user.resolver.ts
    dto/
    entity/

  /products
    product.module.ts
    product.service.ts
    product.resolver.ts

  /orders
    order.module.ts
    order.service.ts
    order.resolver.ts

/prisma
  schema.prisma
  seed.ts

.env
render.yaml
```

---

# 🧠 Database Design (Prisma + PostgreSQL)

```prisma
model User {
  id       Int     @id @default(autoincrement())
  email    String  @unique
  password String
  role     Role    @default(USER)
  orders   Order[]
}

model Product {
  id       Int     @id @default(autoincrement())
  title    String
  slug     String  @unique
  price    Float
  image    String
  category String
  orders   Order[] @relation("ProductOrders", references: [id])
}

model Order {
  id        Int       @id @default(autoincrement())
  userId    Int
  user      User      @relation(fields: [userId], references: [id])
  products  Product[] @relation("ProductOrders")
  createdAt DateTime  @default(now())
}

enum Role {
  USER
  ADMIN
}
```

---

# 🔐 Auth & Roles

| Feature          | Stack Used                  | Notes                     |
| ---------------- | --------------------------- | ------------------------- |
| Login/Register   | NestJS GraphQL Mutations    | JWT Auth, hashed password |
| Protected Routes | `GqlAuthGuard` + Role Guard | Role-based control        |
| Frontend Guard   | `/middleware.ts` + Context  | Admin pages protected     |

---

# 📦 CMS Integration (Optional with Sanity)

| Content              | Use In           | Fallback if not using CMS |
| -------------------- | ---------------- | ------------------------- |
| Product title, desc  | Detail page, SEO | Store in Prisma           |
| Images, rich content | Product previews | Store `/public/images`    |
| Home banners         | Home page design | Hardcoded or markdown     |

---

# 🧪 Testing Strategy

| Test Type          | Tool                    | Notes                                 |
| ------------------ | ----------------------- | ------------------------------------- |
| Unit Tests         | Jest (NestJS + GraphQL) | Resolver, service, DTO validation     |
| Integration Tests  | Playwright (Next.js)    | Login flow, checkout, order placement |
| API Contract Tests | GraphQL Playground      | Mutation and query schema             |

---

# 🚀 Deployment Workflow

| Layer       | Platform           | Setup Type            |
| ----------- | ------------------ | --------------------- |
| Frontend    | Vercel             | GitHub + CI/CD        |
| Backend API | Render             | GitHub + render.yaml  |
| DB          | Supabase/Render DB | PostgreSQL            |
| Env Vars    | `.env`             | Secure tokens, DB URL |

---

# ✅ MVP Use Cases

## 🛍️ End-User Flow

1. Browse products → `/products`
2. View product → `/products/[slug]`
3. Add to cart → `/cart`
4. Login/Register → `/login`, `/register`
5. Checkout → `/checkout`
6. View orders → `/account/orders`

## 🧑‍💼 Admin Flow

1. Login → token-based session
2. Create product → `/admin/products/new`
3. View orders → `/admin/orders`
4. Edit product → `/admin/products/[id]`

---

# 📋 Project Management Tips

| Category         | Tooling Suggestions              |
| ---------------- | -------------------------------- |
| Tasks            | GitHub Projects, Trello          |
| Documentation    | Notion, GitHub Wiki              |
| CI/CD            | Vercel + Render + GitHub Actions |
| Error Tracking   | Sentry, LogRocket                |
| Roadmap Planning | Linear, Jira (for team scaling)  |

---















# SRS 2.0


Certainly, Hoffen. Here's your updated and fully extended **professional SDLC + production readiness documentation** for the **NexMart eCommerce MVP** — refined to reflect a 99–100% production-ready goal, and written as a hybrid **SRS (Software Requirements Specification) + PM Architecture Document** suitable for real-world software delivery or portfolio proof.

---

## 📦 Project Document: NexMart – Modern eCommerce MVP

> **Type:** Fullstack Software Architecture & SRS

> **Use:** Developer onboarding, Job Portfolio, Production Readiness Document

> **Prepared By:** Hoffen (AI Engineer & Project Manager)

---

## 📁 Stack Overview

* **Frontend:** Next.js (App Router) + TailwindCSS
* **Backend:** NestJS + GraphQL + Prisma ORM
* **Database:** PostgreSQL (via Supabase or Render)
* **Deployment:** Vercel (frontend), Render (backend)
* **Auth:** JWT with role-based access control
* **CMS (Optional):** Sanity for headless product content

---

# 🔁 SDLC Breakdown

| Phase             | Deliverables                                                                |
| ----------------- | --------------------------------------------------------------------------- |
| 1. Planning       | Scope, personas (user/admin), use cases, flow diagrams                      |
| 2. Requirement    | Wireframes, GraphQL schema, auth + roles, modules for products/orders/users |
| 3. Design         | Clean architecture, DB schema, folder design, SSR routes                    |
| 4. Implementation | App Router frontend, NestJS backend, GraphQL API, CMS                       |
| 5. Testing        | Unit (Jest), e2e (Supertest), UI (Playwright), contract (Playground)        |
| 6. Deployment     | CI/CD to Vercel + Render, `.env` setups                                     |
| 7. Maintenance    | Logging, error tracking, CMS updates, DB migrations                         |

---

# 👥 Roles

* **End User (Shopper):** Browse, add to cart, checkout, track orders
* **Admin:** Manage products, view orders
* **Backend Service:** Auth, role guards, GraphQL
* **CMS Editor (optional):** Add/edit product content in Sanity

---

# 🌐 Pages & Routing

### 🛍️ User Pages (`/`)

| Route              | Purpose                   | Component           |
| ------------------ | ------------------------- | ------------------- |
| `/`                | Homepage (featured items) | `HomePage`          |
| `/products`        | Product catalog           | `ProductListPage`   |
| `/products/[slug]` | Product detail            | `ProductDetailPage` |
| `/cart`            | Shopping cart             | `CartPage`          |
| `/checkout`        | Authenticated checkout    | `CheckoutPage`      |
| `/login`           | JWT login                 | `LoginPage`         |
| `/register`        | User registration         | `RegisterPage`      |
| `/account/orders`  | Order history             | `UserOrdersPage`    |

---

### 🧑‍💼 Admin Pages (`/admin`)

| Route                  | Purpose                  | Component              |
| ---------------------- | ------------------------ | ---------------------- |
| `/admin`               | Admin dashboard          | `AdminDashboardPage`   |
| `/admin/products`      | View/manage product list | `AdminProductListPage` |
| `/admin/products/new`  | Create new product       | `ProductFormPage`      |
| `/admin/products/[id]` | Edit product             | `ProductEditPage`      |
| `/admin/orders`        | View all customer orders | `AdminOrdersPage`      |

---

# 🗂️ Folder Structure

### 📁 `/frontend-nexmart/` – Next.js App Router

```
/app
  /products, /cart, /checkout, /login, /register
  /account/orders
  /admin/products, /admin/orders

/components
  ProductCard.tsx, ProductForm.tsx, Layout.tsx, AuthGuard.tsx

/lib
  graphql-client.ts, auth.ts, cart.ts

/middleware.ts  // Protects admin pages

/public/images
```

---

### 📁 `/backend-nexmart/` – NestJS + GraphQL

```
/src
  /auth       → JWT strategy, guards
  /users      → User resolver/service
  /products   → Product schema and logic
  /orders     → Order logic

/prisma/schema.prisma  // DB Models
/prisma/seed.ts        // Dev seeding
render.yaml            // Render deploy config
.env                   // DB + Auth secrets
```

---

# 🧠 Database Design

```prisma
model User {
  id       Int      @id @default(autoincrement())
  email    String   @unique
  password String
  role     Role     @default(USER)
  orders   Order[]
}

model Product {
  id       Int
  title    String
  slug     String  @unique
  price    Float
  image    String
  category String
}

model Order {
  id        Int
  userId    Int
  products  Product[]
  createdAt DateTime @default(now())
}

enum Role {
  USER
  ADMIN
}
```

---

# 🛡️ Auth, Roles, and Guards

| Feature           | Stack Used                | Description                       |
| ----------------- | ------------------------- | --------------------------------- |
| Login/Register    | NestJS + GraphQL          | JWT token issued on login         |
| Route Guards      | `@UseGuards()`            | Protect resolver logic            |
| Role-based Access | `RolesGuard` + middleware | Admin vs User enforcement         |
| Frontend Guard    | `/middleware.ts`          | Prevent admin UI access for users |

---

# 🧪 Testing Strategy

| Layer         | Tool       | Notes                                 |
| ------------- | ---------- | ------------------------------------- |
| Unit Tests    | Jest       | Services, guards, auth, resolvers     |
| Integration   | Supertest  | Token flow, order logic, admin access |
| UI Testing    | Playwright | Cart flow, login/register/checkout    |
| GraphQL Tests | Playground | Query/mutation contract checks        |

---

# 🚀 Deployment Plan

| Platform   | Purpose          | Tooling/Config                     |
| ---------- | ---------------- | ---------------------------------- |
| Vercel     | Frontend         | Auto deploy from GitHub            |
| Render     | Backend/API      | `render.yaml`, `.env`, start cmd   |
| DB         | Supabase         | PostgreSQL managed DB              |
| CI/CD      | GitHub           | Vercel auto + optional GitHub flow |
| Monitoring | LogRocket/Sentry | Add error reporting if needed      |

---

# 📈 Final Checklist: Production Readiness (100%)

| Area                     | Status | Notes                                    |
| ------------------------ | ------ | ---------------------------------------- |
| Authentication + Roles   | ✅      | Token-based, role-guarded                |
| Database (PostgreSQL)    | ✅      | Prisma migrations applied                |
| GraphQL Schema           | ✅      | Query/mutation optimized                 |
| API + UI Security        | ✅      | Guards + middleware in place             |
| DTO Validation           | ⚠️     | Needs `@IsEmail()`, `@Length()` etc.     |
| Unit Tests (Jest)        | ⚠️     | Structure ready, needs actual test cases |
| e2e Tests (Supertest)    | ⚠️     | Authentication, createOrder, etc.        |
| UI Tests (Playwright)    | ⚠️     | Cart flow, login, protected checkout     |
| Observability & Logging  | ⚠️     | Add `morgan`, Sentry, or custom logging  |
| Performance Optimization | ✅      | SSR for pages, lazy loading images       |
| Admin Route Protection   | ✅      | Guards + middleware                      |

---

## 📋 Suggested Document Title

In a professional setting, this doc is best titled:

> **“System Design & SRS – NexMart eCommerce Platform”**
> (*can also be used in proposals, onboarding, or tech portfolio*)

You can also split it into:

* **📘 Software Requirements Specification (SRS)**
* **📗 Technical Architecture Document (TAD)**
* **📕 Implementation Strategy / Developer Handoff Notes**

---




Got it, Hoffen! Here’s a detailed **frontend MVP plan** with **page designs + GraphQL connection steps** for your NexMart user frontend using **Next.js (App Router) + TailwindCSS + Apollo Client**.

---

# NexMart Frontend MVP — User Side

### Tech stack recap:

* **Next.js (App Router)**
* **TailwindCSS** for styling
* **Apollo Client** for GraphQL data fetching
* **JWT auth** stored in cookies/localStorage
* **Pages prioritized for MVP user flow**

---

## 1. Setup Essentials

* Initialize Next.js app with App Router
* Setup TailwindCSS (official Next.js guide)
* Setup Apollo Client with link to backend GraphQL API (NestJS Render URL)
* Configure Apollo Client to send JWT token on requests for auth

---

## 2. Core Pages + Components for MVP User Flow

| Page            | Path               | Purpose                             | GraphQL Ops Used          |
| --------------- | ------------------ | ----------------------------------- | ------------------------- |
| Home            | `/`                | Featured products, quick links      | `products` query          |
| Product Catalog | `/products`        | List all products                   | `products` query          |
| Product Detail  | `/products/[slug]` | Show single product details         | `product(slug)` query     |
| Login           | `/login`           | User login form                     | `login` mutation          |
| Register        | `/register`        | User signup form                    | `register` mutation       |
| Cart            | `/cart`            | Show cart items + manage quantities | Local state (client-side) |
| Checkout        | `/checkout`        | Place order from cart               | `createOrder` mutation    |
| Order History   | `/account/orders`  | Show user's past orders             | `ordersByUser` query      |

---

## 3. Detailed Page Designs + Tasks

### 3.1 Home `/`

* Show few featured/new products (can be first 4-6 products)
* Link to full product catalog
* Show login/register buttons if not logged in; else show user dropdown with logout & orders link

**GraphQL**: `products` query (limit 6)

**UI Components**: `ProductCard`, `Header`, `Footer`

---

### 3.2 Products List `/products`

* Show paginated or scrollable list of products
* Each product links to its detail page `/products/[slug]`

**GraphQL**: `products` query (all or paginated)

**UI Components**: `ProductCard`, `Pagination` (optional)

---

### 3.3 Product Detail `/products/[slug]`

* Show product images, title, price, description, category
* Add to Cart button (client-side cart)
* Related products (optional)

**GraphQL**: `product(slug)` query

**UI Components**: `ProductDetail`, `AddToCartButton`

---

### 3.4 Login `/login`

* Email + password form
* On success, store JWT token, redirect to home or previous page

**GraphQL**: `login` mutation

**UI Components**: `LoginForm`

---

### 3.5 Register `/register`

* Email + password + confirm password form
* On success, redirect to login or auto-login

**GraphQL**: `register` mutation

**UI Components**: `RegisterForm`

---

### 3.6 Cart `/cart`

* Show list of added products (stored locally or in React Context)
* Quantity controls
* Remove item button
* Proceed to Checkout button

**State**: Client-side (React Context or Zustand)

**UI Components**: `CartItem`, `CartSummary`

---

### 3.7 Checkout `/checkout`

* Show cart summary, total price
* Confirm order button triggers backend `createOrder` mutation
* On success, clear cart and redirect to order history

**GraphQL**: `createOrder` mutation

**UI Components**: `OrderSummary`, `CheckoutButton`

---

### 3.8 Order History `/account/orders`

* List all past orders by logged-in user
* Each order shows products, date, total price

**GraphQL**: `ordersByUser` query (pass userId from token)

**UI Components**: `OrderCard`

---

## 4. State Management + Auth Flow

* Store JWT token in HttpOnly cookie (preferred) or localStorage
* Use React Context or `next-auth` (optional) for user session state
* Apollo Client middleware to attach auth token to GraphQL requests
* Redirect unauthenticated users from protected pages (`/checkout`, `/account/orders`) to `/login`

---

## 5. Apollo Client Setup (Example)

```ts
// lib/apollo-client.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, // e.g. https://your-backend-url/graphql
});

const authLink = setContext((_, { headers }) => {
  // get token from cookie/localStorage
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
```

---

## 6. Example GraphQL Queries/Mutations

### Fetch products

```graphql
query GetProducts {
  products {
    id
    title
    slug
    price
    image
    category
  }
}
```

### Fetch product by slug

```graphql
query GetProduct($slug: String!) {
  product(slug: $slug) {
    id
    title
    slug
    price
    image
    category
  }
}
```

### Login mutation

```graphql
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
  }
}
```

### Register mutation

```graphql
mutation Register($email: String!, $password: String!) {
  register(email: $email, password: $password)
}
```

### Create order mutation

```graphql
mutation CreateOrder($productIds: [Int!]!) {
  createOrder(data: { productIds: $productIds }) {
    id
    products {
      id
      title
      price
    }
    createdAt
  }
}
```

---

## 7. Next Steps for You

* Setup Next.js + Tailwind project
* Configure Apollo Client as above
* Start with `/login` and `/register` pages + auth flow
* Build `/products` and `/products/[slug]` pages with GraphQL data
* Implement client-side cart management (`React Context` recommended)
* Build `/cart` and `/checkout` with backend mutation integration
* Add `/account/orders` page to show user orders

---

If you want, I can also provide **boilerplate Next.js page + component templates** with Apollo integration to jumpstart your frontend dev. Just say the word!
