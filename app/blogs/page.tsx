'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import ProductSearch from '../components/ProductSearch';
import PageCta from '../components/PageCta';
import PageHero from '../components/PageHero';
import SitePageLayout from '../components/SitePageLayout';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar, Search, Tag } from 'lucide-react';

import { easeOut } from '../components/animations';
import {
  blogPosts,
  filterBlogs,
  formatBlogDate,
  sortBlogsByDate,
} from '../data/blogs';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeOut } },
};

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const isSearching = searchQuery.trim().length > 0;

  const sortedPosts = useMemo(() => sortBlogsByDate(blogPosts), []);
  const filteredPosts = useMemo(
    () => filterBlogs(sortedPosts, searchQuery),
    [sortedPosts, searchQuery]
  );

  const hasPosts = sortedPosts.length > 0;
  const showEmptyCatalog = !hasPosts && !isSearching;
  const showNoResults = isSearching && filteredPosts.length === 0;

  return (
    <SitePageLayout>
      <PageHero
        eyebrow="Blog"
        title="Stories &"
        titleAccent="Insights."
        description="Perspectives on innovation, product craft, and building without boundaries—from the Roboticela team."
        icon={BookOpen}
      />

        {/* Search + posts */}
        <section className="max-w-5xl mx-auto mb-28">
          <ProductSearch
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search blog posts..."
            ariaLabel="Search blog posts"
            className="mb-10"
          />

          {isSearching && filteredPosts.length > 0 && (
            <p className="text-center text-foreground/60 mb-8 -mt-2">
              {filteredPosts.length} post{filteredPosts.length === 1 ? '' : 's'} found
            </p>
          )}

          {showNoResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="text-center py-16 mb-8 bg-card/60 backdrop-blur-sm rounded-3xl border border-border/40"
            >
              <Search className="w-12 h-12 text-foreground/30 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-foreground mb-2">No posts found</h2>
              <p className="text-foreground/60 mb-6">
                Try a different search term or clear your search to browse all posts.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full font-medium transition-colors"
              >
                Clear search
              </button>
            </motion.div>
          )}

          {showEmptyCatalog && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="text-center py-16 md:py-20 px-8 bg-card/50 backdrop-blur-sm rounded-[2.5rem] border border-border/40"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">No posts yet</h2>
              <p className="text-lg text-foreground/60 max-w-md mx-auto leading-relaxed">
                New stories and insights will appear here soon. Check back for updates from our team.
              </p>
            </motion.div>
          )}

          {!showEmptyCatalog && !showNoResults && (
            <motion.div
              key={searchQuery.trim() || 'all'}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="space-y-6"
            >
              {filteredPosts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/blogs/${post.id}`}
                  className="block rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                <motion.article
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className={`group relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-border/40 hover:border-primary/40 transition-all duration-300 overflow-hidden cursor-pointer ${
                    index === 0 && !isSearching ? 'md:p-12' : ''
                  }`}
                >
                  {index === 0 && !isSearching && (
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-bl-2xl">
                      Latest
                    </div>
                  )}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Calendar className="w-4 h-4 shrink-0" />
                      <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      <Tag className="w-3.5 h-3.5" />
                      {post.category}
                    </span>
                  </div>
                  <h2
                    className={`font-bold text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors ${
                      index === 0 && !isSearching ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'
                    }`}
                  >
                    {post.title}
                  </h2>
                  <p className="text-foreground/65 text-lg leading-relaxed">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.article>
                </Link>
              ))}
            </motion.div>
          )}
        </section>

        <PageCta
          title="Want the latest updates?"
          description="Subscribe to our newsletter for new posts, product news, and stories from Roboticela."
          primaryLabel="Join the Empire"
          primaryHref="/newsletter"
          secondaryLabel="Read News"
          secondaryHref="/news"
        />
    </SitePageLayout>
  );
}
