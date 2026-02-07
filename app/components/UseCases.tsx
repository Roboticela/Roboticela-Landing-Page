'use client';

import { motion } from 'framer-motion';
import { Building2, Rocket, Briefcase, Heart, Code2, BarChart3 } from 'lucide-react';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const useCases = [
  {
    icon: Building2,
    title: 'Enterprises',
    description: 'Custom systems, integrations, and digital transformation. Scalable solutions that fit your organization.',
    color: 'text-blue-500',
  },
  {
    icon: Rocket,
    title: 'Startups',
    description: 'MVPs and product iterations that ship fast. Validate ideas and scale when you\'re ready.',
    color: 'text-purple-500',
  },
  {
    icon: Briefcase,
    title: 'Agencies & Studios',
    description: 'White-label delivery, client projects, and reliable tech partners. We support your team.',
    color: 'text-green-500',
  },
  {
    icon: Code2,
    title: 'Product Teams',
    description: 'Extra capacity, new features, or full rewrites. We slot into your process and ship with you.',
    color: 'text-orange-500',
  },
  {
    icon: BarChart3,
    title: 'SaaS & Platforms',
    description: 'Multi-tenant apps, billing, analytics, and growth. Build once, scale with your users.',
    color: 'text-pink-500',
  },
  {
    icon: Heart,
    title: 'Nonprofits & Impact',
    description: 'Mission-driven software at fair rates. We help you reach more people and measure impact.',
    color: 'text-red-500',
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Who We Work With
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            From startups to enterprises—we adapt to your context and goals
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              whileHover={{ scale: 1.02 }}
              className="bg-card/40 backdrop-blur-md rounded-xl p-6 border border-border/40 hover:border-primary/40 transition-all duration-300 h-full"
            >
              <useCase.icon className={`w-12 h-12 mb-4 ${useCase.color}`} />
              <h3 className="text-xl font-semibold text-foreground mb-2">{useCase.title}</h3>
              <p className="text-foreground/70">{useCase.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
