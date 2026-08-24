import React from 'react';

export const About: React.FC = () => {
  return (
    <main className="max-w-[1440px] mx-auto px-6 py-24">
      <div className="max-w-3xl space-y-6">
        <span className="text-xs font-mono uppercase tracking-wider text-[#181d27]/70 block">
          About Enra
        </span>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#181d27]">
          We design digital experiences that scale.
        </h1>
        <p className="text-lg text-[#181d27]/80 leading-relaxed">
          Enra is a modern digital agency and design studio based in Berlin. We partner with tech founders, innovative startups, and global enterprises to craft memorable brand experiences and scalable platforms.
        </p>
      </div>
    </main>
  );
};
