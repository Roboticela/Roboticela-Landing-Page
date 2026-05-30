'use client';

import { motion } from 'framer-motion';
import { Code2, GraduationCap, Palette, User } from 'lucide-react';

import { easeOut } from '../../components/animations';
import PageCta from '../../components/PageCta';
import PageHero from '../../components/PageHero';
import SitePageLayout from '../../components/SitePageLayout';

const solutions = [
  {
    icon: Code2,
    title: 'Developer Tools',
    description: 'Build faster with our suite of development tools and simulators.',
    products: ['OSI Model Simulator'],
  },
  {
    icon: Palette,
    title: 'Creative Tools',
    description: 'Design and create beautiful products with professional-grade tools.',
    products: ['Roboticela Iconify'],
  },
  {
    icon: GraduationCap,
    title: 'Learning Resources',
    description: 'Master new skills with our interactive educational platforms.',
    products: ['OSI Model Simulator', 'Documentation', 'Tutorials'],
  },
];

export default function IndividualsPage() {
  return (
    <SitePageLayout>
      <PageHero
        eyebrow="Solutions"
        title="For"
        titleAccent="Individuals."
        description="Powerful tools designed for creators, learners, and innovators who think different."
        icon={User}
      />

      <section className="max-w-6xl mx-auto mb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.65, ease: easeOut }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/40 hover:border-primary/40 transition-all duration-300"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <solution.icon className="w-7 h-7 text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
              <p className="text-foreground/65 leading-relaxed mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.products.map((product) => (
                  <li key={product} className="text-foreground/60 text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    {product}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <PageCta
        title="Ready to Get Started?"
        description="Explore our products and start building your next big idea today."
        primaryLabel="Browse Products"
        primaryHref="/products"
      />
    </SitePageLayout>
  );
}
