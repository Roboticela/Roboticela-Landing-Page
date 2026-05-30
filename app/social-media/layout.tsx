import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media - Roboticela',
  description:
    'Connect with Roboticela on GitHub, X, LinkedIn, and email. Follow our journey and stay close to what we build.',
};

export default function SocialMediaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
