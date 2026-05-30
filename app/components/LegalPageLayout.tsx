'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { easeOut } from './animations';

function formatDate(date: Date): string {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

type LegalPageLayoutProps = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description: string;
  icon: LucideIcon;
  effectiveDate: Date;
  lastUpdated: Date;
  children: React.ReactNode;
};

export default function LegalPageLayout({
  eyebrow,
  title,
  titleAccent,
  description,
  icon: Icon,
  effectiveDate,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-full">
      <Navbar />

      <main className="pb-24 px-4">
        <section className="relative pt-40 pb-12 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/3 w-[480px] h-[480px] bg-primary/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[360px] h-[360px] bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, ease: easeOut }}
              className="flex justify-center mb-8"
            >
              <div className="relative bg-card/50 backdrop-blur-md border border-border/40 rounded-3xl p-5 md:p-6">
                <Icon className="w-12 h-12 md:w-14 md:h-14 text-primary mx-auto" strokeWidth={1.5} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.8, ease: easeOut }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-4">
                {eyebrow}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight leading-tight">
                {title}
                {titleAccent && (
                  <>
                    <br />
                    <span className="text-primary">{titleAccent}</span>
                  </>
                )}
              </h1>
              <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto">
          <motion.article
            className="bg-card/60 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 border border-border/40"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: easeOut }}
          >
            <div className="rounded-2xl bg-background/60 border border-border/40 p-4 md:p-5 mb-8 text-sm text-foreground/60 space-y-1">
              <p>
                <span className="font-semibold text-foreground">Effective Date: </span>
                {formatDate(effectiveDate)}
              </p>
              <p>
                <span className="font-semibold text-foreground">Last Updated: </span>
                {formatDate(lastUpdated)}
              </p>
            </div>

            <hr className="border-border/40 mb-8" />

            <div className="text-base md:text-lg text-foreground/70 leading-relaxed space-y-6">
              {children}
            </div>
          </motion.article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
