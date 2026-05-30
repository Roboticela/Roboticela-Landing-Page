import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ArticleDetail from '../../components/ArticleDetail';
import JsonLd from '../../components/JsonLd';
import { getNewsById, newsItems } from '../../data/news';
import { articleJsonLd, articleRichPinMetadata } from '../../lib/pinterest-rich-pins';

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

  const pageTitle = `${item.title} | Roboticela News`;
  const canonicalPath = `/news/${id}`;

  return {
    title: { absolute: pageTitle },
    description: item.excerpt,
    alternates: { canonical: canonicalPath },
    ...articleRichPinMetadata({
      title: pageTitle,
      description: item.excerpt,
      canonicalPath,
      publishedDate: item.date,
      section: item.category,
      author: item.author,
    }),
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: item.excerpt,
      images: ['/og-image.jpg'],
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
    <>
      <JsonLd data={articleJsonLd(item, `/news/${id}`)} />
      <ArticleDetail
        item={item}
        backHref="/news"
        backLabel="Back to News"
        eyebrow="News"
      />
    </>
  );
}
