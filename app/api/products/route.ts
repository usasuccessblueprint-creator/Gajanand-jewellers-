import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // TODO: Fetch products from database
    const products = [
      {
        id: 1,
        name: 'Premium Gold Ring',
        price: 25000,
        description: 'Beautiful 18K gold ring with diamond',
        image: '/products/ring-1.jpg',
      },
      // Add more products
    ];

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
