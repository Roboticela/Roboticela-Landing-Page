import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Vision — What we're building toward.",
  description: "One north star. No category, no ceiling, no compromise. The vision behind every product, lab, and breakthrough at Roboticela.",
  keywords: ["Roboticela", "vision", "mission", "future", "technology", "ambition", "innovation", "philosophy"],
  alternates: { canonical: "/our-vision" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roboticela.com/our-vision",
    siteName: "Roboticela",
    title: "Our Vision — What we're building toward.",
    description: "One north star. No category, no ceiling, no compromise. The vision behind every product, lab, and breakthrough at Roboticela.",
    images: [{ url: "https://roboticela.com/og-image.jpg", width: 1200, height: 630, alt: "Roboticela Vision" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Vision — What we're building toward.",
    description: "One north star. No category, no ceiling, no compromise. The vision behind every product, lab, and breakthrough at Roboticela.",
    images: ["https://roboticela.com/og-image.jpg"],
    creator: "@roboticela",
    site: "@roboticela",
  },
};

export default function OurVisionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
