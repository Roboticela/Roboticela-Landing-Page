'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react';

import { easeOut } from './animations';
import { formatArticleDate, type ArticleBase, type ArticleBlock } from '../data/articleContent';
import SitePageLayout from './SitePageLayout';

type ArticleDetailProps = {
  item: ArticleBase;
  backHref: string;
  backLabel: string;
  eyebrow: string;
};

function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="space-y-6 text-base md:text-lg text-foreground/75 leading-relaxed">
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          return (
            <h2
              key={index}
              className="text-xl md:text-2xl font-bold text-foreground tracking-tight pt-4 first:pt-0"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === 'list') {
          return (
            <ul key={index} className="space-y-2 pl-1">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index} className="text-foreground/70">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

export default function ArticleDetail({
  item,
  backHref,
  backLabel,
  eyebrow,
}: ArticleDetailProps) {
  return (
    <SitePageLayout>
      <article className="relative pt-36 pb-24 md:pb-32">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-primary transition-colors mb-10 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              {backLabel}
            </Link>
          </motion.div>

          <motion.header
            className="mb-10 md:mb-14"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: easeOut, delay: 0.05 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              {eyebrow}
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <Calendar className="w-4 h-4 shrink-0" />
                <time dateTime={item.date}>{formatArticleDate(item.date)}</time>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <Tag className="w-3.5 h-3.5" />
                {item.category}
              </span>
              {item.author && (
                <span className="inline-flex items-center gap-1.5 text-sm text-foreground/60">
                  <User className="w-4 h-4 shrink-0" />
                  {item.author}
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.15] mb-5">
              {item.title}
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 leading-relaxed border-l-2 border-primary/40 pl-5">
              {item.excerpt}
            </p>
          </motion.header>

          <motion.div
            className="relative bg-card/50 backdrop-blur-sm rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 lg:p-14 border border-border/40 shadow-sm"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.12 }}
          >
            <div className="absolute top-0 left-8 right-8 md:left-12 md:right-12 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <ArticleBody blocks={item.content} />
          </motion.div>
        </div>
      </article>
    </SitePageLayout>
  );
}
