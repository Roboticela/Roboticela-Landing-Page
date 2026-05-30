'use client';

import { BookOpen, GraduationCap, Users } from 'lucide-react';

import SolutionPageTemplate from '../../components/SolutionPageTemplate';

export default function EducationPage() {
  return (
    <SolutionPageTemplate
      eyebrow="Solutions"
      title="For"
      titleAccent="Education."
      description="Interactive tools and resources that make learning engaging and effective."
      icon={GraduationCap}
      features={[
        {
          icon: BookOpen,
          title: 'Interactive Learning',
          description: 'Hands-on simulators and platforms that bring concepts to life.',
        },
        {
          icon: Users,
          title: 'Classroom Ready',
          description: 'Built for educators and students at every level.',
        },
        {
          icon: GraduationCap,
          title: 'Skill Building',
          description: 'Master networking, design, and more with guided experiences.',
        },
      ]}
      ctaTitle="Explore Educational Tools"
      ctaDescription="Discover products designed for classrooms, labs, and self-paced learning."
      ctaLabel="Explore Tools"
      ctaHref="/products"
    />
  );
}
