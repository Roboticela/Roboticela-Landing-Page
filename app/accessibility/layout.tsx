import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility - Roboticela',
  description:
    'Roboticela accessibility statement. Our commitment to inclusive design and WCAG-aligned experiences for everyone.',
};

export default function AccessibilityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
