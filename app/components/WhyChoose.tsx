'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const benefits = [
  {
    title: 'Client First',
    description: 'We align with your goals and success metrics. Clear communication, regular updates, and no surprises.',
    delay: 0,
  },
  {
    title: 'Quality & Craft',
    description: 'Clean code, solid architecture, and best practices. We build for the long term, not just the launch.',
    delay: 0,
  },
  {
    title: 'Transparent Process',
    description: 'Fixed or time-and-materials—you choose. We scope clearly and keep you in the loop at every step.',
    delay: 0.1,
  },
  {
    title: 'Ongoing Partnership',
    description: 'Post-launch support, iterations, and scaling. We stay with you as your product and business grow.',
    delay: 0.1,
  },
];

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Why Work With Us?
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            We combine technical excellence with a partnership mindset
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-card/40 backdrop-blur-md rounded-xl p-8 border border-border/40"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: benefit.delay }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Check className="text-primary w-6 h-6" />
                {benefit.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
