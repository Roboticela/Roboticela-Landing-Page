export type ProductLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Product = {
  name: string;
  description: string;
  logo: string;
  status: 'Available' | 'Coming Soon';
  links: ProductLink[];
};

export const products: Product[] = [
  {
    name: 'OSI Model Simulator',
    logo: '/AppLogos/OSI-Model-Simulator-Logo.svg',
    description:
      'Master networking concepts with our interactive OSI model simulator. Perfect for students, educators, and professionals.',
    status: 'Available',
    links: [
      { label: 'Learn More', href: 'https://osi-simulator.roboticela.com', external: true },
      { label: 'Try It Now', href: 'https://app.osi-simulator.roboticela.com', external: true },
      { label: 'Classic Version', href: 'https://app.osi-classic.roboticela.com/legacy', external: true },
    ],
  },
  {
    name: 'Roboticela Iconify',
    logo: '/AppLogos/Iconify-Logo.svg',
    description:
      "Generate perfect icons for every platform in seconds. iOS, Android, web—we've got you covered.",
    status: 'Available',
    links: [
      { label: 'Learn More', href: 'https://iconify.roboticela.com', external: true },
      { label: 'Start Creating', href: 'https://app.iconify.roboticela.com', external: true },
    ],
  },
];
