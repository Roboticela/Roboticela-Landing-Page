import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ArticleDetail from '../../components/ArticleDetail';
import JsonLd from '../../components/JsonLd';
import { blogPosts, getBlogById } from '../../data/blogs';
import { articleJsonLd, articleRichPinMetadata } from '../../lib/pinterest-rich-pins';

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = getBlogById(id);

  if (!post) {
    return { title: 'Roboticela Blog — Stories, Insights & Ideas' };
  }

  const pageTitle = `${post.title} | Roboticela Blog`;
  const canonicalPath = `/blogs/${id}`;

  return {
    title: { absolute: pageTitle },
    description: post.excerpt,
    alternates: { canonical: canonicalPath },
    ...articleRichPinMetadata({
      title: pageTitle,
      description: post.excerpt,
      canonicalPath,
      publishedDate: post.date,
      section: post.category,
      author: post.author,
    }),
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: post.excerpt,
      images: ['/og-image.png'],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = getBlogById(id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd data={articleJsonLd(post, `/blogs/${id}`)} />
      <ArticleDetail
        item={post}
        backHref="/blogs"
        backLabel="Back to Blog"
        eyebrow="Blog"
      />
    </>
  );
}
