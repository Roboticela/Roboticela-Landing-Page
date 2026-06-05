'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Microscope, Star } from 'lucide-react';

import { easeOut } from './animations';

const services = [
  {
    icon: Code2,
    title: 'Software that thinks quietly.',
    description:
      "It doesn't announce itself. It just makes everything feel easier. You'll notice it by how much you don't notice it.",
  },
  {
    icon: Cpu,
    title: 'Hardware that belongs in your hands.',
    description:
      "Physical things made with the same quiet care you'd expect from something built to last.",
  },
  {
    icon: Microscope,
    title: "Research that hasn't been named yet.",
    description:
      "Our labs work on things that don't have categories. Most of what we discover there doesn't leave for years.",
  },
  {
    icon: Star,
    title: 'Experiences that stay with you.',
    description:
      "Not impressive for a moment. Valuable for a lifetime. That's the difference we care about.",
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
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function WhatWeDo() {
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
            Everywhere You Need Us
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="group bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/40 hover:border-primary/40 transition-all duration-300"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed text-lg">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
