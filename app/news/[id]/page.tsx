import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ArticleDetail from '../../components/ArticleDetail';
import { getNewsById, newsItems } from '../../data/news';

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return newsItems.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const item = getNewsById(id);

  if (!item) {
    return { title: 'Roboticela News — Announcements & Updates' };
  }

  return {
    title: { absolute: `${item.title} | Roboticela News` },
    description: item.excerpt,
    alternates: { canonical: `/news/${id}` },
    openGraph: {
      type: 'article',
      url: `https://roboticela.com/news/${id}`,
      title: `${item.title} | Roboticela News`,
      description: item.excerpt,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: item.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${item.title} | Roboticela News`,
      description: item.excerpt,
      images: ['/og-image.png'],
    },
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { id } = await params;
  const item = getNewsById(id);

  if (!item) {
    notFound();
  }

  return (
    <ArticleDetail
      item={item}
      backHref="/news"
      backLabel="Back to News"
      eyebrow="News"
    />
  );
}
