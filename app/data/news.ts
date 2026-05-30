import { formatArticleDate, type ArticleBase } from './articleContent';

export type NewsItem = ArticleBase;

/** Add announcements here — the news page lists them automatically. */
export const newsItems: NewsItem[] = [];

export function getNewsById(id: string): NewsItem | undefined {
  return newsItems.find((item) => item.id === id);
}

export const formatNewsDate = formatArticleDate;

export function filterNews(items: NewsItem[], query: string): NewsItem[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return items;

  const terms = normalized.split(/\s+/);
  return items.filter((item) => {
    const haystack = [item.title, item.excerpt, item.category, formatNewsDate(item.date), item.date]
      .join(' ')
      .toLowerCase();

    return terms.every((term) => haystack.includes(term));
  });
}

export function sortNewsByDate(items: NewsItem[]): NewsItem[] {
  return [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
