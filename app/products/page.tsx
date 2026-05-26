'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Network, Palette, Store, Keyboard, Mouse, Globe, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import ProductLogo from '../components/ProductLogo';

const products = [
  {
    icon: Network,
    name: 'OSI Model Simulator',
    description: 'Master networking concepts with our interactive OSI model simulator. Perfect for students, educators, and professionals.',
    status: 'Available',
    links: [
      { label: 'Try It Now', href: 'https://osi-simulator.roboticela.com', external: true },
      { label: 'Classic Version', href: 'https://osi-classic.roboticela.com', external: true },
    ],
  },
  {
    icon: Palette,
    name: 'Roboticela Iconify',
    description: 'Generate perfect icons for every platform in seconds. iOS, Android, web—we\'ve got you covered.',
    status: 'Available',
    links: [
      { label: 'Start Creating', href: 'https://iconify.roboticela.com', external: true },
    ],
  },
  {
    icon: Store,
    name: 'Restaurant Management System',
    description: 'Run your restaurant smoothly with our comprehensive management solution.',
    status: 'Available',
    links: [
      { label: 'Offline Version', href: 'https://rms-offline.roboticela.com', external: true },
      { label: 'Online Version', href: 'https://rms.roboticela.com', external: true },
    ],
  },
  {
    icon: Keyboard,
    name: 'Keyboard Simulator',
    description: 'Practice typing, learn keyboard layouts, and improve your skills with our interactive simulator.',
    status: 'Available',
    links: [
      { label: 'Start Practicing', href: 'https://keyboard.roboticela.com', external: true },
    ],
  },
  {
    icon: Mouse,
    name: 'Input Device Simulator',
    description: 'Understand how input devices work with our educational simulation tool.',
    status: 'Available',
    links: [
      { label: 'Try It Now', href: 'https://input-simulator.roboticela.com', external: true },
    ],
  },
  {
    icon: Globe,
    name: 'Site2App',
    description: 'Transform any website into a native mobile app. No coding required.',
    status: 'Coming Soon',
    links: [],
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
              Tools and platforms crafted with care. Each one designed to make your work effortless.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/40 hover:border-primary/40 transition-all duration-300"
              >
                <ProductLogo name={product.name} icon={product.icon} />
                <h3 className="text-2xl font-semibold text-foreground mb-3">{product.name}</h3>
                <p className="text-foreground/70 mb-4">{product.description}</p>
                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    product.status === 'Available' 
                      ? 'bg-green-500/10 text-green-600 dark:text-green-400' 
                      : 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
                  }`}>
                    {product.status}
                  </span>
                </div>
                {product.links.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {product.links.map((link, linkIndex) => (
                      link.external ? (
                        <a
                          key={linkIndex}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 hover:underline font-medium text-sm flex items-center gap-1 transition-colors"
                        >
                          {link.label}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <Link
                          key={linkIndex}
                          href={link.href}
                          className="text-primary hover:text-primary/80 hover:underline font-medium text-sm flex items-center gap-1 transition-colors"
                        >
                          {link.label}
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Can&apos;t find what you need?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              We&apos;re always building something new. Tell us what you&apos;re looking for.
            </p>
            <Link href="/product-request">
              <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300">
                Request a Product
              </button>
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
