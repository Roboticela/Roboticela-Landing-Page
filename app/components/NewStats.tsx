'use client';

import { motion } from 'framer-motion';
import { Infinity, Clock, Award, Users } from 'lucide-react';

import { easeOut } from './animations';

const stats = [
  {
    icon: Infinity,
    value: '∞',
    label: "Categories we'll enter",
  },
  {
    icon: Clock,
    value: '24/7',
    label: "How often we're thinking",
  },
  {
    icon: Award,
    value: '100%',
    label: 'What we give, every time',
  },
  {
    icon: Users,
    value: 'Millions',
    label: 'People quietly trusting us',
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
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function NewStats() {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden bg-accent/20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            By the Numbers
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="text-center group"
            >
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-10 h-10 text-primary" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-foreground mb-4">{stat.value}</div>
              <p className="text-foreground/70 text-lg leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
