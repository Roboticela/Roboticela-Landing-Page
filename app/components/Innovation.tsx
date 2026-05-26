'use client';

import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { easeOut } from './animations';

export default function Innovation() {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background decoration */}
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
            Obsessed with What&apos;s Next
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-foreground/70 leading-relaxed">
            <p>
              We&apos;re not satisfied with what exists. We&apos;re obsessed with what&apos;s next.
            </p>
            <p>
              Our labs are constantly exploring, testing, and creating breakthroughs in technology. Tomorrow&apos;s innovations? We&apos;re working on them today.
            </p>
            <p>
              From cutting-edge research to everyday solutions—if it can make life better, we&apos;re on it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
