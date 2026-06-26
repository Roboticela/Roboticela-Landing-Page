import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import SupportPageContent from '../../components/SupportPageContent';
import { getSupportProductLabel, isSupportProductSlug } from '../../data/products';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const productName = getSupportProductLabel(slug);

  if (!productName) {
    return { title: 'Support' };
  }

  const title = `Support for ${productName}`;
  const description = `Get help with ${productName}. Send us your question or issue — we read and respond to every message.`;

  return {
    title,
    description,
    alternates: { canonical: `/support/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://roboticela.com/support/${slug}`,
    },
  };
}

export default async function SupportProductPage({ params }: PageProps) {
  const { slug } = await params;

  if (!isSupportProductSlug(slug)) {
    notFound();
  }

  return <SupportPageContent initialProductSlug={slug} />;
}
