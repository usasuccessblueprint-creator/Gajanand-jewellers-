# Gajanand Jewellers - E-Commerce Platform

A modern e-commerce platform for Gajanand Jewellers built with Next.js, React, and Stripe.

## Features

- 🛍️ Product Catalog with High-Quality Images
- 🛒 Shopping Cart System
- 💳 Stripe Payment Integration
- 👤 User Authentication
- 📦 Order Management
- 🔍 Product Search & Filtering
- 📱 Responsive Design
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Payment**: Stripe
- **State Management**: Zustand
- **Database**: MongoDB (recommended)
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Stripe Account

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/usasuccessblueprint-creator/Gajanand-jewellers-.git
   cd Gajanand-jewellers-
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   ```
   Add your Stripe keys and database URL

4. Run the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── products/          # Product pages
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout flow
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
├── lib/                   # Utility functions
├── public/                # Static assets
├── styles/                # Global styles
└── types/                 # TypeScript types
```

## Key Pages

- `/` - Homepage with featured products
- `/products` - Product catalog
- `/products/[id]` - Individual product page
- `/cart` - Shopping cart
- `/checkout` - Checkout page
- `/orders` - Order history

## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/[id]` - Get product details
- `POST /api/orders` - Create order
- `GET /api/orders/[id]` - Get order details
- `POST /api/payment` - Process payment with Stripe

## Environment Variables

See `.env.example` for all required environment variables.

## Deployment

Deploy easily on Vercel:

```bash
npm install -g vercel
vercel
```

## Contributing

Pull requests are welcome!

## License

MIT
