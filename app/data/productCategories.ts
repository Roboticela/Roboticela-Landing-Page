export type ProductCategorySlug =
  | 'software'
  | 'hardware'
  | 'e-commerce'
  | 'enterprise'
  | 'research';

export type ProductCategory = {
  slug: ProductCategorySlug;
  name: string;
  description: string;
};

export const productCategories: ProductCategory[] = [
  {
    slug: 'software',
    name: 'Software',
    description: 'Apps, platforms, and digital tools built to solve real problems.',
  },
  {
    slug: 'hardware',
    name: 'Hardware',
    description: 'Physical devices designed with Roboticela precision and care.',
  },
  {
    slug: 'e-commerce',
    name: 'E-commerce',
    description: 'Commerce experiences that connect brands and customers seamlessly.',
  },
  {
    slug: 'enterprise',
    name: 'Enterprise',
    description: 'Scalable solutions for teams and organizations at any size.',
  },
  {
    slug: 'research',
    name: 'Research',
    description: 'Breakthrough discoveries and lab tools that shape tomorrow.',
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((category) => category.slug === slug);
}

export function isValidCategorySlug(slug: string): slug is ProductCategorySlug {
  return productCategories.some((category) => category.slug === slug);
}
