'use client';

export default function CartPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <p className="text-xl text-gray-600">Your cart is empty</p>
          <p className="text-gray-500 mt-2">Start shopping to add items to your cart</p>
        </div>
      </div>
    </div>
  );
}
