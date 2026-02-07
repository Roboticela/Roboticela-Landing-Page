'use client';

import { motion } from 'framer-motion';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const technologies = [
  { name: 'React', desc: 'UI & SPAs' },
  { name: 'Next.js', desc: 'Web & SSR' },
  { name: 'TypeScript', desc: 'Type Safety' },
  { name: 'Node.js', desc: 'Backend & APIs' },
  { name: 'Tailwind CSS', desc: 'Styling' },
  { name: 'PostgreSQL', desc: 'Databases' },
  { name: 'REST & GraphQL', desc: 'APIs' },
  { name: 'Cloud & DevOps', desc: 'Deploy & Scale' },
];

export default function TechnologyStack() {
  return (
    <section id="tech-stack" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Built with Modern Technology
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            We use proven, scalable tools so your product stays fast and maintainable
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="bg-card/40 backdrop-blur-md p-6 rounded-xl text-center transition-colors border border-border/40 hover:border-primary/40"
            >
              <p className="text-primary font-semibold text-lg mb-1">{tech.name}</p>
              <p className="text-foreground/60 text-sm">{tech.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
