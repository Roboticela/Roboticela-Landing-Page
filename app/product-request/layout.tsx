import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Product - Roboticela",
  description: "Tell us what you need. We're always building something new.",
};

export default function ProductRequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
