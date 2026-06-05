import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social — Find us where you already are.',
  description:
    'GitHub, X, LinkedIn. Follow Roboticela where you spend your time — code, conversation, and community.',
  keywords: ['Roboticela', 'social media', 'GitHub', 'X', 'Twitter', 'LinkedIn', 'follow', 'community'],
  alternates: { canonical: '/social-media' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roboticela.com/social-media',
    siteName: 'Roboticela',
    title: 'Social — Find us where you already are.',
    description:
      'GitHub, X, LinkedIn. Follow Roboticela where you spend your time — code, conversation, and community.',
    images: [{ url: 'https://roboticela.com/og-image.jpg', width: 1200, height: 630, alt: 'Follow Roboticela on Social Media' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social — Find us where you already are.',
    description:
      'GitHub, X, LinkedIn. Follow Roboticela where you spend your time — code, conversation, and community.',
    images: ['https://roboticela.com/og-image.jpg'],
    creator: '@roboticela',
    site: '@roboticela',
  },
};

export default function SocialMediaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
