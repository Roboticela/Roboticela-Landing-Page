export type SocialPlatform = {
  id: string;
  name: string;
  handle: string;
  href: string;
  description: string;
  external: boolean;
};

export const socialPlatforms: SocialPlatform[] = [
  {
    id: 'github',
    name: 'GitHub',
    handle: '@Roboticela',
    href: 'https://github.com/Roboticela',
    description: 'Open source, experiments, and code from our team.',
    external: true,
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    handle: '@roboticela',
    href: 'https://twitter.com/roboticela',
    description: 'Quick updates, launches, and conversations in real time.',
    external: true,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'Roboticela',
    href: 'https://linkedin.com/company/roboticela',
    description: 'Company news, culture, and professional updates.',
    external: true,
  },
  {
    id: 'email',
    name: 'Email',
    handle: 'hello@roboticela.com',
    href: 'mailto:hello@roboticela.com',
    description: 'Reach us directly for questions, ideas, or collaboration.',
    external: false,
  },
];
