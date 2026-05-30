import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roboticela Community — Connect & Collaborate',
  description:
    'Join the Roboticela community. Connect with builders, share ideas, collaborate on projects, and be part of a global network redefining what technology can do.',
  keywords: ['Roboticela', 'community', 'forum', 'builders', 'collaboration', 'network', 'developers', 'innovators'],
  alternates: { canonical: '/community' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roboticela.com/community',
    siteName: 'Roboticela',
    title: 'Roboticela Community — Connect & Collaborate',
    description:
      'Join the Roboticela community. Connect with builders, share ideas, collaborate on projects, and be part of a global network redefining what technology can do.',
    images: [{ url: 'https://roboticela.com/og-image.jpg', width: 1200, height: 630, alt: 'Roboticela Community' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roboticela Community — Connect & Collaborate',
    description:
      'Join the Roboticela community. Connect with builders, share ideas, collaborate on projects, and be part of a global network redefining what technology can do.',
    images: ['https://roboticela.com/og-image.jpg'],
    creator: '@roboticela',
    site: '@roboticela',
  },
};

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
