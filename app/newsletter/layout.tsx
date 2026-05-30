import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roboticela Newsletter — Stay Informed',
  description:
    'Subscribe to the Roboticela newsletter and be the first to know about new products, research breakthroughs, events, and updates straight from our team.',
  keywords: ['Roboticela', 'newsletter', 'subscribe', 'email', 'updates', 'announcements', 'product news'],
  alternates: { canonical: '/newsletter' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roboticela.com/newsletter',
    siteName: 'Roboticela',
    title: 'Roboticela Newsletter — Stay Informed',
    description:
      'Subscribe to the Roboticela newsletter and be the first to know about new products, research breakthroughs, events, and updates straight from our team.',
    images: [{ url: 'https://roboticela.com/og-image.jpg', width: 1200, height: 630, alt: 'Roboticela Newsletter' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roboticela Newsletter — Stay Informed',
    description:
      'Subscribe to the Roboticela newsletter and be the first to know about new products, research breakthroughs, events, and updates straight from our team.',
    images: ['https://roboticela.com/og-image.jpg'],
    creator: '@roboticela',
    site: '@roboticela',
  },
};

export default function NewsletterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
