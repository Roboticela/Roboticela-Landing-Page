'use client';

import { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/#about', label: 'Story' },
    { href: '/#why-us', label: 'Why Roboticela' },
    { href: '/#get-started', label: 'Get Started' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/support', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/70 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 flex items-center justify-between gap-2 overflow-x-hidden relative z-50">
        <Link href="/" className="flex items-center gap-1.5 sm:gap-2 md:gap-3 min-w-0 flex-1">
          <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 shrink-0">
            <Image src="/Logo.png" alt="Roboticela" fill className="object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-foreground">
              Roboticela
            </span>
            <span className="text-[8px] sm:text-[9px] md:text-[10px] text-foreground/60 hidden sm:block">
              Unlimited by design.
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-4 md:gap-6 shrink-0">
          {navLinks.map((link) =>
            link.href.startsWith('/') && link.href !== '/' ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary hover:underline transition-all duration-200 cursor-pointer text-sm md:text-base"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary hover:underline transition-all duration-200 cursor-pointer text-sm md:text-base"
              >
                {link.label}
              </a>
            )
          )}
          <Link
            href="/#newsletter"
            className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/80 rounded-xl transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="text-foreground font-semibold">Join Community</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0 relative z-50">
          <div className="lg:hidden shrink-0">
            <ThemeToggle />
          </div>
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-foreground/80 hover:text-primary transition-colors shrink-0 relative z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
          <div className="hidden lg:block shrink-0">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-20 lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden fixed top-[73px] left-0 right-0 bg-card/95 backdrop-blur-md border-b border-border/40 z-30 max-h-[calc(100vh-73px)] overflow-y-auto"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
                {navLinks.map((link) =>
                  link.href.startsWith('/') && link.href !== '/' ? (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-accent rounded-xl transition-all duration-200 cursor-pointer text-base"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-accent rounded-xl transition-all duration-200 cursor-pointer text-base"
                    >
                      {link.label}
                    </a>
                  )
                )}
                <Link
                  href="/#newsletter"
                  onClick={closeMenu}
                  className="flex items-center gap-2 px-4 py-3 bg-accent hover:bg-accent/80 rounded-xl transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-foreground font-semibold">Join Community</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
