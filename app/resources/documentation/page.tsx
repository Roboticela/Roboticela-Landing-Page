'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Book, Code, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const docCategories = [
  { icon: Code, title: 'API Documentation', description: 'Complete API references and code examples.', items: ['REST APIs', 'SDKs', 'Webhooks'] },
  { icon: Book, title: 'Guides & Tutorials', description: 'Step-by-step guides to get you started.', items: ['Quick Start', 'Best Practices', 'Advanced Topics'] },
  { icon: FileText, title: 'Product Docs', description: 'Detailed documentation for all our products.', items: ['OSI Simulator', 'Iconify'] },
];

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-8">
              <Book className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">Documentation</h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">Everything you need to build with Roboticela.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {docCategories.map((cat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/40">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <cat.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{cat.title}</h3>
                <p className="text-foreground/70 mb-6">{cat.description}</p>
                <ul className="space-y-2">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="text-foreground/60 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Need Help?</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">Can't find what you're looking for? Our support team is here to help.</p>
            <Link href="/support"><button className="px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2">Contact Support<ArrowRight className="w-5 h-5" /></button></Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
