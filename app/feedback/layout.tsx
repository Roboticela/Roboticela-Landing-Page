import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Submit Feedback — Help Improve Roboticela',
  description:
    'Share your feedback directly with Roboticela. Rate your experience, report bugs, ask questions, and help us improve every product and service we build.',
  keywords: ['Roboticela', 'feedback', 'review', 'report issue', 'bug report', 'suggestions', 'user experience'],
  alternates: { canonical: '/feedback' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roboticela.com/feedback',
    siteName: 'Roboticela',
    title: 'Submit Feedback — Help Improve Roboticela',
    description:
      'Share your feedback directly with Roboticela. Rate your experience, report bugs, ask questions, and help us improve every product and service we build.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Roboticela Feedback' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Submit Feedback — Help Improve Roboticela',
    description:
      'Share your feedback directly with Roboticela. Rate your experience, report bugs, ask questions, and help us improve every product and service we build.',
    images: ['/og-image.jpg'],
    creator: '@roboticela',
    site: '@roboticela',
  },
};

export default function FeedbackLayout({ children }: { children: React.ReactNode }) {
  return children;
}
