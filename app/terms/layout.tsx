import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms — What you should know.",
  description: "The terms that govern your use of Roboticela services. Written clearly, designed to protect you.",
  keywords: [
    "Roboticela",
    "Terms of Service",
    "User Agreement",
    "Terms and Conditions",
    "Legal",
    "Service Agreement",
    "User Terms",
  ],
  authors: [{ name: "Roboticela" }],
  creator: "Roboticela",
  publisher: "Roboticela",
  metadataBase: new URL("https://roboticela.com"),
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roboticela.com/terms",
    siteName: "Roboticela",
    title: "Terms — What you should know.",
    description: "The terms that govern your use of Roboticela services. Written clearly, designed to protect you.",
    images: [
      {
        url: "https://roboticela.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Roboticela Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms — What you should know.",
    description: "The terms that govern your use of Roboticela services. Written clearly, designed to protect you.",
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

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

