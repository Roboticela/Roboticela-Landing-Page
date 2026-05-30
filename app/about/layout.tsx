import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Roboticela — Our Story, Mission & Values",
  description: "Roboticela is a company with no category and no limits. Discover our story, mission, values, and the bold vision behind a team that builds across every domain.",
  keywords: ["Roboticela", "about", "mission", "vision", "story", "company", "innovation", "technology"],
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roboticela.com/about",
    siteName: "Roboticela",
    title: "About Roboticela — Our Story, Mission & Values",
    description: "Roboticela is a company with no category and no limits. Discover our story, mission, values, and the bold vision behind a team that builds across every domain.",
    images: [{ url: "https://roboticela.com/og-image.jpg", width: 1200, height: 630, alt: "About Roboticela" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Roboticela — Our Story, Mission & Values",
    description: "Roboticela is a company with no category and no limits. Discover our story, mission, values, and the bold vision behind a team that builds across every domain.",
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
