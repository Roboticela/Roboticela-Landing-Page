'use client';

import PageCta from '../components/PageCta';
import PageHero from '../components/PageHero';
import PageSectionHeader from '../components/PageSectionHeader';
import SitePageLayout from '../components/SitePageLayout';
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
    <SitePageLayout>
      <PageHero
        eyebrow="Careers"
        title="Build the Future"
        titleAccent="With Us."
        description="Whether you're a creator, thinker, builder, or dreamer—help us redefine what's possible at Roboticela."
        icon={Rocket}
        paddingBottom="lg"
      />

        {/* Values */}
        <section className="max-w-6xl mx-auto mb-28">
          <PageSectionHeader eyebrow="Why Join Us" title="Life at Roboticela" />

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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
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
                  <Link
                    href="/support"
                    className="px-6 py-3 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2 shrink-0"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
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

        <PageCta
          title="Don't see a perfect fit?"
          description="We're always interested in meeting talented people. Share who you are and how you'd like to contribute—we'd love to hear from you."
          primaryLabel="Get in Touch"
          primaryHref="/support"
          secondaryLabel="About Roboticela"
          secondaryHref="/about"
        />
    </SitePageLayout>
  );
}
