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
    description: 'Open source, experiments, and code you can actually read. Watch us build in public.',
    external: true,
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    handle: '@roboticela',
    href: 'https://twitter.com/roboticela',
    description: 'Real-time updates, quiet launches, and things too small for a blog.',
    external: true,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'Roboticela',
    href: 'https://linkedin.com/company/roboticela',
    description: 'Company milestones and the professional side of our story.',
    external: true,
  },
  {
    id: 'email',
    name: 'Email',
    handle: 'hello@roboticela.com',
    href: 'mailto:hello@roboticela.com',
    description: 'Direct. Simple. We read it.',
    external: false,
  },
];
