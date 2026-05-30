import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ArticleDetail from '../../components/ArticleDetail';
import { blogPosts, getBlogById } from '../../data/blogs';

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

  return {
    title: { absolute: `${post.title} | Roboticela Blog` },
    description: post.excerpt,
    alternates: { canonical: `/blogs/${id}` },
    openGraph: {
      type: 'article',
      url: `https://roboticela.com/blogs/${id}`,
      title: `${post.title} | Roboticela Blog`,
      description: post.excerpt,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Roboticela Blog`,
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
    <ArticleDetail
      item={post}
      backHref="/blogs"
      backLabel="Back to Blog"
      eyebrow="Blog"
    />
  );
}
