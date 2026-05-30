import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community - Roboticela',
  description:
    'The Roboticela community forum is coming soon. Connect, share ideas, and build together.',
};

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
