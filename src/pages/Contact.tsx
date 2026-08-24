import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <main className="max-w-[1440px] mx-auto px-6 py-24">
      <div className="max-w-2xl space-y-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#181d27]/70 block mb-2">
            Get in touch
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#181d27]">
            Let's start your build.
          </h1>
          <p className="text-lg text-[#181d27]/80 mt-4 leading-relaxed">
            Have a project in mind? Book a call directly or send us a message.
          </p>
        </div>

        <div className="p-8 border border-[#dee0e5] rounded-sm bg-white space-y-6">
          <div>
            <label className="block text-xs font-mono uppercase text-[#181d27]/70 mb-2">Your Name</label>
            <input type="text" placeholder="John Doe" className="w-full border border-[#dee0e5] p-3 text-sm rounded-sm focus:outline-none focus:border-black" />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase text-[#181d27]/70 mb-2">Your Email</label>
            <input type="email" placeholder="john@example.com" className="w-full border border-[#dee0e5] p-3 text-sm rounded-sm focus:outline-none focus:border-black" />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase text-[#181d27]/70 mb-2">Project Details</label>
            <textarea rows={4} placeholder="Tell us about your project..." className="w-full border border-[#dee0e5] p-3 text-sm rounded-sm focus:outline-none focus:border-black" />
          </div>
          <button className="w-full bg-[#74f5a1] hover:bg-[#60e08e] text-[#181d27] font-semibold text-xs uppercase tracking-wider py-4 rounded-sm transition-all">
            SEND INQUIRY
          </button>
        </div>
      </div>
    </main>
  );
};
