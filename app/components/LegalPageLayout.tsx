'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

import { easeOut } from './animations';
import PageHero from './PageHero';
import SitePageLayout from './SitePageLayout';

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
    <SitePageLayout>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        titleAccent={titleAccent}
        description={description}
        icon={Icon}
        iconGlow={false}
        paddingBottom="sm"
      />

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
    </SitePageLayout>
  );
}
