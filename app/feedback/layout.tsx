import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feedback - Roboticela',
  description:
    'Share your feedback with Roboticela. Rate your experience, ask questions, report issues, and help us improve.',
};

export default function FeedbackLayout({ children }: { children: React.ReactNode }) {
  return children;
}
