'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

import { easeOut } from './animations';
import PageCta from './PageCta';
import PageHero from './PageHero';
import SitePageLayout from './SitePageLayout';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type SolutionPageTemplateProps = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  icon: LucideIcon;
  features: Feature[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
  ctaHref: string;
};

export default function SolutionPageTemplate({
  eyebrow,
  title,
  titleAccent,
  description,
  icon,
  features,
  ctaTitle,
  ctaDescription,
  ctaLabel,
  ctaHref,
}: SolutionPageTemplateProps) {
  return (
    <SitePageLayout>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        titleAccent={titleAccent}
        description={description}
        icon={icon}
      />

      <section className="max-w-6xl mx-auto mb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.65, ease: easeOut }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/40 hover:border-primary/40 transition-all duration-300 text-center"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-7 h-7 text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-foreground/65 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <PageCta
        title={ctaTitle}
        description={ctaDescription}
        primaryLabel={ctaLabel}
        primaryHref={ctaHref}
      />
    </SitePageLayout>
  );
}
