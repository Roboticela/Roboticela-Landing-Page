'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-8">
              <GraduationCap className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">For Education</h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">Learning experiences that inspire the next generation.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: BookOpen, title: 'Interactive Learning', description: 'Hands-on simulators and educational tools.' },
              { icon: Users, title: 'For Educators', description: 'Resources and tools for classroom use.' },
              { icon: GraduationCap, title: 'For Students', description: 'Learn at your own pace with our platforms.' },
            ].map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/40 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Transform Education</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">Discover our educational tools and platforms.</p>
            <Link href="/products"><button className="px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2">Explore Tools<ArrowRight className="w-5 h-5" /></button></Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
