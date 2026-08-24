import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      q: 'What services does Enra provide?',
      a: 'We specialize in modern UI/UX design, full-stack web development, brand strategy, Framer & React web applications, and AI integrations.',
    },
    {
      q: 'How fast can we launch our new website?',
      a: 'Depending on the project scope, custom agency websites typically launch in 2 to 4 weeks with iterative sprint reviews.',
    },
    {
      q: 'Do you offer ongoing maintenance and support?',
      a: 'Yes, we provide continuous maintenance, performance optimization, content updates, and dedicated technical support.',
    },
    {
      q: 'How does the free 30-minute consultation work?',
      a: 'You can book a call directly with our team to discuss your goals, budget, timeline, and receive immediate strategic feedback.',
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 border-b border-[#dee0e5] bg-white">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-[#181d27]/70 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#181d27]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#181d27]/70 text-sm leading-relaxed max-w-sm">
            Everything you need to know about partnering with our digital agency studio.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-[#dee0e5] rounded-sm overflow-hidden transition-colors duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-base text-[#181d27] hover:bg-[#fafafa]"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <Minus className="w-4 h-4 flex-shrink-0" /> : <Plus className="w-4 h-4 flex-shrink-0" />}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#181d27]/80 leading-relaxed border-t border-[#dee0e5]/40 pt-4 bg-[#fafafa]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
