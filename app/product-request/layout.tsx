import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Product — Shape Roboticela's Roadmap",
  description: "Tell Roboticela what to build next. Submit a product request, describe your use case, and directly influence the roadmap for the tools and software we create.",
  keywords: ["Roboticela", "product request", "feature request", "roadmap", "build", "suggest", "ideas", "wishlist"],
  alternates: { canonical: "/product-request" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roboticela.com/product-request",
    siteName: "Roboticela",
    title: "Request a Product — Shape Roboticela's Roadmap",
    description: "Tell Roboticela what to build next. Submit a product request, describe your use case, and directly influence the roadmap for the tools and software we create.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Roboticela Product Request" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Product — Shape Roboticela's Roadmap",
    description: "Tell Roboticela what to build next. Submit a product request, describe your use case, and directly influence the roadmap for the tools and software we create.",
    images: ["/og-image.jpg"],
    creator: "@roboticela",
    site: "@roboticela",
  },
};

export default function ProductRequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
