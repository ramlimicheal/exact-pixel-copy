import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#181d27] text-white py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-2xl tracking-tight">Enra</span>
            </div>
            <p className="text-white/60 text-sm max-w-sm leading-relaxed">
              Smart design meets seamless development. Transforming forward-thinking brands worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-white/40 mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-white/40 mb-4 font-mono">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} Enra Agency. All rights reserved.</p>
          <p className="font-mono">Built with precision for Lovable</p>
        </div>

      </div>
    </footer>
  );
};
