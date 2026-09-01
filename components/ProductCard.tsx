import Link from 'next/link';

export default function ProductCard() {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <div className="bg-gray-200 aspect-square flex items-center justify-center">
        <span className="text-4xl">💍</span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Premium Ring</h3>
        <p className="text-gray-600 text-sm mb-4">Beautiful and elegant design</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gold">₹25,000</span>
          <Link
            href="#"
            className="bg-gold text-black px-4 py-2 rounded hover:bg-dark-gold transition text-sm font-semibold"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
