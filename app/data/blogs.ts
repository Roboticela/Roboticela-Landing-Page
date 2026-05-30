export type BlogPost = {
  id: string;
  date: string;
  title: string;
  category: string;
  excerpt: string;
};

/** Add posts here — the blog page lists them automatically. */
export const blogPosts: BlogPost[] = [
  {
    id: 'approach-to-innovation',
    date: '2026-02-05',
    title: 'Building the Future: Our Approach to Innovation',
    category: 'Innovation',
    excerpt: 'How we think different and build everything without boundaries.',
  },
  {
    id: 'new-product-suite',
    date: '2026-01-28',
    title: 'Introducing Our New Product Suite',
    category: 'Product',
    excerpt: "A deep dive into our latest product releases and what's coming next.",
  },
  {
    id: 'story-behind-roboticela',
    date: '2026-01-15',
    title: 'The Story Behind Roboticela',
    category: 'Company',
    excerpt: 'Robot meets Cell: The origin of our name and mission.',
  },
];

export function formatBlogDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

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
