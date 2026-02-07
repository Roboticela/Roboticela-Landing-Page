'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart, Rocket, Wrench } from 'lucide-react';
import Image from 'next/image';

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="flex justify-center mb-8">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <Image src="/Logo.png" alt="Roboticela" fill className="object-contain" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Innovation Without Boundaries
            </h1>
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

          {/* Philosophy */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center tracking-tight">
              How We Think
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-card/40 backdrop-blur-sm rounded-3xl p-8 border border-border/40"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <principle.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">{principle.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-lg">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/20 text-center"
          >
            <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-8">
              <Target className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Unlimited by Design</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground/70 leading-relaxed mb-8">
              <p>
                At Roboticela, we believe the only limit is imagination.
              </p>
              <p>
                That&apos;s why we refuse to be defined by a single industry, a single product, or a single vision of the future. We&apos;re building everything, for everyone, without compromise.
              </p>
            </div>
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-border/40">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Promise</h3>
              <div className="space-y-3 text-lg text-foreground/70">
                <p>To never stop innovating.</p>
                <p>To never settle for good enough.</p>
                <p>To always put you first.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
