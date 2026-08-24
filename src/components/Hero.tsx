import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Berlin', hour: 'numeric', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden border-b border-[#dee0e5] grid-background">
      {/* Glow effect */}
      <div className="absolute top-10 right-10 w-[650px] h-[500px] glow-gradient pointer-events-none rounded-full blur-3xl opacity-70" />

      <div className="max-w-[1440px] w-full mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Heading & Subtitle */}
        <div className="lg:col-span-7 space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#181d27] leading-[1.08]">
            Smart design meets seamless development
          </h1>

          <p className="text-lg md:text-xl text-[#181d27]/80 max-w-xl leading-relaxed font-normal">
            From concept to launch, we craft digital solutions that blend creativity, technology, and strategy.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center bg-[#181d27] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all duration-200"
            >
              SEE WHAT WE DO
            </Link>
          </div>

          {/* Berlin Time Tag */}
          <div className="flex items-center gap-2 pt-6 text-xs text-[#181d27]/70 font-mono">
            <span>BERLIN</span>
            <span>•</span>
            <span>{time || '5:45:26 PM'}</span>
          </div>
        </div>

        {/* Right Column: Floating Consultation Card */}
        <div className="lg:col-span-5 flex justify-end">
          <div className="w-full max-w-md bg-white border border-[#dee0e5] p-8 shadow-xl rounded-sm backdrop-blur-md">
            <h3 className="text-xl font-bold text-[#181d27] mb-6 leading-snug">
              30 minute call to get a first consultation, for FREE
            </h3>

            <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#dee0e5]/60">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#dee0e5] bg-gray-100 flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                    alt="Naomi Gills"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#181d27]">Naomi Gills</h4>
                  <p className="text-xs text-[#181d27]/70 font-medium">Marketing Manager</p>
                </div>
              </div>

              <a
                href="https://cal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#74f5a1] hover:bg-[#60e08e] text-[#181d27] font-semibold text-xs uppercase tracking-wider px-4 py-3 rounded-sm transition-all duration-200 flex-shrink-0"
              >
                <span>BOOK A FREE CALL</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
