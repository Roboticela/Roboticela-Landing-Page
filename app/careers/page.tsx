'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Heart, Rocket, Users, Zap } from 'lucide-react';
import Link from 'next/link';

import { easeOut } from '../components/animations';
import { jobOpenings } from '../data/careers';

const values = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'Work on projects that push boundaries and help shape what comes next.',
  },
  {
    icon: Users,
    title: 'Diverse Team',
    description: 'Collaborate with curious people who care about craft, clarity, and impact.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'We believe great work happens when you have space to recharge and think.',
  },
  {
    icon: Zap,
    title: 'Room to Grow',
    description: 'Learn continuously and take on challenges that match your ambition.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeOut } },
};

export default function CareersPage() {
  const hasOpenings = jobOpenings.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pb-24 px-4">
        {/* Hero */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, ease: easeOut }}
              className="flex justify-center mb-10"
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-8 rounded-full bg-primary/15 blur-2xl"
                  animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }}
                  transition={{ duration: 3.2, repeat: 1e10, ease: 'easeInOut' }}
                />
                <div className="relative bg-card/50 backdrop-blur-md border border-border/40 rounded-3xl p-6 md:p-8">
                  <Rocket className="w-14 h-14 md:w-16 md:h-16 text-primary mx-auto" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: easeOut }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-5">
                Careers
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight leading-[1.05]">
                Build the Future
                <br />
                <span className="text-primary">With Us.</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
                Whether you&apos;re a creator, thinker, builder, or dreamer—help us redefine what&apos;s possible at Roboticela.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-6xl mx-auto mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="text-center mb-14"
          >
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Why Join Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Life at Roboticela
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/40 hover:border-primary/40 transition-all duration-300 text-center"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-foreground/65 leading-relaxed text-sm md:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Open positions */}
        <section className="max-w-4xl mx-auto mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Opportunities</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Open Positions
            </h2>
          </motion.div>

          {hasOpenings ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {jobOpenings.map((opening) => (
                <motion.article
                  key={opening.id}
                  variants={itemVariants}
                  className="bg-card/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-border/40 hover:border-primary/40 transition-all duration-300 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{opening.title}</h3>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-foreground/70">
                      <span>{opening.department}</span>
                      <span className="text-foreground/30" aria-hidden>
                        •
                      </span>
                      <span>{opening.location}</span>
                      <span className="text-foreground/30" aria-hidden>
                        •
                      </span>
                      <span>{opening.type}</span>
                    </div>
                  </div>
                  <Link href="/support">
                    <motion.button
                      className="px-6 py-3 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2 shrink-0"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="text-center py-16 md:py-20 px-8 bg-card/50 backdrop-blur-sm rounded-[2.5rem] border border-border/40"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">No open roles right now</h3>
              <p className="text-lg text-foreground/60 max-w-md mx-auto leading-relaxed mb-8">
                We&apos;re not hiring for specific positions at the moment. Check back soon—we&apos;re always growing.
              </p>
              <Link href="/company/vision">
                <span className="inline-flex items-center gap-1 text-primary font-medium hover:underline">
                  Read our vision
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          )}
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="relative text-center rounded-[3rem] p-14 md:p-20 border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent overflow-hidden"
          >
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-3xl" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Don&apos;t see a perfect fit?
            </h2>
            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              We&apos;re always interested in meeting talented people. Share who you are and how you&apos;d like to contribute—we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/support">
                <motion.button
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-primary/20"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  className="px-8 py-4 bg-transparent hover:bg-card/60 text-foreground rounded-full font-semibold text-lg transition-all duration-300 border border-border/40 inline-flex items-center gap-2"
                >
                  About Roboticela
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
