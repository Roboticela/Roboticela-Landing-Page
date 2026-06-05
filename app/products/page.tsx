'use client';

import { Package } from 'lucide-react';

import PageHero from '../components/PageHero';
import ProductsCatalog from '../components/ProductsCatalog';
import SitePageLayout from '../components/SitePageLayout';

export default function ProductsPage() {
  return (
    <SitePageLayout>
      <PageHero
        eyebrow="Products"
        title="Things made with care."
        description="Every product here was built to solve something real. Not to demonstrate capability — to actually help."
        icon={Package}
      />

      <section className="max-w-7xl mx-auto">
        <ProductsCatalog showHeader={false} />
      </section>
    </SitePageLayout>
  );
}
