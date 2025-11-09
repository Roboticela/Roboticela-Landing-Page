import type { Metadata } from "next";
import "./globals.css";
import Clarity from "./components/Clarity";

export const metadata: Metadata = {
  title: {
    default: "Roboticela - Coming Soon",
    template: "%s - Roboticela",
  },
  icons: {
    icon: "/Favicon.png",
  },
  description: "Roboticela is a technology-driven company building smart, scalable, and meaningful software solutions. Join our waitlist to be the first to experience what's next.",
  keywords: [
    "Roboticela",
    "software development",
    "business solutions",
    "technology",
    "innovation",
    "digital transformation",
    "custom software",
    "scalable platforms",
    "open source",
    "tech solutions",
  ],
  authors: [{ name: "Roboticela" }],
  creator: "Roboticela",
  publisher: "Roboticela",
  metadataBase: new URL("https://roboticela.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roboticela.com",
    siteName: "Roboticela",
    title: "Roboticela - Coming Soon",
    description: "Roboticela is building something amazing. Join our waitlist to be the first to know when we launch.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roboticela - Coming Soon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roboticela - Coming Soon",
    description: "Roboticela is building something amazing. Join our waitlist to be the first to know when we launch.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Clarity />
        {children}
      </body>
    </html>
  );
}
