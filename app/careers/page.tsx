'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Rocket, Users, Heart, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'Work on cutting-edge projects that push boundaries and shape the future.',
  },
  {
    icon: Users,
    title: 'Diverse Team',
    description: 'Join a community of talented individuals from around the world.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'We believe great work happens when you have time to recharge.',
  },
  {
    icon: Zap,
    title: 'Growth Opportunities',
    description: 'Continuous learning and development to help you reach your potential.',
  },
];

const openings = [
  {
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Remote / Hybrid',
    type: 'Full-time',
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote / Hybrid',
    type: 'Full-time',
  },
  {
    title: 'Hardware Engineer',
    department: 'Hardware',
    location: 'On-site',
    type: 'Full-time',
  },
  {
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Research Scientist',
    department: 'Research',
    location: 'On-site / Hybrid',
    type: 'Full-time',
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Be Part of Something Bigger
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-8">
              Join a team that&apos;s redefining what&apos;s possible. Whether you&apos;re a creator, thinker, builder, or dreamer, there&apos;s a place for you at Roboticela.
            </p>
          </motion.div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Why Join Roboticela
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Open Positions
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {openings.map((opening, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/40 hover:border-primary/40 transition-all duration-300 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{opening.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-foreground/70">
                      <span>{opening.department}</span>
                      <span>•</span>
                      <span>{opening.location}</span>
                      <span>•</span>
                      <span>{opening.type}</span>
                    </div>
                  </div>
                  <Link href="/support">
                    <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold transition-all duration-300 flex items-center gap-2">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Don&apos;t see a perfect fit?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented people. Send us your resume and let&apos;s talk about how you can contribute to our mission.
            </p>
            <Link href="/support">
              <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300">
                Get in Touch
              </button>
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
