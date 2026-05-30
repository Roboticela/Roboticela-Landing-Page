'use client';

import { Building, Globe, Handshake } from 'lucide-react';

import SolutionPageTemplate from '../../components/SolutionPageTemplate';

export default function PartnershipsPage() {
  return (
    <SolutionPageTemplate
      eyebrow="Connect"
      title="Partnerships &"
      titleAccent="Alliances."
      description="Collaborate with us to build the future together."
      icon={Handshake}
      features={[
        {
          icon: Building,
          title: 'Technology Partners',
          description: 'Integrate your technology with our platform and reach millions of users.',
        },
        {
          icon: Globe,
          title: 'Distribution Partners',
          description: 'Help us bring our products to new markets and regions.',
        },
        {
          icon: Handshake,
          title: 'Strategic Alliances',
          description: 'Collaborate on joint ventures and co-development opportunities.',
        },
      ]}
      ctaTitle="Interested in Partnering?"
      ctaDescription="Let's explore how we can work together to create something amazing."
      ctaLabel="Contact Partnerships Team"
      ctaHref="/support"
    />
  );
}
