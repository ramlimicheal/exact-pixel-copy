import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const logos = [
  'Acme Corp', 'NextGen', 'Pulse AI', 'Lumina', 'Vortex', 'Apex Global', 'Zenith Systems'
];

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for Q3/Q4 Projects</span>
        </motion.div>

        {/* Main Headline with Stagger */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-neutral-900 tracking-tight max-w-4xl mx-auto leading-[1.08]"
        >
          Designs that drive <span className="text-emerald-600 underline decoration-emerald-300 underline-offset-8">revenue</span>, without the agency bloat.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          We partner with high-growth startups and tech leaders to craft bespoke digital products, brand identities, and high-converting web experiences.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-neutral-900 text-white font-medium text-base hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10"
            >
              <span>Book a discovery call</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-neutral-100 text-neutral-800 font-medium text-base hover:bg-neutral-200 transition-all"
            >
              <span>View our work</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 flex items-center justify-center gap-8 text-xs sm:text-sm text-neutral-500 font-medium"
        >
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>4.9/5 Average Rating</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>50+ Shipped Products</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>2-3 Week Turnaround</span>
          </div>
        </motion.div>

        {/* Infinite Logo Ticker */}
        <div className="mt-20 pt-10 border-t border-neutral-100">
          <p className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-6">
            Trusted by teams at modern tech companies
          </p>
          <div className="flex overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              className="flex items-center gap-16 shrink-0 pr-16"
            >
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={index}
                  className="text-lg font-bold text-neutral-400/80 hover:text-neutral-900 transition-colors tracking-tight whitespace-nowrap"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
