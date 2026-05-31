'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { easeOut } from './animations';
import HeroBackground from './HeroBackground';
import LogoEnergyGlow from './LogoEnergyGlow';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
      {/* Premium animated background */}
      <HeroBackground />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          {/* Logo with premium energy glow */}
          <div className="flex justify-center mb-8">
            <LogoEnergyGlow />
          </div>

          {/* Brand name */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            Roboticela
          </motion.h1>

          {/* Main tagline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5, ease: easeOut }}
          >
            Think different.{' '}
            <span style={{ color: '#2EE6D6' }}>Build everything.</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl max-w-3xl mx-auto mb-12 font-normal tracking-tight"
            style={{ color: 'rgba(255,255,255,0.58)' }}
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
              className="group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #2EE6D6 0%, #00BFFF 100%)',
                color: '#000',
                boxShadow: '0 0 28px rgba(46,230,214,0.35)',
              }}
            >
              Explore Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.06)',
                color: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(255,255,255,0.18)',
                backdropFilter: 'blur(8px)',
              }}
            >
              Our Story
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div
          className="w-6 h-10 rounded-full flex items-start justify-center p-2"
          style={{ border: '2px solid rgba(46,230,214,0.3)' }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: 'rgba(46,230,214,0.6)' }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: 1e10, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
