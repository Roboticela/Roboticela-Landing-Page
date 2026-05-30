export type NewsItem = {
  id: string;
  date: string;
  title: string;
  category: string;
  excerpt: string;
};

/** Add announcements here — the news page lists them automatically. */
export const newsItems: NewsItem[] = [];

export function formatNewsDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

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
