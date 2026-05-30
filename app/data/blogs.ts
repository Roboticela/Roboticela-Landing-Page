import { formatArticleDate, type ArticleBase } from './articleContent';

export type BlogPost = ArticleBase;

/** Add posts here — the blog page lists them automatically. */
export const blogPosts: BlogPost[] = [];

export function getBlogById(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

export const formatBlogDate = formatArticleDate;

export function filterBlogs(items: BlogPost[], query: string): BlogPost[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return items;

  const terms = normalized.split(/\s+/);
  return items.filter((item) => {
    const haystack = [item.title, item.excerpt, item.category, formatBlogDate(item.date), item.date]
      .join(' ')
      .toLowerCase();

    return terms.every((term) => haystack.includes(term));
  });
}

export function sortBlogsByDate(items: BlogPost[]): BlogPost[] {
  return [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
