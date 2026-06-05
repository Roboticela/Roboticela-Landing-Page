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
    description: "Apps and platforms that think ahead, stay out of your way, and get better the more you use them.",
  },
  {
    slug: 'hardware',
    name: 'Hardware',
    description: "Physical things built with the same quiet attention you'd expect from something made to last.",
  },
  {
    slug: 'e-commerce',
    name: 'E-commerce',
    description: "Commerce that feels like a conversation, not a transaction.",
  },
  {
    slug: 'enterprise',
    name: 'Enterprise',
    description: "Everything Roboticela makes — scaled to your team, your complexity, your ambition.",
  },
  {
    slug: 'research',
    name: 'Research',
    description: "Things being built here that won't be ready for you yet. But they're coming.",
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((category) => category.slug === slug);
}

export function isValidCategorySlug(slug: string): slug is ProductCategorySlug {
  return productCategories.some((category) => category.slug === slug);
}
