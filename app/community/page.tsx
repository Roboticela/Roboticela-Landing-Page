'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Lock, MessageCircle, Rocket, Users } from 'lucide-react';
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
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pb-24 px-4">
        {/* Hero */}
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
                  <Users className="w-14 h-14 md:w-16 md:h-16 text-primary mx-auto" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: easeOut }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-5">Community</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight leading-[1.05]">
                Forum
                <br />
                <span className="text-primary">Coming Soon.</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
                A place to connect, collaborate, and grow with fellow creators—we&apos;re building it now.
              </p>
            </motion.div>
          </div>
        </section>

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="text-center mb-14"
          >
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">What&apos;s Ahead</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Built for connection
            </h2>
          </motion.div>

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

        {/* CTA */}
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
            <Rocket className="w-10 h-10 text-primary mx-auto mb-6 opacity-80" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Stay in the loop
            </h2>
            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Join our newsletter to hear when the forum launches, or reach out if you&apos;d like to connect today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/newsletter">
                <motion.button
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-primary/20"
                >
                  Join the Empire
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/support">
                <motion.button
                  className="px-8 py-4 bg-transparent hover:bg-card/60 text-foreground rounded-full font-semibold text-lg transition-all duration-300 border border-border/40 inline-flex items-center gap-2"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
