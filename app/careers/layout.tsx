import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Roboticela",
  description: "Join a team that's redefining what's possible. Build the future with us.",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
