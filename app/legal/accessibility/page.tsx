'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Heart, Eye, Ear } from 'lucide-react';

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-8">
              <Heart className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">Accessibility</h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">Technology should work for everyone, regardless of ability.</p>
          </motion.div>
          <div className="space-y-8 mb-16">
            {[
              { icon: Eye, title: 'Visual Accessibility', description: 'High contrast themes, screen reader support, and keyboard navigation for users with visual impairments.' },
              { icon: Ear, title: 'Audio Alternatives', description: 'Captions, transcripts, and visual indicators for users who are deaf or hard of hearing.' },
              { icon: Heart, title: 'Inclusive Design', description: 'Our products are designed with accessibility in mind from day one. We follow WCAG 2.1 AA standards and continuously improve based on user feedback.' },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/40">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">{item.title}</h3>
                    <p className="text-foreground/70 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
