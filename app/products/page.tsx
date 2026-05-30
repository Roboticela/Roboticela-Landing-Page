'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductsCatalog from '../components/ProductsCatalog';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ProductsCatalog />
        </div>
      </main>

      <Footer />
    </div>
  );
}
