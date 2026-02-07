import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Roboticela",
  description: "Explore our complete product catalog. Software, hardware, and experiences designed without boundaries.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
