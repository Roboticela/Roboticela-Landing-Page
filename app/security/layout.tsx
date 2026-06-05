import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security — Built into everything we make.',
  description:
    'Encryption, access control, and a team that takes your safety seriously. Here\'s how we protect you.',
  keywords: ['Roboticela', 'security', 'data protection', 'encryption', 'privacy', 'GDPR', 'compliance', 'secure'],
  alternates: { canonical: '/security' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roboticela.com/security',
    siteName: 'Roboticela',
    title: 'Security — Built into everything we make.',
    description:
      "Encryption, access control, and a team that takes your safety seriously. Here's how we protect you.",
    images: [{ url: 'https://roboticela.com/og-image.jpg', width: 1200, height: 630, alt: 'Roboticela Security' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security — Built into everything we make.',
    description:
      "Encryption, access control, and a team that takes your safety seriously. Here's how we protect you.",
    images: ['https://roboticela.com/og-image.jpg'],
    creator: '@roboticela',
    site: '@roboticela',
  },
};

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
