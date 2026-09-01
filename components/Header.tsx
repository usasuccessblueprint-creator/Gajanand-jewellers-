'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gradient">
          Gajanand
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gold transition">Home</Link>
          <Link href="/products" className="hover:text-gold transition">Products</Link>
          <Link href="/about" className="hover:text-gold transition">About</Link>
          <Link href="/contact" className="hover:text-gold transition">Contact</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative">
            <span className="text-2xl">🛒</span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 space-y-2">
          <Link href="/" className="block py-2 hover:text-gold">Home</Link>
          <Link href="/products" className="block py-2 hover:text-gold">Products</Link>
          <Link href="/about" className="block py-2 hover:text-gold">About</Link>
          <Link href="/contact" className="block py-2 hover:text-gold">Contact</Link>
        </div>
      )}
    </header>
  );
}
