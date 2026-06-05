'use client';

import { motion } from 'framer-motion';
import { Wrench, Lightbulb, Heart, Rocket } from 'lucide-react';

import { easeOut } from './animations';

const principles = [
  {
    icon: Lightbulb,
    title: 'Ask the question nobody asked.',
    description: 'The most important breakthroughs start where everyone stopped looking. We never stop looking.',
  },
  {
    icon: Heart,
    title: 'Build for the person, not the product.',
    description: "A tool that doesn't feel human isn't finished. We don't ship things that aren't finished.",
  },
  {
    icon: Wrench,
    title: 'Care is the material.',
    description: 'You can feel when something was made with attention. We make sure you always feel it.',
  },
  {
    icon: Rocket,
    title: 'Curiosity is the engine.',
    description: "We don't know what we'll build next. That's not uncertainty — that's how it's supposed to be.",
  },
];

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            The name means something.
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl text-foreground/70 leading-relaxed">
            <p>
              Robot. Cell. One word. One idea.
              <br />
              The smallest unit of life, carrying the intelligence of a machine.
            </p>
            <p>
              We didn&apos;t build a company. We built a cell — one that thinks, creates, adapts, and grows into
              whatever it needs to become.
            </p>
            <p>
              No industry owns us. No category holds us.{' '}
              <span className="text-foreground font-semibold">
                That&apos;s not a position statement. It&apos;s just the truth.
              </span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center tracking-tight">
            How We Think
          </h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-card/40 backdrop-blur-sm rounded-3xl p-8 border border-border/40 hover:border-primary/40 transition-all duration-300"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <principle.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-2xl font-semibold text-foreground mb-4">{principle.title}</h4>
                <p className="text-foreground/70 leading-relaxed text-lg">{principle.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
