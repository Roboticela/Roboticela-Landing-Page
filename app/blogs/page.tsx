'use client';

import { useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductSearch from '../components/ProductSearch';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar, Search, Tag } from 'lucide-react';
import Link from 'next/link';

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
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pb-24 px-4">
        {/* Hero */}
        <section className="relative pt-40 pb-16 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, ease: easeOut }}
              className="flex justify-center mb-10"
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-8 rounded-full bg-primary/15 blur-2xl"
                  animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }}
                  transition={{ duration: 3.2, repeat: 1e10, ease: 'easeInOut' }}
                />
                <div className="relative bg-card/50 backdrop-blur-md border border-border/40 rounded-3xl p-6 md:p-8">
                  <BookOpen className="w-14 h-14 md:w-16 md:h-16 text-primary mx-auto" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: easeOut }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-5">Blog</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight leading-[1.05]">
                Stories &
                <br />
                <span className="text-primary">Insights.</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
                Perspectives on innovation, product craft, and building without boundaries—from the Roboticela team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search + posts */}
        <section className="max-w-4xl mx-auto mb-28">
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
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className={`group relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-border/40 hover:border-primary/40 transition-all duration-300 overflow-hidden ${
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
                </motion.article>
              ))}
            </motion.div>
          )}
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="relative text-center rounded-[3rem] p-14 md:p-20 border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent overflow-hidden"
          >
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-3xl" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Want the latest updates?
            </h2>
            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Subscribe to our newsletter for new posts, product news, and stories from Roboticela.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/newsletter">
                <motion.button
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-primary/20"
                >
                  Join the Empire
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/news">
                <motion.button
                  className="px-8 py-4 bg-transparent hover:bg-card/60 text-foreground rounded-full font-semibold text-lg transition-all duration-300 border border-border/40 inline-flex items-center gap-2"
                >
                  Read News
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
