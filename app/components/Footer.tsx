'use client';

import { Github, Mail, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import NewsletterSignup from './NewsletterSignup';
import { productCategories } from '../data/productCategories';

export default function Footer() {

  return (
    <footer className="relative py-16 px-4 bg-card/30 border-t border-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section - Join Community / Empire */}
        <div id="newsletter" className="mb-16 text-center scroll-mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Join the Empire</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new products, breakthroughs, and updates. Join our community and stay in the loop.
          </p>
          <NewsletterSignup />
          <p className="text-sm text-foreground/70 mt-4">We respect your inbox. No spam, just innovation.</p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors"
                >
                  All Products
                </Link>
              </li>
              {productCategories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/products/${category.slug}`}
                    className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">About</Link></li>
              <li><Link href="/our-vision" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Our Vision</Link></li>
              <li><Link href="/careers" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Careers</Link></li>
              <li><Link href="/news" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">News</Link></li>
              <li><Link href="/support" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/support" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Help Center</Link></li>
              <li><Link href="/product-request" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Request Product</Link></li>
              <li><Link href="/community" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Community</Link></li>
              <li><Link href="/blogs" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Terms of Service</Link></li>
              <li><Link href="/security" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Security</Link></li>
              <li><Link href="/accessibility" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Accessibility</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="/newsletter" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Newsletter</Link></li>
              <li><Link href="/social-media" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Social Media</Link></li>
              <li><Link href="/feedback" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Feedback</Link></li>
            </ul>
          </div>
        </div>

        {/* Brand and Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/40">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 shrink-0">
              <Image src="/Logo.png" alt="Roboticela" fill sizes="32px" className="object-contain" />
            </div>
            <div>
              <div className="text-lg font-bold text-foreground">Roboticela</div>
              <div className="text-xs text-foreground/60">Unlimited by design.</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Roboticela"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/roboticela"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/roboticela"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@roboticela.com"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Roboticela. Building everything, for everyone.
          </p>
        </div>
      </div>
    </footer>
  );
}
