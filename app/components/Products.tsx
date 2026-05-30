'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Lock, Rocket } from 'lucide-react';
import Link from 'next/link';

import { easeOut } from './animations';
import ProductLogo from './ProductLogo';
import { products } from '../data/products';

const HERO_LIMIT = 6;

const comingSoonCategories = [
  { name: 'Hardware Products', description: 'Physical devices designed with Roboticela precision.' },
  { name: 'Robotics & Automation', description: 'Smart systems that work alongside humans seamlessly.' },
  { name: 'Healthcare Technology', description: 'Innovations that put wellness in everyone\'s hands.' },
  { name: 'Smart Home Devices', description: 'Connected experiences for modern living.' },
  { name: 'Wearable Technology', description: 'Devices that understand and adapt to you.' },
  { name: 'Research & Labs', description: 'Breakthrough discoveries that shape tomorrow.' },
];

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
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

export default function Products() {
  const dummyCount = Math.max(0, HERO_LIMIT - products.length);

  return (
    <section id="products" className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Our Software Collection
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            Tools That Think Ahead
          </p>
          <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto mt-6 leading-relaxed">
            We&apos;ve built software that solves real problems and makes your work effortless. Each product is crafted with the same attention to detail you&apos;d expect from Roboticela—beautiful, powerful, and intuitive.
          </p>
        </motion.div>

        {/* Available Products */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Available Now</h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {products.map((product) => (
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
                        aria-label={`${link.label} — ${product.name}`}
                        className="inline-flex items-center gap-1 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full font-medium text-sm transition-all duration-300"
                      >
                        {link.label}
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </a>
                    ) : (
                      <Link
                        key={linkIndex}
                        href={link.href}
                        aria-label={`${link.label} — ${product.name}`}
                        className="inline-flex items-center gap-1 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full font-medium text-sm transition-all duration-300"
                      >
                        {link.label}
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    )
                  )}
                </div>
              </motion.div>
            ))}

            {Array.from({ length: dummyCount }).map((_, index) => (
              <motion.div
                key={`dummy-${index}`}
                variants={itemAnimation}
                className="relative bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/40 overflow-hidden select-none"
              >
                <div className="blur-sm pointer-events-none">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <div className="w-8 h-8 rounded-lg bg-primary/30" />
                  </div>
                  <div className="h-6 w-3/4 rounded-lg bg-foreground/20 mb-3" />
                  <div className="h-4 w-full rounded-md bg-foreground/10 mb-2" />
                  <div className="h-4 w-5/6 rounded-md bg-foreground/10 mb-2" />
                  <div className="h-4 w-2/3 rounded-md bg-foreground/10 mb-6" />
                  <div className="flex gap-2">
                    <div className="h-8 w-20 rounded-full bg-primary/20" />
                    <div className="h-8 w-24 rounded-full bg-primary/10" />
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/30 backdrop-blur-[2px] rounded-3xl">
                  <div className="flex flex-col items-center gap-2">
                    <Lock className="w-7 h-7 text-primary/60" />
                    <p className="text-sm font-medium text-foreground/70">Coming Soon</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Products Button */}
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="px-8 py-4 bg-card/60 hover:bg-card/80 backdrop-blur-sm text-foreground rounded-full font-semibold text-lg transition-all duration-300 border border-border/40 inline-flex items-center gap-2"
            >
              View All Products
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-[3rem] p-12 md:p-16 border border-primary/20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-primary/10 rounded-full px-6 py-2 mb-6">
              <Rocket className="w-5 h-5 text-primary mr-2" />
              <span className="text-primary font-semibold">Coming Soon</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">More Innovation on the Horizon</h3>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We&apos;re building breakthrough products and experiences across multiple categories that will transform industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {comingSoonCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: easeOut }}
                className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/40"
              >
                <h4 className="text-xl font-semibold text-foreground mb-2">{category.name}</h4>
                <p className="text-foreground/70 text-sm">{category.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/product-request"
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-primary/20 inline-flex items-center gap-2"
            >
              Join the Waitlist
            </Link>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Can&apos;t find what you need?</h3>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            We&apos;re always building something new. Tell us what you&apos;re looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/product-request"
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2"
            >
              Request a Product
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 bg-transparent hover:bg-card/60 text-foreground rounded-full font-semibold text-lg transition-all duration-300 border border-border/40 inline-flex items-center gap-2"
            >
              Browse All Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
