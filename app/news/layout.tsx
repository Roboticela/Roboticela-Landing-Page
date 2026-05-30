import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News - Roboticela',
  description:
    'Latest updates, announcements, and news from Roboticela. Innovation without boundaries.',
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
