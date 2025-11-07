'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaGlobe, FaCog, FaChartLine, FaUsers, FaUser, FaEnvelope, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { containerAnimation, itemAnimation, iconAnimation } from './animations';
import Image from 'next/image';

export default function ComingSoon() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      setName('');
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    { icon: FaRocket, text: 'Innovation First', description: 'Cutting-edge solutions for modern challenges' },
    { icon: FaLightbulb, text: 'Smart Solutions', description: 'Intelligent systems that adapt and evolve' },
    { icon: FaGlobe, text: 'Global Reach', description: 'Connecting businesses worldwide' },
    { icon: FaCog, text: 'Seamless Integration', description: 'Works with your existing infrastructure' },
    { icon: FaChartLine, text: 'Data-Driven', description: 'Insights that drive real results' },
    { icon: FaUsers, text: 'User-Centric', description: 'Designed with people in mind' },
  ];

  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={iconAnimation.initial}
            animate={iconAnimation.animate}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 mx-auto mb-6">
              <div className="absolute inset-0 bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-full"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/Logo.png"
                  alt="Roboticela Logo"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </div>
          </motion.div>
          
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Something
            <br />
            <span className="text-teal-600 dark:text-teal-400">Extraordinary</span>
            <br />
            is Coming
          </motion.h1>
          
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-gray-300 max-w-4xl mx-auto mb-4 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We're crafting the future of business solutions
          </motion.p>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-500 dark:text-gray-400 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Join our exclusive waitlist and be among the first to experience what's next
          </motion.p>
        </motion.div>

        {/* About Roboticela Section */}
        <motion.div
          className="max-w-5xl mx-auto mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/70 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/30 dark:border-white/10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              {/* Logo and Name */}
              <motion.div
                className="shrink-0 text-center md:text-left"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0 mb-4">
                  <div className="absolute inset-0 bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-full"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/Logo.png"
                      alt="Roboticela Logo"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
                  Roboticela
                </h2>
              </motion.div>

              {/* Purpose Description */}
              <motion.div
                className="flex-1 text-center md:text-left"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Our Purpose
                </h3>
                <p className="text-base md:text-lg text-slate-600 dark:text-gray-300 leading-relaxed mb-4">
                  Roboticela is dedicated to creating comprehensive business solutions that empower organizations of all sizes to thrive in an ever-evolving digital landscape. We believe in building technology that is not just innovative, but also accessible, intuitive, and transformative.
                </p>
                <p className="text-base md:text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
                  Our mission is to bridge the gap between complex technological capabilities and practical business needs, delivering tools and platforms that drive real-world results. We're committed to excellence, innovation, and putting our users at the center of everything we build.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Waitlist Form */}
        <motion.div
          id="waitlist"
          className="max-w-2xl mx-auto mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-white/30 dark:border-white/10">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <FaCheckCircle className="w-20 h-20 text-teal-500 dark:text-teal-400 mx-auto mb-6" />
                </motion.div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Welcome to the Future!
                </h2>
                <p className="text-lg text-slate-600 dark:text-gray-300 mb-2">
                  You're now on our exclusive waitlist
                </p>
                <p className="text-base text-slate-500 dark:text-gray-400">
                  We'll notify you the moment we launch. Get ready for something amazing!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                    <FaUser className="inline mr-2 text-teal-600 dark:text-teal-400" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-5 py-4 bg-white/60 dark:bg-white/5 border-2 border-white/40 dark:border-white/10 rounded-xl 
                      text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 
                      focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 transition-all duration-200
                      text-lg"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                    <FaEnvelope className="inline mr-2 text-teal-600 dark:text-teal-400" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-5 py-4 bg-white/60 dark:bg-white/5 border-2 border-white/40 dark:border-white/10 rounded-xl 
                      text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 
                      focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 transition-all duration-200
                      text-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-300 text-sm font-medium"
                  >
                    {error}
                  </motion.div>
                )}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-5 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 
                    text-white rounded-xl font-bold text-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed 
                    flex items-center justify-center gap-3 group"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin text-2xl">⏳</span>
                      <span>Joining Waitlist...</span>
                    </>
                  ) : (
                    <>
                      <span>Join the Waitlist</span>
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          id="features"
          className="mb-16"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-12"
            variants={itemAnimation}
          >
            What to Expect
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                className="bg-white/70 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/30 dark:border-white/10 transition-colors duration-200"
              >
                <div className="mb-4">
                  <feature.icon className="w-14 h-14 mx-auto text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {feature.text}
                </h3>
                <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
