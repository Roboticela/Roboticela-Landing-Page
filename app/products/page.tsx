'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Lock } from 'lucide-react';
import Link from 'next/link';
import ProductLogo from '../components/ProductLogo';
import { products } from '../data/products';
import { easeOut } from '../components/animations';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const dummyProducts = Array.from({ length: 30 });

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
              Tools and platforms crafted with care. Each one designed to make your work effortless.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerAnimation}
            initial="hidden"
            animate="show"
          >
            {/* Real products */}
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                variants={itemAnimation}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/40 hover:border-primary/40 transition-all duration-300"
              >
                <ProductLogo name={product.name} logo={product.logo} />
                <h4 className="text-2xl font-semibold text-foreground mb-4">{product.name}</h4>
                <p className="text-foreground/70 leading-relaxed mb-6">{product.description}</p>
                <div className="flex flex-wrap gap-3">
                  {product.links.map((link, linkIndex) =>
                    link.external ? (
                      <a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full font-medium text-sm transition-all duration-300"
                      >
                        {link.label}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <Link
                        key={linkIndex}
                        href={link.href}
                        className="inline-flex items-center gap-1 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full font-medium text-sm transition-all duration-300"
                      >
                        {link.label}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )
                  )}
                </div>
              </motion.div>
            ))}

            {/* Dummy locked cards */}
            {dummyProducts.map((_, index) => (
              <motion.div
                key={`dummy-${index}`}
                variants={itemAnimation}
                className="relative bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/40 overflow-hidden select-none"
              >
                <div className="blur-sm pointer-events-none">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <div className="w-8 h-8 rounded-lg bg-primary/30" />
                  </div>
                  <div className="h-6 w-3/4 rounded-lg bg-foreground/20 mb-4" />
                  <div className="h-4 w-full rounded-md bg-foreground/10 mb-2" />
                  <div className="h-4 w-5/6 rounded-md bg-foreground/10 mb-2" />
                  <div className="h-4 w-2/3 rounded-md bg-foreground/10 mb-6" />
                  <div className="flex gap-2">
                    <div className="h-8 w-24 rounded-full bg-primary/20" />
                    <div className="h-8 w-20 rounded-full bg-primary/10" />
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/30 backdrop-blur-[2px] rounded-3xl">
                  <div className="flex flex-col items-center gap-2">
                    <Lock className="w-7 h-7 text-primary/60" />
                    <p className="text-sm font-medium text-foreground/50">Coming Soon</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: easeOut }}
            className="mt-16 text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Can&apos;t find what you need?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              We&apos;re always building something new. Tell us what you&apos;re looking for.
            </p>
            <Link href="/product-request">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300"
              >
                Request a Product
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
