import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Roboticela',
  description: 'Contact Roboticela. Send us a message and we\'ll get back to you.',
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
