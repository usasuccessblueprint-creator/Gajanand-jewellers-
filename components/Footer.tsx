export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">Gajanand Jewellers - Your trusted source for fine jewelry since decades.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-gold">Products</a></li>
              <li><a href="#" className="hover:text-gold">Orders</a></li>
              <li><a href="#" className="hover:text-gold">Track Order</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-gold">Help Center</a></li>
              <li><a href="#" className="hover:text-gold">Returns</a></li>
              <li><a href="#" className="hover:text-gold">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">📍 Ranchi, India</p>
            <p className="text-gray-400">📞 +91-XXXXX-XXXXX</p>
            <p className="text-gray-400">✉️ info@gajanand.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Gajanand Jewellers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
