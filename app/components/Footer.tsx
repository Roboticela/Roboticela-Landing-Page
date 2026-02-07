'use client';

import { Github, Mail, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="relative py-16 px-4 bg-card/30 border-t border-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Stay in the Loop</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Be the first to know about new products, breakthroughs, and updates from Roboticela.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-card/60 border border-border/40 rounded-full text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-foreground/50 mt-4">We respect your inbox. No spam, just innovation.</p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Products</h4>
            <ul className="space-y-2">
              <li><a href="#products" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Software</a></li>
              <li><a href="#products" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Hardware</a></li>
              <li><a href="#products" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">E-commerce</a></li>
              <li><a href="#products" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Enterprise</a></li>
              <li><a href="#products" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Research</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/solutions/individuals" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">For Individuals</Link></li>
              <li><Link href="/solutions/business" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">For Business</Link></li>
              <li><Link href="/solutions/developers" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">For Developers</Link></li>
              <li><Link href="/solutions/education" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">For Education</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">About Us</Link></li>
              <li><Link href="/company/vision" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Our Vision</Link></li>
              <li><Link href="/careers" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Careers</Link></li>
              <li><Link href="/company/press" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">News & Press</Link></li>
              <li><Link href="/support" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/support" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Help Center</Link></li>
              <li><Link href="/product-request" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Request Product</Link></li>
              <li><Link href="/resources/documentation" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Documentation</Link></li>
              <li><Link href="/resources/community" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Community Forum</Link></li>
              <li><Link href="/resources/blog" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal/security" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Security</Link></li>
              <li><Link href="/legal/accessibility" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Accessibility</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#newsletter" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Newsletter</a></li>
              <li><a href="https://github.com/Roboticela" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Social Media</a></li>
              <li><Link href="/connect/events" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Events</Link></li>
              <li><Link href="/connect/partnerships" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Partnerships</Link></li>
              <li><Link href="/support" className="text-sm text-foreground/70 hover:text-primary hover:underline transition-colors">Feedback</Link></li>
            </ul>
          </div>
        </div>

        {/* Brand and Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/40">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 shrink-0">
              <Image src="/Logo.png" alt="Roboticela" fill className="object-contain" />
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
