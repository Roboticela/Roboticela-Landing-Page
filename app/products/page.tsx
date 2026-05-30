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
        title="Tools &"
        titleAccent="Platforms."
        description="Software, hardware, e-commerce, enterprise, and research—crafted with care for real problems."
        icon={Package}
      />

      <section className="max-w-7xl mx-auto">
        <ProductsCatalog showHeader={false} />
      </section>
    </SitePageLayout>
  );
}
