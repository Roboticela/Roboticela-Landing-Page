'use client';

import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { easeOut } from './animations';

const promises = [
  'Never stop.',
  'Never settle.',
  'Always, unfailingly, put you first.',
];

export default function Vision() {
  return (
    <section className="relative py-32 md:py-40 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-8">
            <Target className="w-12 h-12 text-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-8 tracking-tight">
            Imagination is the only boundary we&apos;ve ever respected.
          </h2>

          <div className="max-w-4xl mx-auto space-y-8 text-xl md:text-2xl text-foreground/70 leading-relaxed mb-16">
            <p>
              Every other limit — category, industry, convention — we&apos;ve quietly ignored.
            </p>
            <p>We build for everyone. Across everything. Without compromise.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: easeOut }}
            className="bg-card/60 backdrop-blur-sm rounded-3xl p-12 border border-border/40"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Our Promise</h3>
            <div className="space-y-4 text-lg md:text-xl text-foreground/70 leading-relaxed">
              {promises.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
