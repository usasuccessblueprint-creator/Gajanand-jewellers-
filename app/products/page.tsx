import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12">Our Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
