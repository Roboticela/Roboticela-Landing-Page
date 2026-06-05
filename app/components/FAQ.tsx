'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What does Roboticela actually do?',
    answer: "We build software, hardware, and experiences across every category that matters. There's no cleaner way to say it.",
  },
  {
    question: 'Why so many different areas?',
    answer: "Because the most interesting things happen at the edges between fields. We live there.",
  },
  {
    question: 'Can businesses use Roboticela products?',
    answer: "Yes — from solo founders to large organizations. We build tools that grow with you.",
  },
  {
    question: 'How do I hear about new things?',
    answer: "Join our newsletter. Or find us on GitHub, X, or LinkedIn. We share things when they're worth sharing.",
  },
  {
    question: 'Do you work with enterprises?',
    answer: 'Yes. Enterprise-scale solutions, built with the same care as everything else we make.',
  },
  {
    question: 'What makes Roboticela different?',
    answer: "The care inside it. That's always the answer.",
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-card/40 backdrop-blur-md rounded-xl border border-border/40 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-accent/20 transition-colors"
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-foreground/70 transition-transform flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-4"
        >
          <p className="text-foreground/70">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Questions? We&apos;ve Got Answers.
          </h2>
          <p className="text-xl text-foreground/70">
            Everything you need to know about Roboticela
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
