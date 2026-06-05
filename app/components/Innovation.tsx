'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { easeOut } from './animations';

export default function Innovation() {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
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
            <Zap className="w-12 h-12 text-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            The best thing we&apos;ve ever built doesn&apos;t exist yet.
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-foreground/70 leading-relaxed">
            <p>That&apos;s not a concern. It&apos;s the whole point.</p>
            <p>
              Every lab, every late night, every version that didn&apos;t make it — they&apos;re all pointing toward
              something that isn&apos;t here yet.
            </p>
            <p>When it arrives, you&apos;ll be the first to know.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
