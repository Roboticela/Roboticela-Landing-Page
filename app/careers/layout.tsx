import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Roboticela — Join the Future",
  description: "Join Roboticela and work on problems that matter. We're building across software, hardware, and research. Explore open roles and find your place in the future.",
  keywords: ["Roboticela", "careers", "jobs", "hiring", "software engineer", "hardware", "research", "innovation"],
  alternates: { canonical: "/careers" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roboticela.com/careers",
    siteName: "Roboticela",
    title: "Careers at Roboticela — Join the Future",
    description: "Join Roboticela and work on problems that matter. We're building across software, hardware, and research. Explore open roles and find your place in the future.",
    images: [{ url: "https://roboticela.com/og-image.jpg", width: 1200, height: 630, alt: "Careers at Roboticela" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Roboticela — Join the Future",
    description: "Join Roboticela and work on problems that matter. We're building across software, hardware, and research. Explore open roles and find your place in the future.",
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
