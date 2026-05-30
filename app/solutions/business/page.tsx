'use client';

import { Briefcase, Building, Shield, TrendingUp } from 'lucide-react';

import SolutionPageTemplate from '../../components/SolutionPageTemplate';

export default function BusinessPage() {
  return (
    <SolutionPageTemplate
      eyebrow="Solutions"
      title="For"
      titleAccent="Business."
      description="Enterprise-grade solutions that scale with your ambitions."
      icon={Briefcase}
      features={[
        {
          icon: Building,
          title: 'Enterprise Solutions',
          description: 'Scalable systems built to grow with your business.',
        },
        {
          icon: TrendingUp,
          title: 'Business Growth',
          description: 'Tools and insights to accelerate your growth trajectory.',
        },
        {
          icon: Shield,
          title: 'Enterprise Security',
          description: 'Bank-level encryption and compliance for peace of mind.',
        },
      ]}
      ctaTitle="Let's Build Something Great"
      ctaDescription="Contact us to discuss custom solutions for your business."
      ctaLabel="Contact Sales"
      ctaHref="/support"
    />
  );
}
