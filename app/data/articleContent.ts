export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] };

export type ArticleBase = {
  id: string;
  date: string;
  title: string;
  category: string;
  excerpt: string;
  content: ArticleBlock[];
  author?: string;
};

export function formatArticleDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
