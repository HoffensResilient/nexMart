# 🛒 NexMart – Fullstack eCommerce Platform (MVP)

A fully functional, production-grade eCommerce MVP built with **Next.js**, **NestJS**, **GraphQL**, and **Prisma**, structured with professional standards and SDLC practices.
Built as part of my portfolio to demonstrate strong software engineering and fullstack architecture skills.


---

## 📌 Overview

NexMart is a modern eCommerce platform built from scratch using a monorepo architecture. It includes:

* 🧑‍💻 **Frontend**: Next.js (App Router), TailwindCSS, Apollo Client
* ⚙️ **Backend**: NestJS, GraphQL, Prisma ORM
* 🗄️ **Database**: PostgreSQL
* 🔐 **Auth**: JWT-based authentication with role-based access control
* ☁️ **Deployment**: Vercel (frontend), Render (backend + DB)

> This project is designed to showcase my capabilities as a **Fullstack Developer / AI Engineer**, highlighting clean code practices, modular architecture, GraphQL design, database modeling, and secure authentication flows.

---

## 🚀 MVP Features

### 👨‍💼 End User Flow

| Feature         | Description                                        |
| --------------- | -------------------------------------------------- |
| User Auth       | Register & login with secure JWT-based flow        |
| Product Catalog | View product list, detail page, and image previews |
| Shopping Cart   | Add/remove items to local cart before checkout     |
| Place Order     | Authenticated users can checkout and place orders  |
| View Orders     | Logged-in users can view past order history        |

---

### 🧑‍🏫 Admin (via API or GUI – optional)

| Feature            | Description                            |
| ------------------ | -------------------------------------- |
| Product Management | Create/edit/delete products via API    |
| View All Orders    | Admin can see all user orders          |
| Role Management    | Admin vs User access controlled guards |

---

## 🧱 Tech Stack

| Layer          | Stack                                                                      |
| -------------- | -------------------------------------------------------------------------- |
| **Frontend**   | [Next.js](https://nextjs.org/) + App Router + TailwindCSS + Apollo Client  |
| **Backend**    | [NestJS](https://nestjs.com/) + GraphQL + [Prisma](https://www.prisma.io/) |
| **Database**   | PostgreSQL (hosted on Supabase or Render)                                  |
| **Auth**       | JWT + bcrypt + Guards for route protection                                 |
| **Deployment** | Vercel (Frontend) + Render (Backend/API)                                   |
| **CMS**        | Optional Sanity integration for content                                    |

---

## 🗂️ Monorepo Structure

```
nexmart/
├── frontend-nexmart/       # Next.js frontend (App Router)
│   ├── app/                # Routes & pages
│   ├── components/         # UI components (cards, layout, etc)
│   ├── lib/                # GraphQL client, cart, auth helpers
│   ├── public/             # Static images
│   └── tailwind.config.js  # Styling setup
│
├── backend-nexmart/        # NestJS backend (GraphQL API)
│   ├── src/
│   │   ├── auth/           # JWT login/register
│   │   ├── users/          # User GraphQL model
│   │   ├── product/        # Product CRUD APIs
│   │   ├── orders/         # Order creation and queries
│   │   ├── prisma/         # Prisma DB service
│   │   └── app.module.ts   # Root module
│   ├── prisma/
│   │   ├── schema.prisma   # PostgreSQL schema
│   │   └── seed.ts         # Dev seeding script
│   └── .env                # DB + JWT secrets
│
└── README.md
```

---

## ⚙️ Production-Ready Practices
```
✅ Modular clean code architecture
✅ DTO validation and GraphQL schema control
✅ Prisma schema with normalized relationships
✅ JWT role-based auth guards
✅ CI/CD ready via Vercel + Render
✅ Separation of concerns (auth, user, product, order)
✅ Secure env vars + scalable codebase
```
> **Frontend part is work in progress (WIP), still under development**
---

## 🌱 Future Enhancements

| Feature              | Priority | Notes                                  |
| -------------------- | -------- | -------------------------------------- |
| Stripe Integration   | 🔜       | Secure checkout with payment gateway   |
| Sanity CMS           | 🔜       | Rich product content, banners, blogs   |
| Dashboard Analytics  | 🔜       | Sales charts, order trends             |
| User Profile Editing | 🔜       | Update name, password, email           |
| Mobile Responsive UI | ✅        | Tailwind-based fully responsive layout |
| Testing Coverage     | ⚠️       | Unit + e2e via Jest + Playwright       |

---

## 🔒 Authentication Flow

| Stage         | Flow                                                        |
| ------------- | ----------------------------------------------------------- |
| Registration  | `register(email, password)` via GraphQL mutation            |
| Login         | `login(email, password)` returns JWT token                  |
| Authorization | Token is stored in localStorage and sent via Apollo         |
| Role Access   | Guards in backend (`@Roles('ADMIN')`) + frontend middleware |

---

## 🧠 GraphQL Highlights

```graphql
# 📦 Product List
query Products {
  products {
    id
    title
    price
    slug
  }
}

# 👤 Register
mutation Register {
  register(data: {
    email: "user@example.com"
    password: "strongpass"
  }) {
    token
  }
}

# 🛒 Create Order
mutation CreateOrder {
  createOrder(data: { productIds: [1, 3] }) {
    id
    createdAt
    products {
      title
    }
  }
}
```

---

## 📷 Screenshots

> **Frontend part is work in progress (WIP), still under development**

---

## 📤 Deployment

> **Not Deployed yet, still under development**

| Platform | URL / Status                                           |
| -------- | ------------------------------------------------------ |
| Frontend | [Vercel App](https://nexmart.vercel.app)               |
| Backend  | [Render API](https://nexmart-api.onrender.com/graphql) |
| Database | Supabase / Render PostgreSQL                           |

---

## 👨‍💻 About Me

**👋 I'm Rohit Raj Sarraf**, an AI Engineer and Fullstack Developer building impactful products with modern tech. I built this project to demonstrate my technical skills, fullstack thinking, and ability to deliver a real-world production-grade system.

Feel free to connect:

* 💼 [LinkedIn](https://www.linkedin.com/in/rohitrajsarraf/)
* 📧 [rohitrajsarrafnp@gmail.com](mailto:rohitrajsarrafnp@gmail.com)
* 🌍 [Portfolio](https://rohitrajsarraf.com.np/)

---
