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
    default: "Roboticela — Where every idea begins.",
    template: "%s — Roboticela",
  },
  icons: {
    icon: "/Favicon.png",
  },
  description: "Software, hardware, research, and experiences that quietly reshape what's possible. Built without boundaries. Designed without compromise.",
  keywords: [
    "Roboticela",
    "innovation",
    "technology",
    "software",
    "hardware",
    "research",
    "future technology",
    "design excellence",
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
    title: "Roboticela — Where every idea begins.",
    description: "Software, hardware, research, and experiences that quietly reshape what's possible. Built without boundaries. Designed without compromise.",
    images: [
      {
        url: "https://roboticela.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Roboticela",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roboticela — Where every idea begins.",
    description: "Software, hardware, research, and experiences that quietly reshape what's possible. Built without boundaries. Designed without compromise.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" data-scroll-behavior="smooth" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
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
