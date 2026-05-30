import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Roboticela — Get Help & Support',
  description:
    'Reach the Roboticela support team. Send a message, report an issue, ask a question, or request help for any Roboticela product, service, or platform.',
  keywords: ['Roboticela', 'contact', 'support', 'help', 'customer service', 'report issue', 'get in touch'],
  alternates: { canonical: '/support' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roboticela.com/support',
    siteName: 'Roboticela',
    title: 'Contact Roboticela — Get Help & Support',
    description:
      'Reach the Roboticela support team. Send a message, report an issue, ask a question, or request help for any Roboticela product, service, or platform.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Roboticela' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Roboticela — Get Help & Support',
    description:
      'Reach the Roboticela support team. Send a message, report an issue, ask a question, or request help for any Roboticela product, service, or platform.',
    images: ['/og-image.png'],
    creator: '@roboticela',
    site: '@roboticela',
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
