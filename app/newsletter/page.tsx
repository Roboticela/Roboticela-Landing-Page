'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterSignup from '../components/NewsletterSignup';
import { motion } from 'framer-motion';
import { Bell, Mail, Rocket, Zap } from 'lucide-react';
import Link from 'next/link';

import { easeOut } from '../components/animations';

const perks = [
  {
    icon: Rocket,
    title: 'Product launches',
    description: 'Be the first to hear when we ship something new—from software to hardware and beyond.',
  },
  {
    icon: Zap,
    title: 'Breakthroughs & updates',
    description: 'Curated news on what we\'re building, improving, and exploring across every category.',
  },
  {
    icon: Bell,
    title: 'No noise',
    description: 'We respect your inbox. No spam—just innovation worth your time.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeOut } },
};

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pb-24 px-4">
        <section className="relative pt-40 pb-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, ease: easeOut }}
              className="flex justify-center mb-10"
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-8 rounded-full bg-primary/15 blur-2xl"
                  animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }}
                  transition={{ duration: 3.2, repeat: 1e10, ease: 'easeInOut' }}
                />
                <div className="relative bg-card/50 backdrop-blur-md border border-border/40 rounded-3xl p-6 md:p-8">
                  <Mail className="w-14 h-14 md:w-16 md:h-16 text-primary mx-auto" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: easeOut }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-5">Newsletter</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight leading-[1.05]">
                Join the
                <br />
                <span className="text-primary">Empire.</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
                Subscribe and stay in the loop—new products, breakthroughs, and stories from Roboticela, delivered to your inbox.
              </p>
            </motion.div>
          </div>
        </section>

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

        <section className="max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="text-center mb-14"
          >
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">What you get</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Why subscribe?
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {perks.map((perk) => (
              <motion.div
                key={perk.title}
                variants={itemVariants}
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
      </main>

      <Footer />
    </div>
  );
}
