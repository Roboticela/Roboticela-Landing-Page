import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Request — Tell us what to build next.",
  description: "Your request shapes what Roboticela creates. Submit it here and directly influence the roadmap.",
  keywords: ["Roboticela", "product request", "feature request", "roadmap", "build", "suggest", "ideas", "wishlist"],
  alternates: { canonical: "/product-request" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roboticela.com/product-request",
    siteName: "Roboticela",
    title: "Product Request — Tell us what to build next.",
    description: "Your request shapes what Roboticela creates. Submit it here and directly influence the roadmap.",
    images: [{ url: "https://roboticela.com/og-image.jpg", width: 1200, height: 630, alt: "Roboticela Product Request" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Request — Tell us what to build next.",
    description: "Your request shapes what Roboticela creates. Submit it here and directly influence the roadmap.",
    images: ["https://roboticela.com/og-image.jpg"],
    creator: "@roboticela",
    site: "@roboticela",
  },
};

export default function ProductRequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
