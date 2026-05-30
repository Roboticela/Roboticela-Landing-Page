import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Newsletter - Roboticela',
  description:
    'Join the Roboticela newsletter. Be first to know about new products, breakthroughs, and updates from our team.',
};

export default function NewsletterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
