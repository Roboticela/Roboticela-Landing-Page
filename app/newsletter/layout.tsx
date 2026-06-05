import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Newsletter — Join the Empire.',
  description:
    "New products, quiet breakthroughs, and things worth knowing — delivered when there's something worth saying. No noise. Just the good stuff.",
  keywords: ['Roboticela', 'newsletter', 'subscribe', 'email', 'updates', 'announcements', 'product news'],
  alternates: { canonical: '/newsletter' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roboticela.com/newsletter',
    siteName: 'Roboticela',
    title: 'Newsletter — Join the Empire.',
    description:
      "New products, quiet breakthroughs, and things worth knowing — delivered when there's something worth saying. No noise. Just the good stuff.",
    images: [{ url: 'https://roboticela.com/og-image.jpg', width: 1200, height: 630, alt: 'Roboticela Newsletter' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Newsletter — Join the Empire.',
    description:
      "New products, quiet breakthroughs, and things worth knowing — delivered when there's something worth saying. No noise. Just the good stuff.",
    images: ['https://roboticela.com/og-image.jpg'],
    creator: '@roboticela',
    site: '@roboticela',
  },
};

export default function NewsletterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
