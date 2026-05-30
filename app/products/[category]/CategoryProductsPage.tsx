'use client';

import { Package } from 'lucide-react';

import PageHero from '../../components/PageHero';
import ProductsCatalog from '../../components/ProductsCatalog';
import SitePageLayout from '../../components/SitePageLayout';
import type { ProductCategory } from '../../data/productCategories';

type CategoryProductsPageProps = {
  category: ProductCategory;
};

export default function CategoryProductsPage({ category }: CategoryProductsPageProps) {
  return (
    <SitePageLayout>
      <PageHero
        eyebrow="Products"
        title={category.name}
        titleAccent="Collection."
        description={category.description}
        icon={Package}
      />

      <section className="max-w-7xl mx-auto">
        <ProductsCatalog
          activeCategory={category.slug}
          showHeader={false}
        />
      </section>
    </SitePageLayout>
  );
}
