import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Large CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-neutral-800/80 border border-neutral-700 p-8 sm:p-14 text-center max-w-5xl mx-auto mb-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Ready to elevate your digital presence?
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-normal">
            Let’s build something unforgettable together. Book a 20-minute intro call to discuss your roadmap.
          </p>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-neutral-900 font-bold hover:bg-neutral-100 transition-colors shadow-lg"
            >
              <span>Schedule Intro Call</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Footer Links & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 border-t border-neutral-800 text-xs text-neutral-500 font-medium">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-emerald-500 text-neutral-950 font-black flex items-center justify-center text-xs">
              E
            </div>
            <span>© {new Date().getFullYear()} ENRA Digital Agency. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/projects" className="hover:text-white transition-colors">Work</Link>
            <Link to="/blog" className="hover:text-white transition-colors">Insights</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
