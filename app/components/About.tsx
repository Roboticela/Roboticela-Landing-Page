'use client';

import { motion } from 'framer-motion';
import { Wrench, Lightbulb, Heart, Rocket } from 'lucide-react';

import { easeOut } from './animations';

const principles = [
  {
    icon: Lightbulb,
    title: 'Question everything',
    description: 'We challenge assumptions and ask "why not?" when others say "that\'s just how it\'s done."',
  },
  {
    icon: Heart,
    title: 'Design for humans',
    description: 'Technology should adapt to people, not the other way around. Every decision starts with you.',
  },
  {
    icon: Wrench,
    title: 'Craft, don\'t manufacture',
    description: 'We pour care into every detail because you deserve products that feel personal, not mass-produced.',
  },
  {
    icon: Rocket,
    title: 'Never stop exploring',
    description: 'Curiosity drives us. Today\'s impossible is tomorrow\'s breakthrough.',
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
    transition: { duration: 0.6, ease: easeOut }
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background decoration */}
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
            Innovation Without Boundaries
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl text-foreground/70 leading-relaxed">
            <p>
              Roboticela isn&apos;t just a company—it&apos;s a vision of what&apos;s possible when innovation knows no boundaries.
            </p>
            <p>
              The name itself tells our story: <span className="text-foreground font-semibold">Robot meets Cell</span>. Imagine a single cell with the power of a robot, capable of anything a human can do. That&apos;s the spirit we bring to everything we create.
            </p>
            <p>
              We don&apos;t pick lanes. We don&apos;t do categories. While others choose between software or hardware, digital or physical, we choose all of it. <span className="text-foreground font-semibold">Because the future doesn&apos;t fit in boxes, and neither do we.</span>
            </p>
          </div>
        </motion.div>

        {/* Philosophy Section */}
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
            viewport={{ once: true, margin: "-100px" }}
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
