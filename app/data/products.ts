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
  supportSlug?: string;
};

export const SUPPORT_OTHER_SLUG = 'other';

export function getSupportProductOptions() {
  return [
    ...products
      .filter((product) => product.status === 'Available' && product.supportSlug)
      .map((product) => ({
        value: product.supportSlug!,
        label: product.name,
        icon: product.logo,
      })),
    { value: SUPPORT_OTHER_SLUG, label: 'Other' },
  ];
}

export function isSupportProductSlug(slug: string): boolean {
  if (slug === SUPPORT_OTHER_SLUG) return true;
  return products.some((product) => product.supportSlug === slug);
}

export function getSupportProductLabel(slug: string): string | undefined {
  if (slug === SUPPORT_OTHER_SLUG) return 'Other';
  return products.find((product) => product.supportSlug === slug)?.name;
}

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
    supportSlug: 'osi-model-simulator',
    description:
      'Networking, finally clear. Seven layers. One tool. The kind of clarity that makes you wonder why it was ever complicated. For students, educators, and the professionals who never stopped being curious.',
    status: 'Available',
    links: [
      { label: 'Learn about OSI Simulator', href: 'https://osi-model-simulator.roboticela.com', external: true },
      { label: 'Try it now', href: 'https://app.osi-model-simulator.roboticela.com', external: true },
      { label: 'Classic version', href: 'https://app.osi-model-simulator.roboticela.com/legacy', external: true },
      { label: 'Download', href: 'https://osi-model-simulator.roboticela.com/#downloads', external: true },
    ],
  },
  {
    name: 'Roboticela Iconify',
    logo: '/AppLogos/Iconify-Logo.svg',
    category: 'software',
    supportSlug: 'iconify',
    description:
      'The right icon, instantly. Every platform. Every size. Generated in seconds, looking like it took hours. Your app deserves a face that feels deliberate.',
    status: 'Available',
    links: [
      { label: 'Learn about Iconify', href: 'https://iconify.roboticela.com', external: true },
      { label: 'Start creating', href: 'https://app.iconify.roboticela.com', external: true },
      { label: 'Download', href: 'https://iconify.roboticela.com/#downloads', external: true },
    ],
  },
  {
    name: 'Keyboard Simulator',
    logo: '/AppLogos/Keyboard-Simulator.svg',
    category: 'software',
    supportSlug: 'keyboard-simulator',
    description:
      'Keyboard Simulator is a powerful cross-platform keyboard simulation platform that brings virtual keyboards to life with realistic interactions, real-time synchronization, immersive visualization, and advanced customization for learning, demonstrations, and beyond.',
    status: 'Available',
    links: [
      { label: 'Learn about Keyboard Simulator', href: 'https://keyboard-simulator.roboticela.com', external: true },
      { label: 'Open Simulator', href: 'https://app.keyboard-simulator.roboticela.com', external: true },
      { label: 'Download', href: 'https://keyboard-simulator.roboticela.com/#downloads', external: true },
    ],
  },
];
