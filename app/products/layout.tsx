import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — Everything we've built so far.",
  description: "Tools, platforms, and experiences built without compromise. Browse the Roboticela catalog and find what changes things for you.",
  keywords: ["Roboticela", "products", "software", "hardware", "catalog", "tools", "technology", "apps"],
  alternates: { canonical: "/products" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roboticela.com/products",
    siteName: "Roboticela",
    title: "Products — Everything we've built so far.",
    description: "Tools, platforms, and experiences built without compromise. Browse the Roboticela catalog and find what changes things for you.",
    images: [{ url: "https://roboticela.com/og-image.jpg", width: 1200, height: 630, type: "image/jpeg", alt: "Roboticela Products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products — Everything we've built so far.",
    description: "Tools, platforms, and experiences built without compromise. Browse the Roboticela catalog and find what changes things for you.",
    images: ["https://roboticela.com/og-image.jpg"],
    creator: "@roboticela",
    site: "@roboticela",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
