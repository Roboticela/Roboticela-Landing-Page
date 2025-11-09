'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaEnvelope, href: 'mailto:contact@roboticela.com', label: 'Email' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/roboticela/', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://x.com/roboticela', label: 'X' },
    { icon: FaGithub, href: 'https://github.com/Roboticela', label: 'GitHub' },
  ];

  return (
    <footer className="border-t border-white/20 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative w-12 h-12 mb-4">
              <Image
                src="/Logo.png"
                alt="Roboticela Logo"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Roboticela
            </h3>
            <p className="text-sm text-slate-600 dark:text-gray-400 text-center md:text-left max-w-xs">
              Building the future of business solutions, one innovation at a time.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a
                  href="#features"
                  className="text-sm text-slate-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#waitlist"
                  className="text-sm text-slate-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                >
                  Join Waitlist
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-slate-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm text-slate-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Connect With Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-white/20 dark:border-white/10 text-center"
        >
          <p className="text-sm text-slate-600 dark:text-gray-400">
            © {currentYear} Roboticela. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

