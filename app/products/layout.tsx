import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roboticela Products — Explore the Full Catalog",
  description: "Browse the Roboticela product catalog—software, hardware, and experiences built without limits. Tools for individuals, businesses, educators, and developers.",
  keywords: ["Roboticela", "products", "software", "hardware", "catalog", "tools", "technology", "apps"],
  alternates: { canonical: "/products" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roboticela.com/products",
    siteName: "Roboticela",
    title: "Roboticela Products — Explore the Full Catalog",
    description: "Browse the Roboticela product catalog—software, hardware, and experiences built without limits. Tools for individuals, businesses, educators, and developers.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Roboticela Products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roboticela Products — Explore the Full Catalog",
    description: "Browse the Roboticela product catalog—software, hardware, and experiences built without limits. Tools for individuals, businesses, educators, and developers.",
    images: ["/og-image.jpg"],
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
