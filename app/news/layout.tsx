import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News — What\'s happening at Roboticela.',
  description:
    'Product launches, company milestones, and things worth knowing. Everything from Roboticela, as it happens.',
  keywords: ['Roboticela', 'news', 'announcements', 'updates', 'press releases', 'milestones', 'product launches'],
  alternates: { canonical: '/news' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roboticela.com/news',
    siteName: 'Roboticela',
    title: 'News — What\'s happening at Roboticela.',
    description:
      'Product launches, company milestones, and things worth knowing. Everything from Roboticela, as it happens.',
    images: [{ url: 'https://roboticela.com/og-image.jpg', width: 1200, height: 630, alt: 'Roboticela News' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News — What\'s happening at Roboticela.',
    description:
      'Product launches, company milestones, and things worth knowing. Everything from Roboticela, as it happens.',
    images: ['https://roboticela.com/og-image.jpg'],
    creator: '@roboticela',
    site: '@roboticela',
  },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
