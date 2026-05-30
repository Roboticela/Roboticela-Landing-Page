import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roboticela Security — Data Protection Practices',
  description:
    'Learn how Roboticela protects your data. We cover encryption, access control, secure development, and responsible data handling across all our platforms.',
  keywords: ['Roboticela', 'security', 'data protection', 'encryption', 'privacy', 'GDPR', 'compliance', 'secure'],
  alternates: { canonical: '/security' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roboticela.com/security',
    siteName: 'Roboticela',
    title: 'Roboticela Security — Data Protection Practices',
    description:
      'Learn how Roboticela protects your data. We cover encryption, access control, secure development, and responsible data handling across all our platforms.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Roboticela Security' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roboticela Security — Data Protection Practices',
    description:
      'Learn how Roboticela protects your data. We cover encryption, access control, secure development, and responsible data handling across all our platforms.',
    images: ['/og-image.png'],
    creator: '@roboticela',
    site: '@roboticela',
  },
};

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
