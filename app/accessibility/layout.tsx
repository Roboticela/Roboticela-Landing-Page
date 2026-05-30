import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roboticela Accessibility Statement & WCAG',
  description:
    'Roboticela is committed to inclusive design. Read our accessibility statement covering WCAG standards, assistive technology support, and ongoing improvements.',
  keywords: ['Roboticela', 'accessibility', 'WCAG', 'inclusive design', 'screen reader', 'a11y', 'disability', 'ADA'],
  alternates: { canonical: '/accessibility' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roboticela.com/accessibility',
    siteName: 'Roboticela',
    title: 'Roboticela Accessibility Statement & WCAG',
    description:
      'Roboticela is committed to inclusive design. Read our accessibility statement covering WCAG standards, assistive technology support, and ongoing improvements.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Roboticela Accessibility' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roboticela Accessibility Statement & WCAG',
    description:
      'Roboticela is committed to inclusive design. Read our accessibility statement covering WCAG standards, assistive technology support, and ongoing improvements.',
    images: ['/og-image.png'],
    creator: '@roboticela',
    site: '@roboticela',
  },
};

export default function AccessibilityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
