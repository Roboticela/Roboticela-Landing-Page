'use client';

import Link from 'next/link';
import type { ProductCategorySlug } from '../data/productCategories';
import { productCategories } from '../data/productCategories';

type ProductCategoryNavProps = {
  activeSlug?: ProductCategorySlug | 'all';
};

export default function ProductCategoryNav({ activeSlug = 'all' }: ProductCategoryNavProps) {
  const linkClass = (isActive: boolean) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-primary/15 text-foreground border border-primary/40'
        : 'bg-card/60 text-foreground/80 border border-border/40 hover:border-primary/40 hover:text-primary'
    }`;

  return (
    <nav
      className="flex flex-wrap justify-center gap-2 mb-12"
      aria-label="Product categories"
    >
      <Link href="/products" className={linkClass(activeSlug === 'all')}>
        All
      </Link>
      {productCategories.map((category) => (
        <Link
          key={category.slug}
          href={`/products/${category.slug}`}
          className={linkClass(activeSlug === category.slug)}
        >
          {category.name}
        </Link>
      ))}
    </nav>
  );
}
