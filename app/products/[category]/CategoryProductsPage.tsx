'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductsCatalog from '../../components/ProductsCatalog';
import type { ProductCategory } from '../../data/productCategories';

type CategoryProductsPageProps = {
  category: ProductCategory;
};

export default function CategoryProductsPage({ category }: CategoryProductsPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ProductsCatalog
            activeCategory={category.slug}
            title={`${category.name} Products`}
            description={category.description}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
