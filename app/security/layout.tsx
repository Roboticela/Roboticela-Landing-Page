import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security - Roboticela',
  description:
    'Roboticela security overview. How we protect your data with encryption, secure practices, and responsible handling.',
};

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
