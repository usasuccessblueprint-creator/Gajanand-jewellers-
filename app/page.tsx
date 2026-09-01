import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Gajanand Jewellers</h1>
          <p className="text-xl text-gray-300 mb-8">Exquisite jewelry for life's most precious moments</p>
          <Link
            href="/products"
            className="inline-block bg-gold text-black font-semibold px-8 py-3 rounded-lg hover:bg-dark-gold transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Placeholder Product Cards */}
            {[1, 2, 3, 4].map((i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2">Authentic Jewelry</h3>
              <p className="text-gray-600">100% genuine and certified jewelry</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Secure and timely delivery across India</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive pricing without compromise</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
