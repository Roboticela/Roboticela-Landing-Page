'use client';

import { motion } from 'framer-motion';

import { easeOut } from './animations';

const qualities = [
  'Something beautiful, quietly.',
  'Something crafted, not assembled.',
  'Something trusted, without needing to ask for it.',
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight">
            The difference is felt, not explained.
          </h2>
          <div className="space-y-6 text-xl md:text-2xl text-foreground/70 leading-relaxed mb-12">
            <p>Some products get used.</p>
            <p>
              Some get chosen — again and again, over everything else, without a second thought.
            </p>
            <p className="text-foreground font-medium">That&apos;s what we build toward. Always.</p>
          </div>

          <ul className="space-y-4 text-lg md:text-xl text-foreground/70 text-left max-w-xl mx-auto">
            {qualities.map((quality) => (
              <li key={quality} className="flex items-start gap-3">
                <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                <span>{quality}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
