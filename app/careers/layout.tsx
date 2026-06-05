import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Come build something that lasts.",
  description: "We're looking for people who can't stop thinking. Builders, thinkers, and quiet obsessives who want to work on things that matter.",
  keywords: ["Roboticela", "careers", "jobs", "hiring", "software engineer", "hardware", "research", "innovation"],
  alternates: { canonical: "/careers" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roboticela.com/careers",
    siteName: "Roboticela",
    title: "Careers — Come build something that lasts.",
    description: "We're looking for people who can't stop thinking. Builders, thinkers, and quiet obsessives who want to work on things that matter.",
    images: [{ url: "https://roboticela.com/og-image.jpg", width: 1200, height: 630, alt: "Careers at Roboticela" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers — Come build something that lasts.",
    description: "We're looking for people who can't stop thinking. Builders, thinkers, and quiet obsessives who want to work on things that matter.",
    images: ["https://roboticela.com/og-image.jpg"],
    creator: "@roboticela",
    site: "@roboticela",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
