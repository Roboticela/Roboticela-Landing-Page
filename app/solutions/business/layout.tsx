import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Business - Roboticela",
  description: "Enterprise-grade solutions to scale your business operations.",
};

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
