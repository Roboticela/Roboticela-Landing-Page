import { type ProductCategorySlug, getCategoryBySlug } from './productCategories';

export type ProductLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Product = {
  name: string;
  description: string;
  logo: string;
  category: ProductCategorySlug;
  status: 'Available' | 'Coming Soon';
  links: ProductLink[];
};

export function getProductsByCategory(category: ProductCategorySlug): Product[] {
  return products.filter((product) => product.category === category);
}

export function filterProducts(items: Product[], query: string): Product[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return items;

  const terms = normalized.split(/\s+/);
  return items.filter((product) => {
    const categoryName = getCategoryBySlug(product.category)?.name ?? product.category;
    const haystack = [
      product.name,
      product.description,
      product.status,
      categoryName,
      ...product.links.map((link) => link.label),
    ]
      .join(' ')
      .toLowerCase();

    return terms.every((term) => haystack.includes(term));
  });
}

export const products: Product[] = [
  {
    name: 'OSI Model Simulator',
    logo: '/AppLogos/OSI-Model-Simulator-Logo.svg',
    category: 'software',
    description:
      'Master networking concepts with our interactive OSI model simulator. Perfect for students, educators, and professionals.',
    status: 'Available',
    links: [
      { label: 'About OSI Simulator', href: 'https://osi-model-simulator.roboticela.com', external: true },
      { label: 'Try It Now', href: 'https://app.osi-model-simulator.roboticela.com', external: true },
      { label: 'Classic Version', href: 'https://app.osi-model-simulator.roboticela.com/legacy', external: true },
    ],
  },
  {
    name: 'Roboticela Iconify',
    logo: '/AppLogos/Iconify-Logo.svg',
    category: 'software',
    description:
      "Generate perfect icons for every platform in seconds. iOS, Android, web—we've got you covered.",
    status: 'Available',
    links: [
      { label: 'About Iconify', href: 'https://iconify.roboticela.com', external: true },
      { label: 'Start Creating', href: 'https://app.iconify.roboticela.com', external: true },
    ],
  },
];
