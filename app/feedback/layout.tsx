import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feedback — Tell us the truth.',
  description:
    'Good, bad, or somewhere in between — your experience shapes everything we build next. We read all of it.',
  keywords: ['Roboticela', 'feedback', 'review', 'report issue', 'bug report', 'suggestions', 'user experience'],
  alternates: { canonical: '/feedback' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roboticela.com/feedback',
    siteName: 'Roboticela',
    title: 'Feedback — Tell us the truth.',
    description:
      'Good, bad, or somewhere in between — your experience shapes everything we build next. We read all of it.',
    images: [{ url: 'https://roboticela.com/og-image.jpg', width: 1200, height: 630, alt: 'Roboticela Feedback' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feedback — Tell us the truth.',
    description:
      'Good, bad, or somewhere in between — your experience shapes everything we build next. We read all of it.',
    images: ['https://roboticela.com/og-image.jpg'],
    creator: '@roboticela',
    site: '@roboticela',
  },
};

export default function FeedbackLayout({ children }: { children: React.ReactNode }) {
  return children;
}
