'use client';

import { useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductSearch from '../components/ProductSearch';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Newspaper, Search, Tag } from 'lucide-react';
import Link from 'next/link';

import { easeOut } from '../components/animations';
import {
  filterNews,
  formatNewsDate,
  newsItems,
  sortNewsByDate,
} from '../data/news';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeOut } },
};

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const isSearching = searchQuery.trim().length > 0;

  const sortedNews = useMemo(() => sortNewsByDate(newsItems), []);
  const filteredNews = useMemo(
    () => filterNews(sortedNews, searchQuery),
    [sortedNews, searchQuery]
  );

  const hasNews = sortedNews.length > 0;
  const showEmptyCatalog = !hasNews && !isSearching;
  const showNoResults = isSearching && filteredNews.length === 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pb-24 px-4">
        {/* Hero */}
        <section className="relative pt-40 pb-16 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-primary/5 rounded-full blur-3xl" />
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
                  <Newspaper className="w-14 h-14 md:w-16 md:h-16 text-primary mx-auto" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: easeOut }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-5">News</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight leading-[1.05]">
                Updates &
                <br />
                <span className="text-primary">Announcements.</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
                The latest from Roboticela—product launches, company news, and stories from the team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search + listings */}
        <section className="max-w-4xl mx-auto mb-28">
          <ProductSearch
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search news..."
            ariaLabel="Search news"
            className="mb-10"
          />

          {isSearching && filteredNews.length > 0 && (
            <p className="text-center text-foreground/60 mb-8 -mt-2">
              {filteredNews.length} article{filteredNews.length === 1 ? '' : 's'} found
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
              <h2 className="text-2xl font-semibold text-foreground mb-2">No articles found</h2>
              <p className="text-foreground/60 mb-6">
                Try a different search term or clear your search to browse all news.
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
                <Newspaper className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">No news yet</h2>
              <p className="text-lg text-foreground/60 max-w-md mx-auto leading-relaxed">
                We&apos;ll share announcements and updates here as they happen. Check back soon.
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
              {filteredNews.map((item) => (
                <motion.article
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="group bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-border/40 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Calendar className="w-4 h-4 shrink-0" />
                      <time dateTime={item.date}>{formatNewsDate(item.date)}</time>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      <Tag className="w-3.5 h-3.5" />
                      {item.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-foreground/65 text-lg leading-relaxed">{item.excerpt}</p>
                </motion.article>
              ))}
            </motion.div>
          )}
        </section>

        {/* Media CTA */}
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
              Media Inquiries
            </h2>
            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              For press and media inquiries, reach out to our communications team—we&apos;re happy to help.
            </p>
            <Link href="/support">
              <motion.button
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-primary/20"
              >
                Contact Press Team
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
