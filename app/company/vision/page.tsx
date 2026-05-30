'use client';

import SitePageLayout from '../../components/SitePageLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Compass,
  Cpu,
  FlaskConical,
  Globe2,
  Infinity,
  Lightbulb,
  Rocket,
  ShoppingBag,
  Layers,
  Target,
} from 'lucide-react';

import { easeOut } from '../../components/animations';
import { productCategories } from '../../data/productCategories';

const pillars = [
  {
    icon: Lightbulb,
    title: 'The Future is Limitless',
    description:
      'We believe the only limit is imagination. That\'s why we refuse to be defined by a single industry, product, or vision of the future.',
    accent: 'from-amber-500/10 to-transparent',
  },
  {
    icon: Rocket,
    title: 'Building Everything',
    description:
      'We\'re building everything, for everyone, without compromise—from software to hardware, research to experiences.',
    accent: 'from-sky-500/10 to-transparent',
  },
  {
    icon: Target,
    title: 'Always Innovating',
    description:
      'To never stop innovating. To never settle for good enough. To always put you first. This is our promise.',
    accent: 'from-primary/15 to-transparent',
  },
];

const promises = [
  'To never stop innovating.',
  'To never settle for good enough.',
  'To always put you first.',
  'To build what others say is impossible.',
  'To craft experiences, not just products.',
];

const horizons = [
  {
    year: 'Today',
    title: 'Ship what matters',
    text: 'Beautiful products in the wild—tools people reach for because they work and feel right.',
  },
  {
    year: 'Next',
    title: 'Expand without boxes',
    text: 'New categories, new mediums, new problems—same obsession with craft and clarity.',
  },
  {
    year: 'Beyond',
    title: 'Invent the unnamed',
    text: 'Research and labs turning tomorrow\'s ideas into things you can hold, use, and love.',
  },
];

const categoryIcons: Record<string, typeof Cpu> = {
  software: Cpu,
  hardware: Globe2,
  'e-commerce': ShoppingBag,
  enterprise: Compass,
  research: FlaskConical,
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeOut } },
};

export default function VisionPage() {
  return (
    <SitePageLayout>
        {/* Hero */}
        <section className="relative pt-40 pb-28 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/3 w-[520px] h-[520px] bg-primary/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto text-center px-2">
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
                <div className="relative bg-card/50 backdrop-blur-md border border-border/40 rounded-2xl p-5 md:p-6">
                  <Target className="w-10 h-10 md:w-11 md:h-11 text-primary mx-auto" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: easeOut }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-5">
                Our Vision
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight leading-tight max-w-5xl lg:max-w-6xl mx-auto text-balance">
                Unlimited{' '}
                <span className="text-primary">by Design.</span>
              </h1>
              <p className="text-base md:text-lg text-foreground/60 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
                A north star for a company with no category—only conviction, craft, and the courage to build across every frontier.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Manifesto */}
        <section className="max-w-4xl mx-auto mb-28">
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="relative text-center px-6 md:px-12"
          >
            <span className="absolute left-0 top-0 text-6xl md:text-8xl font-serif text-primary/20 leading-none select-none" aria-hidden>
              &ldquo;
            </span>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-snug md:leading-relaxed">
              At Roboticela, we believe the only limit is imagination. We refuse one lane, one label, or one version of the future—we build for everyone, everywhere, without compromise.
            </p>
            <footer className="mt-8 flex items-center justify-center gap-3 text-foreground/50">
              <div className="relative w-8 h-8">
                <Image src="/Logo.png" alt="" fill sizes="32px" className="object-contain opacity-80" />
              </div>
              <span className="text-sm font-medium tracking-wide">The Roboticela Vision</span>
            </footer>
          </motion.blockquote>
        </section>

        {/* Pillars — bento */}
        <section className="max-w-6xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="text-center mb-14"
          >
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">What Guides Us</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Three Pillars of Our Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.12, duration: 0.7, ease: easeOut }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`group relative overflow-hidden rounded-[2rem] p-8 md:p-10 border border-border/40 bg-gradient-to-br ${pillar.accent} bg-card/50 backdrop-blur-sm hover:border-primary/35 transition-colors duration-300 ${
                  index === 0 ? 'lg:row-span-1' : ''
                }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
                <div className="relative">
                  <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <pillar.icon className="w-7 h-7 text-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">{pillar.title}</h3>
                  <p className="text-foreground/65 text-lg leading-relaxed">{pillar.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Horizons timeline */}
        <section className="max-w-6xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="text-center mb-14"
          >
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Where We&apos;re Headed</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              The Road Ahead
            </h2>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {horizons.map((step, index) => (
                <motion.div
                  key={step.year}
                  variants={itemVariants}
                  className="relative text-center md:text-left"
                >
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                    <div className="md:mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-primary/15 border border-primary/30 text-primary font-bold text-sm shrink-0 z-10">
                      {index + 1}
                    </div>
                    <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/40 flex-1 md:flex-none w-full hover:border-primary/30 transition-colors">
                      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">{step.year}</p>
                      <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                      <p className="text-foreground/65 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Categories we build toward */}
        <section className="max-w-6xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="text-center mb-14"
          >
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">No Single Lane</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
              Every Category. One Vision.
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Our vision spans the full stack of human need—from code on a screen to devices in your hands.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {productCategories.map((category) => {
              const Icon = categoryIcons[category.slug] ?? Layers;
              return (
                <motion.div key={category.slug} variants={itemVariants}>
                  <Link
                    href={`/products/${category.slug}`}
                    className="group block h-full bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/40 hover:border-primary/40 transition-all duration-300 text-center"
                  >
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground text-sm md:text-base">{category.name}</p>
                  </Link>
                </motion.div>
              );
            })}
            <motion.div variants={itemVariants}>
              <div className="h-full min-h-[140px] bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20 flex flex-col items-center justify-center text-center gap-3">
                <Infinity className="w-8 h-8 text-primary" />
                <p className="font-semibold text-foreground text-sm">And everything else</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Mission + Promise */}
        <section className="max-w-6xl mx-auto mb-32">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-12 border border-primary/25 bg-gradient-to-br from-primary/12 via-primary/5 to-transparent"
            >
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative">
                <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Mission</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
                  Why We Exist
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                  To prove that a company can work on <em>everything</em> and still do it beautifully—to push what&apos;s possible and place it in real hands.
                </p>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  The future doesn&apos;t fit in boxes. Neither do we.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="bg-card/50 backdrop-blur-sm rounded-[2.5rem] p-10 md:p-12 border border-border/40"
            >
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Our Promise</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 tracking-tight">
                What We Stand For
              </h2>
              <ul className="space-y-4">
                {promises.map((promise) => (
                  <li key={promise} className="flex gap-3">
                    <span className="flex h-7 shrink-0 items-center" aria-hidden>
                      <span className="size-2 rounded-full bg-primary" />
                    </span>
                    <span className="text-foreground/70 text-lg leading-relaxed">{promise}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Closing CTA */}
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
            <Compass className="w-10 h-10 text-primary mx-auto mb-6 opacity-80" strokeWidth={1.5} />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
              Join Our Journey
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Be part of something bigger. Help us build a future that&apos;s unlimited by design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers">
                <motion.button
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-primary/20"
                >
                  Explore Careers
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  className="px-8 py-4 bg-transparent hover:bg-card/60 text-foreground rounded-full font-semibold text-lg transition-all duration-300 border border-border/40 inline-flex items-center gap-2"
                >
                  Our Story
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </section>
    </SitePageLayout>
  );
}
