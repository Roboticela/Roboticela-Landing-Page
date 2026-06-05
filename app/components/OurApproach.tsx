'use client';

import { motion } from 'framer-motion';
import { Target, Infinity, TestTube, MessageCircle } from 'lucide-react';

import { easeOut } from './animations';

const approaches = [
  {
    icon: Target,
    title: 'Understand the problem first.',
    description:
      "Solutions invented before the problem is understood tend to solve the wrong thing. We sit with the problem.",
  },
  {
    icon: Infinity,
    title: 'Build anywhere it matters.',
    description:
      "Software, hardware, research, experience — if it improves a life, that's our domain.",
  },
  {
    icon: TestTube,
    title: "Push it until it's right.",
    description:
      "What reaches you has already survived a version of itself that wasn't good enough.",
  },
  {
    icon: MessageCircle,
    title: 'Listen like it changes everything.',
    description:
      "Because it does. What you tell us shapes what we build next. That's not a courtesy — it's the process.",
  },
];

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function OurApproach() {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            The Roboticela Way
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              whileHover={{ x: 8, transition: { duration: 0.3 } }}
              className="group flex gap-6 bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/40 hover:border-primary/40 transition-all duration-300"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <approach.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{approach.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-lg">{approach.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
