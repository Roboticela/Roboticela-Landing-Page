import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import CategoryProductsPage from './CategoryProductsPage';
import { getCategoryBySlug, isValidCategorySlug, productCategories } from '../../data/productCategories';

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return productCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return { title: 'Roboticela Products — Explore the Full Catalog' };
  }

  return {
    title: { absolute: `${category.name} Products | Roboticela` },
    description: category.description,
    alternates: { canonical: `/products/${categorySlug}` },
    openGraph: {
      type: 'website',
      url: `https://roboticela.com/products/${categorySlug}`,
      title: `${category.name} Products | Roboticela`,
      description: category.description,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${category.name} - Roboticela` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} Products | Roboticela`,
      description: category.description,
      images: ['/og-image.png'],
    },
  };
}

export default async function ProductCategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;

  if (!isValidCategorySlug(categorySlug)) {
    notFound();
  }

  const category = getCategoryBySlug(categorySlug)!;

  return <CategoryProductsPage category={category} />;
}
