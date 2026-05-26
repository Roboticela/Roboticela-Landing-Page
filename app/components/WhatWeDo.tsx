'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Microscope, Star } from 'lucide-react';

import { easeOut } from './animations';

const services = [
  {
    icon: Code2,
    title: 'Software that thinks ahead',
    description: 'Apps and platforms that don\'t just work—they anticipate what you need.',
  },
  {
    icon: Cpu,
    title: 'Hardware that feels human',
    description: 'Physical products designed with the same care you\'d expect from your closest friend.',
  },
  {
    icon: Microscope,
    title: 'Research that shapes tomorrow',
    description: 'Our labs are alive with experiments into things that don\'t even have names yet.',
  },
  {
    icon: Star,
    title: 'Experiences that matter',
    description: 'From your morning routine to your biggest dreams, we\'re building tools that fit your life perfectly.',
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
    transition: { duration: 0.6, ease: easeOut }
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
          viewport={{ once: true, margin: "-100px" }}
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
