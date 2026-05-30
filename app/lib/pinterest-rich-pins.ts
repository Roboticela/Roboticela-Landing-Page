import type { Metadata } from 'next';

import type { ArticleBase } from '../data/articleContent';
import { absoluteUrl, SITE_URL } from './site';

const DEFAULT_OG_IMAGE = '/og-image.jpg';
const PUBLISHER_NAME = 'Roboticela';
const PUBLISHER_LOGO = '/Favicon.png';

type ArticleRichPinOptions = {
  title: string;
  description: string;
  canonicalPath: string;
  publishedDate: string;
  section: string;
  author?: string;
  imagePath?: string;
};

export function articleRichPinMetadata({
  title,
  description,
  canonicalPath,
  publishedDate,
  section,
  author = PUBLISHER_NAME,
  imagePath = DEFAULT_OG_IMAGE,
}: ArticleRichPinOptions): Pick<Metadata, 'openGraph'> {
  const url = absoluteUrl(canonicalPath);
  const publishedTime = toIsoDateTime(publishedDate);

  return {
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      publishedTime,
      modifiedTime: publishedTime,
      authors: [author],
      section,
      tags: [section],
      images: [
        {
          url: imagePath,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: PUBLISHER_NAME,
    url: SITE_URL,
    logo: absoluteUrl(PUBLISHER_LOGO),
    sameAs: [
      'https://github.com/Roboticela',
      'https://twitter.com/roboticela',
      'https://linkedin.com/company/roboticela',
    ],
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: PUBLISHER_NAME,
    url: SITE_URL,
    publisher: {
      '@type': 'Organization',
      name: PUBLISHER_NAME,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(PUBLISHER_LOGO),
      },
    },
  };
}

export function articleJsonLd(
  article: ArticleBase,
  canonicalPath: string,
  imagePath = DEFAULT_OG_IMAGE
) {
  const url = absoluteUrl(canonicalPath);
  const authorName = article.author ?? PUBLISHER_NAME;
  const publishedTime = toIsoDateTime(article.date);

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: [absoluteUrl(imagePath)],
    datePublished: publishedTime,
    dateModified: publishedTime,
    author: {
      '@type': authorName === PUBLISHER_NAME ? 'Organization' : 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: PUBLISHER_NAME,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(PUBLISHER_LOGO),
      },
    },
    articleSection: article.category,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

function toIsoDateTime(isoDate: string): string {
  return new Date(`${isoDate}T12:00:00.000Z`).toISOString();
}
