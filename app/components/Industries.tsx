'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Heart, GraduationCap, Film, DollarSign, Infinity } from 'lucide-react';

import { easeOut } from './animations';

const industries = [
  {
    icon: ShoppingCart,
    name: 'E-commerce',
    description: 'Shopping that feels like discovery. Commerce that earns loyalty.',
  },
  {
    icon: Heart,
    name: 'Healthcare',
    description: 'Wellness built with the same care a good doctor gives to a conversation.',
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: "Learning that doesn't feel like learning. That's the hardest kind to build.",
  },
  {
    icon: Film,
    name: 'Entertainment',
    description: 'Things that stay with you after you put them down. Joy that lingers.',
  },
  {
    icon: DollarSign,
    name: 'Finance',
    description: "Money is complicated. The tools to manage it don't have to be.",
  },
  {
    icon: Infinity,
    name: 'And everything else.',
    description: 'If it matters to someone, it matters to us. No exceptions.',
  },
];

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function Industries() {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            If it matters to people, it matters to us.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/40 hover:border-primary/40 transition-all duration-300"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">{industry.name}</h3>
              <p className="text-foreground/70 leading-relaxed text-lg">{industry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
