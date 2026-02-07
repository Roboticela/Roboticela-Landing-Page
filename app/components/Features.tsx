'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Layers,
  Lock,
  Sliders,
  Eye,
  Rocket,
  Download,
} from 'lucide-react';

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

const features = [
  {
    icon: Code2,
    title: 'Custom Development',
    description: 'Tailored software built for your unique business needs. From web apps to mobile and enterprise systems.',
    color: 'text-blue-500',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description: 'Systems designed to grow with you. Clean architecture and modern patterns for long-term maintainability.',
    color: 'text-green-500',
  },
  {
    icon: Lock,
    title: 'Security First',
    description: 'Best practices for authentication, encryption, and compliance. Your data and your users stay protected.',
    color: 'text-cyan-500',
  },
  {
    icon: Sliders,
    title: 'Flexible Integration',
    description: 'APIs, third-party services, and legacy systems. We connect your stack and streamline workflows.',
    color: 'text-purple-500',
  },
  {
    icon: Eye,
    title: 'Transparent Process',
    description: 'Clear communication, regular updates, and collaborative planning. You stay in the loop from day one.',
    color: 'text-orange-500',
  },
  {
    icon: Rocket,
    title: 'Fast Time-to-Market',
    description: 'Agile delivery with iterative releases. Launch MVPs quickly and evolve based on real feedback.',
    color: 'text-pink-500',
  },
  {
    icon: Download,
    title: 'Ongoing Support',
    description: 'Post-launch maintenance, updates, and scaling. We stay with you after the project ships.',
    color: 'text-teal-500',
  },
];

function FeatureCard({ icon: Icon, title, description, color }: (typeof features)[0]) {
  return (
    <motion.div
      variants={itemAnimation}
      whileHover={{ scale: 1.02 }}
      className="bg-card/40 backdrop-blur-md rounded-xl p-6 border border-border/40 hover:border-primary/40 transition-all duration-300"
    >
      <div className={`${color} mb-4`}>
        <Icon className="w-12 h-12" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            End-to-end software solutions that drive growth and efficiency
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
