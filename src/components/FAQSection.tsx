import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How quickly can we start our project?',
    a: 'We usually onboard within 48 to 72 hours of contract execution. We reserve slots for select partners each quarter to guarantee dedicated attention.'
  },
  {
    q: 'What is included in the design hand-off?',
    a: 'You receive complete Figma source files, documented design tokens, interactive prototypes, and production-ready React / Tailwind code components.'
  },
  {
    q: 'Can we hire Enra for ongoing design retainers?',
    a: 'Yes. We offer dedicated monthly retainers for high-velocity teams needing ongoing feature design, landing page optimization, and brand scaling.'
  },
  {
    q: 'Do you build on Webflow, Framer, and custom React?',
    a: 'Absolutely. We build high-converting websites natively across React (Next.js/Vite), Framer, and Webflow depending on your marketing architecture.'
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-neutral-50/50 border-t border-neutral-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-emerald-600 font-bold mb-2"
          >
            Frequently Asked Questions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight"
          >
            Everything you need to know
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="border border-neutral-200/80 rounded-2xl bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-bold text-neutral-900 hover:text-emerald-600 transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed border-t border-neutral-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
