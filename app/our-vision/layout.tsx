import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roboticela Vision — Building the Future",
  description: "Discover the vision driving Roboticela—a future where technology, creativity, and human ambition converge to build something genuinely new and unlimited.",
  keywords: ["Roboticela", "vision", "mission", "future", "technology", "ambition", "innovation", "philosophy"],
  alternates: { canonical: "/our-vision" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roboticela.com/our-vision",
    siteName: "Roboticela",
    title: "Roboticela Vision — Building the Future",
    description: "Discover the vision driving Roboticela—a future where technology, creativity, and human ambition converge to build something genuinely new and unlimited.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Roboticela Vision" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roboticela Vision — Building the Future",
    description: "Discover the vision driving Roboticela—a future where technology, creativity, and human ambition converge to build something genuinely new and unlimited.",
    images: ["/og-image.jpg"],
    creator: "@roboticela",
    site: "@roboticela",
  },
};

export default function OurVisionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
