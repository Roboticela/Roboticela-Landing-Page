import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Roboticela",
  description: "Learn about our vision, mission, and the team building the future without boundaries.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
