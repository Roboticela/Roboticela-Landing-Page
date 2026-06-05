import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy — Your data, and how we handle it.",
  description: "What we collect, why we use it, and how we protect it. Written to be read, not just accepted.",
  keywords: [
    "Roboticela",
    "Privacy Policy",
    "Data Processing",
    "Privacy",
    "Data Protection",
    "Personal Information",
    "GDPR",
    "Data Privacy",
  ],
  authors: [{ name: "Roboticela" }],
  creator: "Roboticela",
  publisher: "Roboticela",
  metadataBase: new URL("https://roboticela.com"),
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roboticela.com/privacy",
    siteName: "Roboticela",
    title: "Privacy — Your data, and how we handle it.",
    description: "What we collect, why we use it, and how we protect it. Written to be read, not just accepted.",
    images: [
      {
        url: "https://roboticela.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Roboticela Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy — Your data, and how we handle it.",
    description: "What we collect, why we use it, and how we protect it. Written to be read, not just accepted.",
    images: ["https://roboticela.com/og-image.jpg"],
    creator: "@roboticela",
    site: "@roboticela",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

