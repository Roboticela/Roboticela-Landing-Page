import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Follow Roboticela — GitHub, X & LinkedIn',
  description:
    'Follow Roboticela on GitHub, X, and LinkedIn. Stay connected, track our builds, discover early releases, and join the conversation around what we create.',
  keywords: ['Roboticela', 'social media', 'GitHub', 'X', 'Twitter', 'LinkedIn', 'follow', 'community'],
  alternates: { canonical: '/social-media' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roboticela.com/social-media',
    siteName: 'Roboticela',
    title: 'Follow Roboticela — GitHub, X & LinkedIn',
    description:
      'Follow Roboticela on GitHub, X, and LinkedIn. Stay connected, track our builds, discover early releases, and join the conversation around what we create.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Follow Roboticela on Social Media' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Follow Roboticela — GitHub, X & LinkedIn',
    description:
      'Follow Roboticela on GitHub, X, and LinkedIn. Stay connected, track our builds, discover early releases, and join the conversation around what we create.',
    images: ['/og-image.png'],
    creator: '@roboticela',
    site: '@roboticela',
  },
};

export default function SocialMediaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
