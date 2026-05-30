import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roboticela Blog — Stories, Insights & Ideas',
  description:
    'Explore the Roboticela blog for stories, insights, technical deep-dives, and perspectives from our team. Thoughtful content about building the future.',
  keywords: ['Roboticela', 'blog', 'stories', 'insights', 'technology', 'innovation', 'engineering', 'ideas'],
  alternates: { canonical: '/blogs' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roboticela.com/blogs',
    siteName: 'Roboticela',
    title: 'Roboticela Blog — Stories, Insights & Ideas',
    description:
      'Explore the Roboticela blog for stories, insights, technical deep-dives, and perspectives from our team. Thoughtful content about building the future.',
    images: [{ url: 'https://roboticela.com/og-image.jpg', width: 1200, height: 630, alt: 'Roboticela Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roboticela Blog — Stories, Insights & Ideas',
    description:
      'Explore the Roboticela blog for stories, insights, technical deep-dives, and perspectives from our team. Thoughtful content about building the future.',
    images: ['https://roboticela.com/og-image.jpg'],
    creator: '@roboticela',
    site: '@roboticela',
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
