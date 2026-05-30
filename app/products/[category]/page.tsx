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
    return { title: 'Products - Roboticela' };
  }

  return {
    title: `${category.name} Products - Roboticela`,
    description: category.description,
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
