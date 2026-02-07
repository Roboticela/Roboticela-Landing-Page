'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { FileText, Calendar, Tag } from 'lucide-react';

const blogPosts = [
  { date: '2026-02-05', title: 'Building the Future: Our Approach to Innovation', category: 'Innovation', excerpt: 'How we think different and build everything without boundaries.' },
  { date: '2026-01-28', title: 'Introducing Our New Product Suite', category: 'Product', excerpt: 'A deep dive into our latest product releases and what's coming next.' },
  { date: '2026-01-15', title: 'The Story Behind Roboticela', category: 'Company', excerpt: 'Robot meets Cell: The origin of our name and mission.' },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-8">
              <FileText className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">Blog</h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">Stories, insights, and updates from the Roboticela team.</p>
          </motion.div>
          <div className="space-y-8 mb-16">
            {blogPosts.map((post, index) => (
              <motion.article key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/40 hover:border-primary/40 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-foreground/60 text-sm">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">{post.category}</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">{post.title}</h2>
                <p className="text-foreground/70 text-lg">{post.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
