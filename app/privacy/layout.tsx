import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Roboticela's Privacy Policy and Terms of Data Processing. Learn how we collect, use, and protect your personal information when you use our services.",
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
    title: "Privacy Policy - Roboticela",
    description: "Read Roboticela's Privacy Policy and Terms of Data Processing. Learn how we collect, use, and protect your personal information.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roboticela Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Roboticela",
    description: "Read Roboticela's Privacy Policy and Terms of Data Processing. Learn how we collect, use, and protect your personal information.",
    images: ["/og-image.png"],
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

