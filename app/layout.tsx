import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import JsonLd from "./components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "./lib/pinterest-rich-pins";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Roboticela - Think Different. Build Everything.",
    template: "%s - Roboticela",
  },
  icons: {
    icon: "/Favicon.png",
  },
  description: "The future doesn't fit in boxes. Neither do we. Roboticela builds without limits—software, hardware, research, and experiences that push what's possible.",
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
    description: "The future doesn't fit in boxes. Neither do we. Roboticela builds without limits—software, hardware, research, and experiences that push what's possible.",
    images: [
      {
        url: "/og-image.png",
        width: 1376,
        height: 768,
        alt: "Roboticela",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roboticela - Think Different. Build Everything.",
    description: "The future doesn't fit in boxes. Neither do we. Roboticela builds without limits—software, hardware, research, and experiences that push what's possible.",
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
    <html lang="en" data-theme="dark" data-scroll-behavior="smooth" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8NELPL2FXP"
          strategy="lazyOnload"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-8NELPL2FXP');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        {children}
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "viwp403njf");
            `,
          }}
        />
      </body>
    </html>
  );
}
