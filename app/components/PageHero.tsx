'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

import { easeOut } from './animations';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description: string;
  icon?: LucideIcon;
  iconNode?: React.ReactNode;
  iconGlow?: boolean;
  className?: string;
  paddingBottom?: 'sm' | 'md' | 'lg';
};

const paddingClasses = {
  sm: 'pb-12',
  md: 'pb-16',
  lg: 'pb-20',
};

export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  description,
  icon: Icon,
  iconNode,
  iconGlow = true,
  className = '',
  paddingBottom = 'md',
}: PageHeroProps) {
  return (
    <section className={`relative pt-40 ${paddingClasses[paddingBottom]} overflow-hidden ${className}`}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto text-center px-2">
        {(Icon || iconNode) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: easeOut }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              {iconGlow && (
                <motion.div
                  className="absolute -inset-6 rounded-full bg-primary/15 blur-2xl"
                  animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }}
                  transition={{ duration: 3.2, repeat: 1e10, ease: 'easeInOut' }}
                />
              )}
              {iconNode ?? (
                Icon && (
                  <div className="relative bg-card/50 backdrop-blur-md border border-border/40 rounded-2xl p-5 md:p-6">
                    <Icon className="w-10 h-10 md:w-11 md:h-11 text-primary mx-auto" strokeWidth={1.5} />
                  </div>
                )
              )}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: easeOut }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            {eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight leading-tight max-w-5xl lg:max-w-6xl mx-auto text-balance">
            {title}
            {titleAccent && (
              <>
                {' '}
                <span className="text-primary">{titleAccent}</span>
              </>
            )}
          </h1>
          <p className="text-base md:text-lg text-foreground/60 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
