'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  CheckCircle,
  FileText,
  Mail,
  MessageCircle,
  Send,
  User,
} from 'lucide-react';
import Link from 'next/link';

import { easeOut } from '../components/animations';
import { formInputClass } from '../lib/form-input';
import PageHero from '../components/PageHero';
import ButtonLoader from '../components/ButtonLoader';
import SitePageLayout from '../components/SitePageLayout';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

const inputClass = `${formInputClass} pl-10 pr-4`;

export default function SupportPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all fields.');
      return;
    }
    setStatus('sending');
    setErrorMessage('');
    try {
      const res = await fetch('/api/forms/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.error || data.message || 'Something went wrong. Please try again.');
        return;
      }
      setStatus('success');
      setFullName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <SitePageLayout>
      <PageHero
        eyebrow="Support"
        title="Contact"
        titleAccent="Us."
        description="Have a project in mind or a question? Send us a message and we'll get back to you."
        icon={MessageCircle}
        paddingBottom="sm"
      />

      <section className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: easeOut }}
          className="bg-card/60 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 border border-border/40"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-2">
                Full name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40 z-10" />
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your name"
                  className={inputClass}
                  disabled={status === 'sending'}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40 z-10" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={inputClass}
                  disabled={status === 'sending'}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                Message
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-4 w-5 h-5 text-foreground/40 z-10" />
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project or question..."
                  rows={5}
                  className={`${inputClass} resize-y min-h-[120px]`}
                  disabled={status === 'sending'}
                />
              </div>
            </div>

            {status === 'error' && errorMessage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 text-sm"
              >
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 text-sm"
              >
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span>Message sent. We&apos;ll get back to you soon.</span>
              </motion.div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300 inline-flex flex-row flex-nowrap items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <ButtonLoader label="Sending..." variant="onPrimary" />
                ) : (
                  <span className="inline-flex flex-row flex-nowrap items-center gap-2">
                    <Send className="w-5 h-5 shrink-0" />
                    Send message
                  </span>
                )}
              </button>
              <Link
                href="/"
                className="text-sm text-foreground/60 hover:text-primary transition-colors text-center sm:text-left"
              >
                ← Back to home
              </Link>
            </div>
          </form>
        </motion.div>
      </section>
    </SitePageLayout>
  );
}
