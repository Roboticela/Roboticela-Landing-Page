import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roboticela Privacy Policy & Data Protection",
  description: "Read Roboticela's Privacy Policy and data protection practices. Learn how we collect, use, store, and protect your personal information across all our services.",
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
    title: "Roboticela Privacy Policy & Data Protection",
    description: "Read Roboticela's Privacy Policy and data protection practices. Learn how we collect, use, store, and protect your personal information across all our services.",
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
    title: "Roboticela Privacy Policy & Data Protection",
    description: "Read Roboticela's Privacy Policy and data protection practices. Learn how we collect, use, store, and protect your personal information across all our services.",
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

