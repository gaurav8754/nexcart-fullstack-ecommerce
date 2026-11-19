# Next.js 16 E-Commerce Platform (ShopMart)

A full-stack e-commerce web application built with Next.js 16 (App Router, Turbopack), React 19, Redux Toolkit, MongoDB, and Razorpay.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack, `proxy.ts` middleware)
- **UI Library**: React 19, Tailwind CSS v4, Lucide React
- **State Management**: Redux Toolkit (RTK) with `useSelector.withTypes`
- **Database & ODM**: MongoDB with Mongoose
- **Authentication**: JWT stored in HTTP-only cookies, bcryptjs password hashing
- **Form Validation**: React Hook Form, Zod, `@hookform/resolvers`
- **Payments**: Razorpay SDK & Webhook verification

---

## Prerequisites

- **Node.js**: `v20.x` or higher (`v24.x` recommended)
- **Package Manager**: `npm` (v10+)
- **MongoDB**: Local instance running at `mongodb://localhost:27017` or a MongoDB Atlas cluster URI

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create `.env.local` from the template:

```bash
cp .env.example .env.local
```

Fill in the required values:

```env
# Database
MONGO_URI=mongodb://localhost:27017/shopmart

# Authentication
JWT_SECRET=your_jwt_secret_key_min_32_chars
JWT_COOKIE_NAME=token

# App URL
NEXT_PUBLIC_API_URL=http://localhost:3000

# Payments (Razorpay test keys)
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxxx
RAZORPAY_KEY_SECRET=xxxxxx
```

### 3. Seed Database (Optional but Recommended)

Populate sample catalog data (electronics, fashion, fitness, and home products):

```bash
npm run seed
```

### 4. Run Development Server

```bash
npm run dev
```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server with Turbopack |
| `npm run build` | Compiles production build and runs TypeScript verification |
| `npm run start` | Starts production server after build |
| `npm run lint` | Runs ESLint check across all project files |
| `npm run seed` | Seeds initial products into the MongoDB database |

---

## Project Structure

```
nextjs16-ecommerce/
├── app/
│   ├── (admin)/admin/          # Protected admin dashboard routes
│   ├── (auth)/                 # Login and registration pages
│   ├── (protected)/            # Cart, checkout, and orders (auth required)
│   ├── (public)/               # Homepage and product browse/details
│   ├── api/                    # REST API routes (auth, products, cart, order, addresses)
│   ├── layout.tsx              # Root layout with font, store & auth initializers
│   └── globals.css             # Tailwind v4 styles
├── components/
│   ├── address/                # Address list & form components
│   ├── auth/                   # Client auth state initializers
│   ├── cart/                   # Cart item, mini-cart, and action buttons
│   ├── store/                  # Hero carousel, product filters & pagination
│   └── ui/                     # Navbar, Footer, and input components
├── hooks/                      # Custom hooks (`useCart`)
├── lib/                        # Auth helpers, DB connection, API clients, Zod schemas
├── models/                     # Mongoose schemas (User, Product, Cart, Order)
├── proxy.ts                    # Next.js 16 route protection and proxy middleware
├── scripts/seed.ts             # Database seeding script
├── store/                      # Redux Toolkit store, selectors, and slices
└── types/                      # TypeScript domain definitions
```

---

## Environment Variables Reference

| Variable | Required | Description |
| :--- | :--- | :--- |
| `MONGO_URI` | Yes | MongoDB connection string |
| `JWT_SECRET` | Yes | Secret key used to sign and verify user JWT tokens |
| `JWT_COOKIE_NAME` | Yes | Name of HTTP-only cookie storing the auth token (e.g., `token`) |
| `NEXT_PUBLIC_API_URL` | No | Base application URL for SSR data fetching (defaults to `http://localhost:3000`) |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Yes | Razorpay test/live key identifier for checkout modal |
| `RAZORPAY_KEY_SECRET` | Yes | Razorpay private secret key for payment verification |

---

## Verification & Build

Run both type-checks and production build to confirm environment readiness:

```bash
npx tsc --noEmit
npm run lint
npm run build
```
