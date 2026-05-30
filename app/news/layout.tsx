import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roboticela News — Announcements & Updates',
  description:
    'Stay updated with the latest Roboticela news, product announcements, and company milestones. Track every breakthrough, launch, and release from our team.',
  keywords: ['Roboticela', 'news', 'announcements', 'updates', 'press releases', 'milestones', 'product launches'],
  alternates: { canonical: '/news' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roboticela.com/news',
    siteName: 'Roboticela',
    title: 'Roboticela News — Announcements & Updates',
    description:
      'Stay updated with the latest Roboticela news, product announcements, and company milestones. Track every breakthrough, launch, and release from our team.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Roboticela News' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roboticela News — Announcements & Updates',
    description:
      'Stay updated with the latest Roboticela news, product announcements, and company milestones. Track every breakthrough, launch, and release from our team.',
    images: ['/og-image.png'],
    creator: '@roboticela',
    site: '@roboticela',
  },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
