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
    return { title: 'Blog - Roboticela' };
  }

  return {
    title: `${post.title} - Roboticela Blog`,
    description: post.excerpt,
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
