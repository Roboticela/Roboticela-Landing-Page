'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Share2,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';

import { easeOut } from '../components/animations';
import { socialPlatforms } from '../data/social';

const platformIcons = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
  email: Mail,
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeOut } },
};

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pb-24 px-4">
        <section className="relative pt-40 pb-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-primary/5 rounded-full blur-3xl" />
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
                  <Share2 className="w-14 h-14 md:w-16 md:h-16 text-primary mx-auto" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: easeOut }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-5">Connect</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight leading-[1.05]">
                Follow
                <br />
                <span className="text-primary">Roboticela.</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
                Find us where you already spend time—code, conversation, and community. Tap a channel below to connect.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-28">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {socialPlatforms.map((platform) => {
              const Icon = platformIcons[platform.id as keyof typeof platformIcons] ?? Share2;
              const linkProps = platform.external
                ? { target: '_blank' as const, rel: 'noopener noreferrer' as const }
                : {};

              return (
                <motion.a
                  key={platform.id}
                  href={platform.href}
                  variants={itemVariants}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  {...linkProps}
                  className="group block bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/40 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" strokeWidth={1.75} />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-foreground/40 group-hover:text-primary transition-colors shrink-0" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {platform.name}
                  </h2>
                  <p className="text-primary font-medium text-sm mb-3">{platform.handle}</p>
                  <p className="text-foreground/65 leading-relaxed">{platform.description}</p>
                </motion.a>
              );
            })}
          </motion.div>
        </section>

        <section className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="relative text-center rounded-[3rem] p-14 md:p-20 border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent overflow-hidden"
          >
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-3xl" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Prefer email updates?
            </h2>
            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Subscribe to our newsletter for product launches, breakthroughs, and stories—delivered on your schedule.
            </p>
            <Link href="/newsletter">
              <motion.button
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-primary/20"
              >
                Join the Empire
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
