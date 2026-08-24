import React from 'react';
import { Sparkles, Shield, HeartPulse, Laptop } from 'lucide-react';

export const CollaborationSection: React.FC = () => {
  const cards = [
    {
      category: 'Technology & AI',
      color: 'bg-[#ffe228]',
      title: 'Secure, conversion-focused platforms that communicate credibility & transparency.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&auto=format&fit=crop&q=80',
      icon: Shield,
    },
    {
      category: 'Healthcare',
      color: 'bg-[#ffe228]',
      title: 'Accessible, fast-loading websites that build patient trust and simplify booking.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&auto=format&fit=crop&q=80',
      icon: HeartPulse,
    },
    {
      category: 'Design & Web',
      color: 'bg-[#ffe228]',
      title: 'Designer sleek, AI-powered landing pages that drive high user engagement.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=700&auto=format&fit=crop&q=80',
      icon: Laptop,
    }
  ];

  return (
    <section className="py-24 border-b border-[#dee0e5] bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#181d27]/70">
            <span className="w-2 h-2 rounded-full bg-[#ffe228]" />
            <span>Collaboration is key</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#181d27] leading-[1.12]">
            We work with forward thinking brands across industries
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="border border-[#dee0e5] rounded-sm overflow-hidden bg-white hover:border-[#181d27] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className={`absolute top-4 left-4 ${card.color} text-[#181d27] text-xs font-mono font-semibold px-3 py-1 rounded-sm uppercase tracking-wider`}>
                  {card.category}
                </span>
              </div>

              <div className="p-6 border-t border-[#dee0e5] flex items-start gap-4">
                <card.icon className="w-5 h-5 text-[#181d27]/70 flex-shrink-0 mt-1" />
                <p className="text-sm font-medium text-[#181d27]/90 leading-relaxed">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
