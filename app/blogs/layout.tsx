import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Roboticela',
  description:
    'Stories, insights, and perspectives from the Roboticela team. Innovation without boundaries.',
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
