'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { User, Code2, Palette, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const solutions = [
  {
    icon: Code2,
    title: 'Developer Tools',
    description: 'Build faster with our suite of development tools and simulators.',
    products: ['OSI Model Simulator'],
  },
  {
    icon: Palette,
    title: 'Creative Tools',
    description: 'Design and create beautiful products with professional-grade tools.',
    products: ['Roboticela Iconify'],
  },
  {
    icon: GraduationCap,
    title: 'Learning Resources',
    description: 'Master new skills with our interactive educational platforms.',
    products: ['OSI Model Simulator', 'Documentation', 'Tutorials'],
  },
];

export default function IndividualsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-8">
              <User className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              For Individuals
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
              Powerful tools designed for creators, learners, and innovators who think different.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/40"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{solution.title}</h3>
                <p className="text-foreground/70 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.products.map((product, idx) => (
                    <li key={idx} className="text-foreground/60 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {product}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Explore our products and start building your next big idea today.
            </p>
            <Link href="/products">
              <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2">
                Browse Products
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
