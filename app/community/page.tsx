'use client';

import PageCta from '../components/PageCta';
import PageHero from '../components/PageHero';
import PageSectionHeader from '../components/PageSectionHeader';
import SitePageLayout from '../components/SitePageLayout';
import { motion } from 'framer-motion';
import { Heart, Lock, MessageCircle, Users } from 'lucide-react';
import Link from 'next/link';

import { easeOut } from '../components/animations';

const comingFeatures = [
  {
    icon: MessageCircle,
    title: 'Discussions',
    description: 'Ask questions, share ideas, and learn from builders across the Roboticela ecosystem.',
  },
  {
    icon: Heart,
    title: 'Showcase',
    description: 'Share what you create with our tools and discover projects from the community.',
  },
  {
    icon: Users,
    title: 'Connect',
    description: 'Meet developers, designers, and innovators who think beyond categories.',
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

export default function CommunityPage() {
  return (
    <SitePageLayout>
      <PageHero
        eyebrow="Community"
        title="Forum"
        titleAccent="Coming Soon."
        description="A place to connect, collaborate, and grow with fellow creators—we're building it now."
        icon={Users}
      />

        {/* Coming soon card */}
        <section className="max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: easeOut }}
            className="relative text-center px-8 py-14 md:py-16 bg-card/50 backdrop-blur-sm rounded-[2.5rem] border border-primary/20 overflow-hidden"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6">
              <Lock className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Coming Soon</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              We&apos;re crafting something special
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed max-w-lg mx-auto">
              The Roboticela community forum isn&apos;t live yet. When it launches, you&apos;ll be able to join discussions, get help, and share your work with builders worldwide.
            </p>
          </motion.div>
        </section>

        {/* Preview features */}
        <section className="max-w-6xl mx-auto mb-28">
          <PageSectionHeader eyebrow="What's Ahead" title="Built for connection" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {comingFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/40 overflow-hidden"
              >
                <div className="absolute inset-0 bg-card/40 backdrop-blur-[1px] z-10 flex flex-col items-center justify-center gap-2 rounded-3xl">
                  <Lock className="w-6 h-6 text-primary/50" />
                  <span className="text-xs font-medium text-foreground/45 uppercase tracking-wider">Coming Soon</span>
                </div>
                <div className="blur-[2px] pointer-events-none select-none">
                  <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-foreground/65 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <PageCta
          title="Stay in the loop"
          description="Join our newsletter to hear when the forum launches, or reach out if you'd like to connect today."
          primaryLabel="Join the Empire"
          primaryHref="/newsletter"
          secondaryLabel="Contact Us"
          secondaryHref="/support"
        />
    </SitePageLayout>
  );
}
