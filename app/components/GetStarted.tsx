'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function GetStarted() {
  return (
    <section id="downloads" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
            No long forms—just a short conversation about your project and goals.
          </p>
        </motion.div>

        <motion.div
          className="bg-card/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-border/40 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
            <MessageCircle className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">Talk to Us</h3>
          <p className="text-foreground/70 mb-8 max-w-lg mx-auto">
            Share your idea, timeline, and budget. We&apos;ll reply with a clear proposal and next steps.
          </p>
          <Link href="/support">
            <motion.div
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-xl font-semibold text-lg transition-colors"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
