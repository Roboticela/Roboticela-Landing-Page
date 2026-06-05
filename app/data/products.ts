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
      'Networking, finally clear. Seven layers. One tool. The kind of clarity that makes you wonder why it was ever complicated. For students, educators, and the professionals who never stopped being curious.',
    status: 'Available',
    links: [
      { label: 'Learn about OSI Simulator', href: 'https://osi-model-simulator.roboticela.com', external: true },
      { label: 'Try it now', href: 'https://app.osi-model-simulator.roboticela.com', external: true },
      { label: 'Classic version', href: 'https://app.osi-model-simulator.roboticela.com/legacy', external: true },
    ],
  },
  {
    name: 'Roboticela Iconify',
    logo: '/AppLogos/Iconify-Logo.svg',
    category: 'software',
    description:
      'The right icon, instantly. Every platform. Every size. Generated in seconds, looking like it took hours. Your app deserves a face that feels deliberate.',
    status: 'Available',
    links: [
      { label: 'Learn about Iconify', href: 'https://iconify.roboticela.com', external: true },
      { label: 'Start creating', href: 'https://app.iconify.roboticela.com', external: true },
    ],
  },
];
