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
    title: 'Product launches',
    description: 'Be the first to hear when we ship something new—from software to hardware and beyond.',
  },
  {
    icon: Zap,
    title: 'Breakthroughs & updates',
    description: "Curated news on what we're building, improving, and exploring across every category.",
  },
  {
    icon: Bell,
    title: 'No noise',
    description: 'We respect your inbox. No spam—just innovation worth your time.',
  },
];

export default function NewsletterPage() {
  return (
    <SitePageLayout>
      <PageHero
        eyebrow="Newsletter"
        title="Join the"
        titleAccent="Empire."
        description="Subscribe and stay in the loop—new products, breakthroughs, and stories from Roboticela, delivered to your inbox."
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
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Subscribe now</h2>
          <p className="text-foreground/60 mb-8 max-w-md mx-auto">
            One email field. Zero hassle. Join builders and dreamers who follow what we&apos;re creating next.
          </p>
          <NewsletterSignup size="large" className="max-w-lg mx-auto" />
          <p className="text-sm text-foreground/50 mt-6">
            By subscribing, you agree to receive emails from Roboticela. See our{' '}
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
