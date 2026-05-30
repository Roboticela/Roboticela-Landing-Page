'use client';

import { motion } from 'framer-motion';

import { easeOut } from './animations';

type PageSectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export default function PageSectionHeader({
  eyebrow,
  title,
  description,
  className = '',
}: PageSectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: easeOut }}
      className={`text-center mb-12 ${className}`}
    >
      {eyebrow && (
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{title}</h2>
      {description && (
        <p className="text-base text-foreground/60 max-w-3xl mx-auto mt-3 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
