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
    return { title: 'News - Roboticela' };
  }

  return {
    title: `${item.title} - Roboticela News`,
    description: item.excerpt,
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
