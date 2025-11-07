'use client';

import Navbar from './components/Navbar';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-x-hidden w-full max-w-full">
      
      {/* Navigation */}
      <Navbar />

      {/* Coming Soon Section */}
      <ComingSoon />

      {/* Footer */}
      <Footer />
    </div>
  );
}
