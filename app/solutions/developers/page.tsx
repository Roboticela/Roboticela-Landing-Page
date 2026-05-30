'use client';

import { Code2, Cpu, Terminal } from 'lucide-react';

import SolutionPageTemplate from '../../components/SolutionPageTemplate';

export default function DevelopersPage() {
  return (
    <SolutionPageTemplate
      eyebrow="Solutions"
      title="For"
      titleAccent="Developers."
      description="Build faster with tools, simulators, and platforms made for modern development."
      icon={Code2}
      features={[
        {
          icon: Terminal,
          title: 'Developer Tools',
          description: 'Utilities that speed up workflows and reduce friction.',
        },
        {
          icon: Cpu,
          title: 'Simulators & APIs',
          description: 'Test, learn, and integrate with interactive environments.',
        },
        {
          icon: Code2,
          title: 'Open Ecosystem',
          description: 'Products designed to fit into how you already build.',
        },
      ]}
      ctaTitle="Browse Developer Tools"
      ctaDescription="See what's available now and what's coming next from Roboticela."
      ctaLabel="Browse Tools"
      ctaHref="/products"
    />
  );
}
