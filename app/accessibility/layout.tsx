import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility — Built for every person.',
  description:
    'Technology that works for every ability, every context, every human being. Our commitment to inclusive design.',
  keywords: ['Roboticela', 'accessibility', 'WCAG', 'inclusive design', 'screen reader', 'a11y', 'disability', 'ADA'],
  alternates: { canonical: '/accessibility' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roboticela.com/accessibility',
    siteName: 'Roboticela',
    title: 'Accessibility — Built for every person.',
    description:
      'Technology that works for every ability, every context, every human being. Our commitment to inclusive design.',
    images: [{ url: 'https://roboticela.com/og-image.jpg', width: 1200, height: 630, alt: 'Roboticela Accessibility' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accessibility — Built for every person.',
    description:
      'Technology that works for every ability, every context, every human being. Our commitment to inclusive design.',
    images: ['https://roboticela.com/og-image.jpg'],
    creator: '@roboticela',
    site: '@roboticela',
  },
};

export default function AccessibilityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
