'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import WhyChooseUs from './components/WhyChooseUs';
import OurApproach from './components/OurApproach';
import Innovation from './components/Innovation';
import Products from './components/Products';
import NewStats from './components/NewStats';
import Vision from './components/Vision';
import Industries from './components/Industries';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300 overflow-x-hidden w-full max-w-full">
      <Navbar />
      
      <Hero />
      <About />
      <WhatWeDo />
      <WhyChooseUs />
      <OurApproach />
      <Innovation />
      <Products />
      <NewStats />
      <Vision />
      <Industries />
      <FAQ />
      <CTA />
      
      <Footer />
    </div>
  );
}
