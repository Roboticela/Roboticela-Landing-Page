'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
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
    title: 'Question Everything',
    description: 'We challenge assumptions and ask "why not?" when others say "that\'s just how it\'s done." Every convention is an invitation to do better.',
  },
  {
    icon: Heart,
    title: 'Design for Humans',
    description: 'Technology should adapt to people, not the other way around. Every decision starts with a simple question: does this make someone\'s life better?',
  },
  {
    icon: Wrench,
    title: 'Craft, Don\'t Manufacture',
    description: 'We pour care into every detail because you deserve products that feel personal, not mass-produced. Quality isn\'t a feature—it\'s our standard.',
  },
  {
    icon: Rocket,
    title: 'Never Stop Exploring',
    description: 'Curiosity drives us. Today\'s impossible is tomorrow\'s breakthrough. Our labs are alive with research into things that don\'t even have names yet.',
  },
  {
    icon: Globe,
    title: 'No Limits, No Categories',
    description: 'We don\'t pick lanes. Software, hardware, e-commerce, research—we operate across all of it. The future is boundless and so are we.',
  },
  {
    icon: Star,
    title: 'Preferred by Choice',
    description: 'People don\'t just use Roboticela. They prefer it, trust it, and choose it over everything else—because they know we\'re building experiences that matter.',
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
  'To never stop innovating.',
  'To never settle for good enough.',
  'To always put you first.',
  'To build what others say is impossible.',
  'To craft experiences, not just products.',
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
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pb-24 px-4">

        {/* ── Hero ── */}
        <section className="relative pt-40 pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="flex justify-center mb-10"
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-6 rounded-full bg-primary/15 blur-2xl"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
                  transition={{ duration: 3, repeat: 1e10, ease: 'easeInOut' }}
                />
                <div className="relative w-32 h-32 md:w-44 md:h-44">
                  <Image src="/Logo.png" alt="Roboticela" fill sizes="(max-width: 768px) 128px, 176px" className="object-contain" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: easeOut }}
            >
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">About Roboticela</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight leading-none">
                Think Different.<br />
                <span className="text-primary">Build Everything.</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
                A company with no category. No limits. No lanes.
              </p>
            </motion.div>
          </div>
        </section>

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
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                  Robot <span className="text-foreground/30">+</span> Cell
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                  Roboticela is a fusion of two words: <span className="text-foreground font-semibold">Robot</span> and <span className="text-foreground font-semibold">Cell</span>. It means a cell with robotic capabilities—an artificial cell with all the abilities of a human, powered by intelligence and purpose.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  That&apos;s the spirit we bring to everything we create. Not just smart—alive. Not just functional—beautiful. Not just a product—an experience.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                {[
                  { word: 'Robot', meaning: 'Intelligent. Precise. Capable. Built to do the extraordinary.' },
                  { word: 'Cell', meaning: 'The smallest unit of life. The foundation of everything.' },
                  { word: 'Roboticela', meaning: 'A cell with the power of a robot—unlimited by design.' },
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 tracking-tight">
              Innovation Without Boundaries
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
              'Roboticela isn\'t just a company—it\'s a vision of what\'s possible when innovation knows no boundaries. We started with a simple but radical idea: what if a company refused to be defined by any single category?',
              'We don\'t pick lanes. We don\'t do categories. While others choose between software or hardware, digital or physical, we choose all of it. Because the future doesn\'t fit in boxes, and neither do we.',
              'From the apps on your phone to the products in your hands, from cutting-edge research to everyday solutions—Roboticela is there. We\'re building the tools, technologies, and experiences that don\'t just work, but work beautifully.',
              'People don\'t just use Roboticela. They prefer it. They trust it. They choose it over everything else because they know we\'re not just making products—we\'re crafting experiences that matter.',
              'We\'re not satisfied with what exists. We\'re obsessed with what\'s next. Our labs are alive with research into things that don\'t even have names yet. Tomorrow\'s breakthroughs? We\'re working on them today.',
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              We Work On Everything
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
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">How We Think</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
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
                Why We Exist
              </h2>
              <p className="text-foreground/70 leading-relaxed text-lg mb-6">
                To build the tools, technologies, and experiences of tomorrow—today. To prove that a company can work on <em>everything</em> and still do it beautifully.
              </p>
              <p className="text-foreground/70 leading-relaxed text-lg">
                We exist to push the edge of what&apos;s possible and bring those possibilities into the hands of real people.
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
                What We Stand For
              </h2>
              <ul className="space-y-4">
                {promises.map((promise) => (
                  <li key={promise} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-foreground/70 text-lg leading-relaxed">{promise}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ── Tagline CTA ── */}
        <section className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-[3rem] p-14 md:p-20 border border-primary/20 text-center overflow-hidden"
          >
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
            </div>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-6">The Bottom Line</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Roboticela.
            </h2>
            <p className="text-3xl md:text-4xl font-semibold text-primary mb-10">
              Unlimited by design.
            </p>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              No category. No ceiling. Just a relentless commitment to building what&apos;s next—beautifully, boldly, and for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <motion.button
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-primary/20"
                >
                  Explore Our Products
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/support">
                <motion.button
                  className="px-8 py-4 bg-transparent hover:bg-card/60 text-foreground rounded-full font-semibold text-lg transition-all duration-300 border border-border/40"
                >
                  Get in Touch
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
