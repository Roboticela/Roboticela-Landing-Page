'use client';

import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import PageCta from '../components/PageCta';
import SitePageLayout from '../components/SitePageLayout';
import {
  Atom, Lightbulb, Heart, Rocket, Wrench, Globe, FlaskConical,
  ShoppingBag, Cpu, Infinity, Star, ArrowRight,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { easeOut } from '../components/animations';

const principles = [
  {
    icon: Lightbulb,
    title: 'Question everything quietly.',
    description: 'Assumptions are doors. We open them gently, then walk through.',
  },
  {
    icon: Heart,
    title: 'Design for the human first.',
    description: "Technology that doesn't adapt to people isn't done yet. Ours is.",
  },
  {
    icon: Wrench,
    title: 'Craft is not optional.',
    description: 'The difference between good and extraordinary is the part most people skip. We don\'t skip it.',
  },
  {
    icon: Rocket,
    title: 'Stay permanently curious.',
    description: 'The day we stop asking questions is the day this stops meaning anything.',
  },
  {
    icon: Globe,
    title: 'No lanes. No categories.',
    description: "We go where the problem is. That's always been the rule.",
  },
  {
    icon: Star,
    title: 'Preferred, not just used.',
    description: "There's a quiet but enormous difference. We build for the first one.",
  },
];

const domains = [
  { icon: Cpu, label: 'Software' },
  { icon: ShoppingBag, label: 'E-commerce' },
  { icon: FlaskConical, label: 'Research' },
  { icon: Atom, label: 'Hardware' },
  { icon: Globe, label: 'Digital Products' },
  { icon: Infinity, label: 'Everything Else' },
];

const promises = [
  'Never stop building.',
  'Never settle for good enough.',
  'Always put you before everything else.',
  'Build what others quietly decided was impossible.',
  'Create experiences, not just products.',
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function AboutPage() {
  return (
    <SitePageLayout>
      <PageHero
        eyebrow="About Roboticela"
        title="We don't have a category."
        description="That's not a problem we're trying to solve."
        iconNode={
          <div className="relative w-24 h-24 md:w-28 md:h-28">
            <Image
              src="/Logo.png"
              alt="Roboticela"
              fill
              sizes="(max-width: 768px) 128px, 176px"
              className="object-contain"
            />
          </div>
        }
        paddingBottom="lg"
      />

        {/* ── The Name ── */}
        <section className="max-w-6xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="bg-card/50 backdrop-blur-sm rounded-[2.5rem] p-12 md:p-16 border border-border/40 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">The Name</p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                  Robot. Cell. One word. One idea.
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                  A cell is the origin of everything — the smallest, most fundamental unit of life.
                  A robot is precision made physical — intelligence given form.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  <span className="text-foreground font-semibold">Roboticela</span> is what happens when those two ideas become one. A cell with the mind of a machine. The foundation of something unlimited.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                {[
                  { word: 'Robot', meaning: 'Built for the extraordinary. Precise by nature.' },
                  { word: 'Cell', meaning: 'The beginning of everything. Humble in origin.' },
                  { word: 'Roboticela', meaning: 'Neither one. Something entirely its own.' },
                ].map(({ word, meaning }) => (
                  <div key={word} className="bg-background/60 rounded-2xl p-6 border border-border/40">
                    <p className="text-xl font-bold text-foreground mb-1">{word}</p>
                    <p className="text-foreground/60 text-sm leading-relaxed">{meaning}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Story ── */}
        <section className="max-w-4xl mx-auto mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Our Story</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 tracking-tight">
              Where It Began
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8 text-left"
          >
            {[
              "Roboticela wasn't built to enter a market. It was built to make the idea of markets feel small.",
              "We don't specialize. We explore. Across software, hardware, research, and everything in between — wherever something can be made better, that's where we go.",
              "What you hold, use, or open from us — you can feel that someone cared. Not about the launch, not about the press. About you actually using it and finding it worthy of your time.",
              "We don't want products that get used. We want products that get chosen. There's a difference. Every decision we make is about closing that gap.",
              "We're not satisfied with what exists. We're quietly obsessed with what doesn't yet.",
            ].map((paragraph, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-card/40 backdrop-blur-sm rounded-2xl p-8 border border-border/30"
              >
                <p className="text-lg md:text-xl text-foreground/75 leading-relaxed">{paragraph}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── What We Work On ── */}
        <section className="max-w-6xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">No Category</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              We work on everything worth building
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {domains.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/40 hover:border-primary/40 transition-all duration-300 flex flex-col items-center gap-4 text-center"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-lg font-semibold text-foreground">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Principles ── */}
        <section className="max-w-6xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">What We Believe</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Our Principles
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {principles.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/40 hover:border-primary/40 transition-all duration-300"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
                <p className="text-foreground/65 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Mission & Promise ── */}
        <section className="max-w-6xl mx-auto mb-32">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-10 border border-primary/20"
            >
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Mission</p>
              <h2 className="text-3xl font-bold text-foreground mb-6 tracking-tight">
                Why we exist.
              </h2>
              <p className="text-foreground/70 leading-relaxed text-lg mb-6">
                To build the tools and experiences of tomorrow — today.
                To prove that a company can work across <em>everything</em> {" "} and still do it beautifully.
              </p>
              <p className="text-foreground/70 leading-relaxed text-lg">
                To push the edge of what&apos;s possible and put it in your hands.
              </p>
            </motion.div>

            {/* Promise */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="bg-card/50 backdrop-blur-sm rounded-3xl p-10 border border-border/40"
            >
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Our Promise</p>
              <h2 className="text-3xl font-bold text-foreground mb-8 tracking-tight">
                Our Promise
              </h2>
              <ul className="space-y-4">
                {promises.map((promise) => (
                  <li key={promise} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-foreground/70 text-lg leading-relaxed">{promise}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <PageCta
          title="Roboticela. Unlimited by design."
          description="No category. No ceiling. Just a quiet, relentless commitment to what comes next."
          primaryLabel="See our products"
          primaryHref="/products"
          secondaryLabel="Get in touch"
          secondaryHref="/support"
        />
    </SitePageLayout>
  );
}
