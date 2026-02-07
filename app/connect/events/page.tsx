'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const upcomingEvents = [
  { date: '2026-03-15', title: 'Roboticela Developer Conference 2026', location: 'Virtual', type: 'Conference' },
  { date: '2026-04-20', title: 'Product Launch Event', location: 'San Francisco, CA', type: 'Launch' },
  { date: '2026-05-10', title: 'Innovation Workshop Series', location: 'Virtual', type: 'Workshop' },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-8">
              <Calendar className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">Events</h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">Join us at upcoming events, conferences, and workshops.</p>
          </motion.div>
          <div className="space-y-6 mb-16">
            {upcomingEvents.map((event, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/40 hover:border-primary/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-foreground/70">{event.date}</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">{event.type}</span>
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
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Stay Updated</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">Subscribe to our newsletter to receive event announcements and updates.</p>
            <Link href="/support"><button className="px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2">Get Event Updates<ArrowRight className="w-5 h-5" /></button></Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
