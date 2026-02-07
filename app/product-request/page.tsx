'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Lightbulb, Send } from 'lucide-react';
import { useState } from 'react';

export default function ProductRequestPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    productType: '',
    description: '',
    useCase: '',
    priority: 'medium',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Product request:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-8">
              <Lightbulb className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Request a Product
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
              We&apos;re always building something new. Tell us what you&apos;re looking for, and we&apos;ll make it happen.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/40"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border/40 rounded-xl text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border/40 rounded-xl text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                  Company / Organization (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border/40 rounded-xl text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
                  placeholder="Your Company"
                />
              </div>

              {/* Product Type */}
              <div>
                <label htmlFor="productType" className="block text-sm font-semibold text-foreground mb-2">
                  Product Type *
                </label>
                <select
                  id="productType"
                  name="productType"
                  value={formData.productType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border/40 rounded-xl text-foreground focus:outline-none focus:border-primary/40 transition-colors"
                >
                  <option value="">Select a category</option>
                  <option value="software">Software / Web Application</option>
                  <option value="mobile">Mobile Application</option>
                  <option value="hardware">Hardware Device</option>
                  <option value="ai">AI-Powered Tool</option>
                  <option value="automation">Automation / Robotics</option>
                  <option value="enterprise">Enterprise System</option>
                  <option value="education">Educational Platform</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-foreground mb-2">
                  Product Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border/40 rounded-xl text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary/40 transition-colors resize-none"
                  placeholder="Describe the product you need. What problem does it solve? What features should it have?"
                />
              </div>

              {/* Use Case */}
              <div>
                <label htmlFor="useCase" className="block text-sm font-semibold text-foreground mb-2">
                  Use Case / Industry *
                </label>
                <textarea
                  id="useCase"
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 bg-background border border-border/40 rounded-xl text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary/40 transition-colors resize-none"
                  placeholder="How will you use this product? What industry or field is it for?"
                />
              </div>

              {/* Priority */}
              <div>
                <label htmlFor="priority" className="block text-sm font-semibold text-foreground mb-2">
                  Priority Level
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border/40 rounded-xl text-foreground focus:outline-none focus:border-primary/40 transition-colors"
                >
                  <option value="low">Low - Just an idea</option>
                  <option value="medium">Medium - Planning phase</option>
                  <option value="high">High - Need it soon</option>
                  <option value="urgent">Urgent - Need it ASAP</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitted ? (
                    'Request Sent!'
                  ) : (
                    <>
                      Submit Request
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-green-500/10 border border-green-500/40 rounded-xl text-center"
              >
                <p className="text-green-600 dark:text-green-400 font-medium">
                  Thank you! We&apos;ve received your product request and will get back to you soon.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-card/40 backdrop-blur-sm rounded-2xl p-6 border border-border/40 text-center">
              <div className="text-3xl font-bold text-primary mb-2">24-48h</div>
              <p className="text-foreground/70">Response Time</p>
            </div>
            <div className="bg-card/40 backdrop-blur-sm rounded-2xl p-6 border border-border/40 text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-foreground/70">Custom Solutions</p>
            </div>
            <div className="bg-card/40 backdrop-blur-sm rounded-2xl p-6 border border-border/40 text-center">
              <div className="text-3xl font-bold text-primary mb-2">∞</div>
              <p className="text-foreground/70">Possibilities</p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
