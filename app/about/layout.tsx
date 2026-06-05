import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — A company with no category.",
  description: "Who we are, why we exist, and the single belief that drives everything we build. No industry owns us. No ceiling holds us.",
  keywords: ["Roboticela", "about", "mission", "vision", "story", "company", "innovation", "technology"],
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roboticela.com/about",
    siteName: "Roboticela",
    title: "About — A company with no category.",
    description: "Who we are, why we exist, and the single belief that drives everything we build. No industry owns us. No ceiling holds us.",
    images: [{ url: "https://roboticela.com/og-image.jpg", width: 1200, height: 630, alt: "About Roboticela" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — A company with no category.",
    description: "Who we are, why we exist, and the single belief that drives everything we build. No industry owns us. No ceiling holds us.",
    images: ["https://roboticela.com/og-image.jpg"],
    creator: "@roboticela",
    site: "@roboticela",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
