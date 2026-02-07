'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-8">
              <Target className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">Our Vision</h1>
            <p className="text-xl md:text-2xl text-foreground/70">Unlimited by Design</p>
          </motion.div>
          <div className="space-y-12 mb-16">
            {[
              { icon: Lightbulb, title: 'The Future is Limitless', description: 'We believe the only limit is imagination. That\'s why we refuse to be defined by a single industry, product, or vision of the future.' },
              { icon: Rocket, title: 'Building Everything', description: 'We\'re building everything, for everyone, without compromise. From software to hardware, research to experiences—we do it all.' },
              { icon: Target, title: 'Always Innovating', description: 'To never stop innovating. To never settle for good enough. To always put you first. This is our promise.' },
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Join Our Journey</h2>
            <p className="text-lg text-foreground/70 mb-8">Be part of something bigger. Build the future with us.</p>
            <Link href="/careers"><button className="px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300">Explore Careers</button></Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
