'use client';

import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { easeOut } from './animations';

export default function Hero() {
  const [clickRotation, setClickRotation] = useState(0);
  const spinTransition = { duration: 0.6, ease: easeOut };

  const spinLogo = useCallback(() => {
    setClickRotation((current) => current + 360);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: clickRotation,
              }}
              whileHover={{
                scale: 1.1,
                rotate: clickRotation + 360,
                transition: spinTransition,
              }}
              transition={
                clickRotation === 0
                  ? {
                      duration: 0.5,
                      ease: easeOut,
                      rotate: { duration: 0.5, ease: easeOut },
                    }
                  : spinTransition
              }
              onClick={spinLogo}
              style={{ transformOrigin: 'center center', willChange: 'transform' }}
              className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 cursor-pointer touch-manipulation select-none"
              role="button"
              tabIndex={0}
              aria-label="Spin Roboticela logo"
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  spinLogo();
                }
              }}
            >
              <motion.div
                className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl"
                animate={{
                  scale: [1, 1.18, 1],
                  opacity: [0.25, 0.5, 0.25],
                }}
                transition={{
                  duration: 2.8,
                  repeat: 1e10,
                  ease: 'easeInOut',
                }}
                aria-hidden
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.5, 0.85, 0.5],
                }}
                transition={{
                  duration: 2.8,
                  repeat: 1e10,
                  ease: 'easeInOut',
                  delay: 0.35,
                }}
                aria-hidden
              />
              <div className="relative z-10 w-full h-full">
                <Image src="/Logo.png" alt="Roboticela" fill sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px" className="object-contain pointer-events-none" priority fetchPriority="high" />
              </div>
            </motion.div>
          </div>

          {/* Brand name */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            Roboticela
          </motion.h1>

          {/* Main tagline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5, ease: easeOut }}
          >
            Think different. <span className="text-primary">Build everything.</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-foreground/60 max-w-3xl mx-auto mb-12 font-normal tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: easeOut }}
          >
            The future doesn&apos;t fit in boxes. Neither do we.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5, ease: easeOut }}
          >
            <Link
                href="/products"
                className="group px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-primary/20"
              >
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            <Link
                href="/about"
                className="px-8 py-4 bg-transparent hover:bg-card/60 text-foreground rounded-full font-semibold text-lg transition-all duration-300 border border-border/40"
              >
                Our Story
              </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-foreground/40 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: 1e10, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
