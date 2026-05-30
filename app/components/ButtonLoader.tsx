'use client';

import { motion } from 'framer-motion';

type ButtonLoaderProps = {
  label?: string;
  /** `onPrimary` for filled primary buttons; `default` for light/outline buttons */
  variant?: 'onPrimary' | 'default';
  size?: 'sm' | 'md';
  className?: string;
};

const ringSizes = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
};

export default function ButtonLoader({
  label,
  variant = 'onPrimary',
  size = 'md',
  className = '',
}: ButtonLoaderProps) {
  const isOnPrimary = variant === 'onPrimary';
  const track = isOnPrimary ? 'border-background/20' : 'border-primary/20';
  const arc = isOnPrimary ? 'border-t-background' : 'border-t-primary';
  const arcSecondary = isOnPrimary ? 'border-r-background/50' : 'border-r-primary/50';
  const textClass = isOnPrimary ? 'text-background' : 'text-foreground';

  return (
    <span
      className={`inline-flex flex-row flex-nowrap items-center justify-center gap-2 whitespace-nowrap ${className}`}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span className={`relative shrink-0 ${ringSizes[size]}`} aria-hidden>
        <motion.span
          className={`absolute inset-0 rounded-full border-2 ${track} ${arc} ${arcSecondary}`}
          animate={{ rotate: 360 }}
          transition={{ duration: 0.85, repeat: Infinity, ease: 'linear' }}
        />
        <motion.span
          className={`absolute inset-[3px] rounded-full border-2 border-transparent ${
            isOnPrimary ? 'border-b-background/70' : 'border-b-primary/70'
          }`}
          animate={{ rotate: -360 }}
          transition={{ duration: 1.15, repeat: Infinity, ease: 'linear' }}
        />
      </span>

      {label ? (
        <motion.span
          className={`inline-block shrink-0 whitespace-nowrap font-semibold leading-none ${textClass}`}
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {label}
        </motion.span>
      ) : null}
    </span>
  );
}
