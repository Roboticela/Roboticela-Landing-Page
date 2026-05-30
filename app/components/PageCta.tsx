'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { easeOut } from './animations';

type PageCtaProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
};

export default function PageCta({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  className = '',
}: PageCtaProps) {
  return (
    <section className={`max-w-5xl mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOut }}
        className="relative text-center rounded-[2.5rem] p-10 md:p-14 border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight max-w-3xl mx-auto">
          {title}
        </h2>
        <p className="text-base md:text-lg text-foreground/60 max-w-2xl lg:max-w-3xl mx-auto mb-8 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-primary/20"
          >
            {primaryLabel}
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="px-8 py-4 bg-transparent hover:bg-card/60 text-foreground rounded-full font-semibold text-lg transition-all duration-300 border border-border/40 inline-flex items-center gap-2"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
}
