import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Support — We're here. Talk to us.",
  description:
    "A question, a problem, an idea. Whatever it is, send it our way. We read everything. We respond to everything.",
  keywords: ['Roboticela', 'contact', 'support', 'help', 'customer service', 'report issue', 'get in touch'],
  alternates: { canonical: '/support' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roboticela.com/support',
    siteName: 'Roboticela',
    title: "Support — We're here. Talk to us.",
    description:
      "A question, a problem, an idea. Whatever it is, send it our way. We read everything. We respond to everything.",
    images: [{ url: 'https://roboticela.com/og-image.jpg', width: 1200, height: 630, alt: 'Contact Roboticela' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Support — We're here. Talk to us.",
    description:
      "A question, a problem, an idea. Whatever it is, send it our way. We read everything. We respond to everything.",
    images: ['https://roboticela.com/og-image.jpg'],
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
