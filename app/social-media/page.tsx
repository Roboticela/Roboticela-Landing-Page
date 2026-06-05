'use client';

import PageCta from '../components/PageCta';
import PageHero from '../components/PageHero';
import SitePageLayout from '../components/SitePageLayout';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Share2,
  Twitter,
} from 'lucide-react';

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
    <SitePageLayout>
      <PageHero
        eyebrow="Connect"
        title="We're already where you are."
        description="Find us. Follow what we're building. Say hello."
        icon={Share2}
      />

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

        <PageCta
          title="Prefer the slower kind?"
          description="Our newsletter is calm, curated, and completely free of noise."
          primaryLabel="Join the Empire"
          primaryHref="/newsletter"
        />
    </SitePageLayout>
  );
}
