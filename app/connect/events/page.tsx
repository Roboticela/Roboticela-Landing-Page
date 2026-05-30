'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';

import { easeOut } from '../../components/animations';
import PageCta from '../../components/PageCta';
import PageHero from '../../components/PageHero';
import SitePageLayout from '../../components/SitePageLayout';

const upcomingEvents = [
  { date: '2026-03-15', title: 'Roboticela Developer Conference 2026', location: 'Virtual', type: 'Conference' },
  { date: '2026-04-20', title: 'Product Launch Event', location: 'San Francisco, CA', type: 'Launch' },
  { date: '2026-05-10', title: 'Innovation Workshop Series', location: 'Virtual', type: 'Workshop' },
];

export default function EventsPage() {
  return (
    <SitePageLayout>
      <PageHero
        eyebrow="Connect"
        title="Events &"
        titleAccent="Workshops."
        description="Join us at upcoming events, conferences, and workshops."
        icon={Calendar}
      />

      <section className="max-w-4xl mx-auto mb-28 space-y-6">
        {upcomingEvents.map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.65, ease: easeOut }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/40 hover:border-primary/40 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-foreground/70">{event.date}</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-foreground/60">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
              </div>
              <Users className="w-6 h-6 text-foreground/40 shrink-0" />
            </div>
          </motion.div>
        ))}
      </section>

      <PageCta
        title="Stay in the Loop"
        description="Get notified about upcoming Roboticela events and workshops."
        primaryLabel="Get Event Updates"
        primaryHref="/newsletter"
      />
    </SitePageLayout>
  );
}
