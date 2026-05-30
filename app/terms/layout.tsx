import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roboticela Terms of Service & User Agreement",
  description: "Read Roboticela's Terms of Service and User Agreement. Understand your legal rights and obligations when using our services, products, and platforms.",
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
    title: "Roboticela Terms of Service & User Agreement",
    description: "Read Roboticela's Terms of Service and User Agreement. Understand your legal rights and obligations when using our services, products, and platforms.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roboticela Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roboticela Terms of Service & User Agreement",
    description: "Read Roboticela's Terms of Service and User Agreement. Understand your legal rights and obligations when using our services, products, and platforms.",
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

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

