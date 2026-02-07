import type { Metadata } from "next";
import "./globals.css";
import Clarity from "./components/Clarity";

export const metadata: Metadata = {
  title: {
    default: "Roboticela - Think Different. Build Everything.",
    template: "%s - Roboticela",
  },
  icons: {
    icon: "/Favicon.png",
  },
  description: "The future doesn't fit in boxes. Neither do we. Innovation without boundaries—software, hardware, research, and experiences that matter.",
  keywords: [
    "Roboticela",
    "innovation",
    "technology",
    "software",
    "hardware",
    "research",
    "unlimited potential",
    "future technology",
    "design excellence",
    "breakthrough solutions",
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
    title: "Roboticela - Think Different. Build Everything.",
    description: "The future doesn't fit in boxes. Neither do we. Innovation without boundaries—software, hardware, research, and experiences that matter.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roboticela",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roboticela - Think Different. Build Everything.",
    description: "The future doesn't fit in boxes. Neither do we. Innovation without boundaries.",
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
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className="antialiased">
        <Clarity />
        {children}
      </body>
    </html>
  );
}
