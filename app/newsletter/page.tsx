'use client';

import { motion } from 'framer-motion';
import { Bell, Mail, Rocket, Zap } from 'lucide-react';
import Link from 'next/link';

import { easeOut, pageContainerVariants, pageItemVariants } from '../components/animations';
import NewsletterSignup from '../components/NewsletterSignup';
import PageHero from '../components/PageHero';
import PageSectionHeader from '../components/PageSectionHeader';
import SitePageLayout from '../components/SitePageLayout';

const perks = [
  {
    icon: Rocket,
    title: 'First access. Always.',
    description: 'New products, tools, and ideas — you hear about them before anyone else.',
  },
  {
    icon: Zap,
    title: "Only what's worth your time.",
    description: "No filler. No schedule-driven content. We write when we have something real to say.",
  },
  {
    icon: Bell,
    title: 'Your inbox, respected.',
    description: "We know what it means to trust someone with your attention. We don't take it lightly.",
  },
];

export default function NewsletterPage() {
  return (
    <SitePageLayout>
      <PageHero
        eyebrow="Newsletter"
        title="Join the Empire."
        description="Be the first to know. Be the first to try. Stay close to what we're building."
        icon={Mail}
      />

      <section className="max-w-3xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: easeOut }}
          className="relative text-center px-8 py-12 md:py-16 bg-card/60 backdrop-blur-sm rounded-[2.5rem] border border-primary/20 overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">One field. No noise. Just what matters.</h2>
          <p className="text-foreground/60 mb-8 max-w-md mx-auto">
            Join the people who follow what we&apos;re creating. You&apos;ll hear from us when it&apos;s worth opening.
          </p>
          <NewsletterSignup size="large" className="max-w-lg mx-auto" source="newsletter-page" />
          <p className="text-sm text-foreground/50 mt-6">
            By subscribing, you agree to receive updates from Roboticela. Your inbox is safe with us. See our{' '}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto">
        <PageSectionHeader eyebrow="What you get" title="Why subscribe?" />

        <motion.div
          variants={pageContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {perks.map((perk) => (
            <motion.div
              key={perk.title}
              variants={pageItemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/40 hover:border-primary/40 transition-all duration-300 text-center"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <perk.icon className="w-7 h-7 text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{perk.title}</h3>
              <p className="text-foreground/65 leading-relaxed">{perk.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </SitePageLayout>
  );
}
