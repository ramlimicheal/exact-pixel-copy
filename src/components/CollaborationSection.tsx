import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: Zap,
    step: '01',
    title: 'Rapid Discovery & Strategy',
    description: 'We align on your product objectives, target demographics, and conversion metrics in day one.'
  },
  {
    icon: Layers,
    step: '02',
    title: 'Iterative Design & Prototyping',
    description: 'Interactive Figma prototypes delivered every 48 hours with continuous feedback cycles.'
  },
  {
    icon: ShieldCheck,
    step: '03',
    title: 'Production Hand-off & Build',
    description: 'Clean React code or native Webflow/Framer builds ready for immediate conversion acceleration.'
  }
];

export const CollaborationSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-emerald-600 font-bold mb-2"
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight"
          >
            A streamlined process designed for speed and quality
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-emerald-200 hover:bg-emerald-50/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-emerald-600 border border-neutral-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-neutral-200">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
