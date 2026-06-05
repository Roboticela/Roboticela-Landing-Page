import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community — Something is being built here.',
  description:
    'The Roboticela community forum is coming. A place for builders worldwide to meet, collaborate, and create together.',
  keywords: ['Roboticela', 'community', 'forum', 'builders', 'collaboration', 'network', 'developers', 'innovators'],
  alternates: { canonical: '/community' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roboticela.com/community',
    siteName: 'Roboticela',
    title: 'Community — Something is being built here.',
    description:
      'The Roboticela community forum is coming. A place for builders worldwide to meet, collaborate, and create together.',
    images: [{ url: 'https://roboticela.com/og-image.jpg', width: 1200, height: 630, alt: 'Roboticela Community' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community — Something is being built here.',
    description:
      'The Roboticela community forum is coming. A place for builders worldwide to meet, collaborate, and create together.',
    images: ['https://roboticela.com/og-image.jpg'],
    creator: '@roboticela',
    site: '@roboticela',
  },
};

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
