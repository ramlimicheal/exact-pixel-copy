import React from 'react';

export const Blog: React.FC = () => {
  const posts = [
    { title: 'The Blueprint for Scaling a Modern Digital Agency', date: 'Jul 2026', read: '5 min read' },
    { title: 'Designing for Impact: How Agencies Deliver Measurable Results', date: 'Jul 2026', read: '4 min read' },
    { title: 'The Future-Proof Agency Model in the Age of AI', date: 'Jun 2026', read: '6 min read' },
    { title: 'From Creative Studio to Sustainable Growth Engine', date: 'Jun 2026', read: '5 min read' },
  ];

  return (
    <main className="max-w-[1440px] mx-auto px-6 py-24">
      <div className="max-w-3xl mb-16 space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-[#181d27]/70 block">
          Articles & Insights
        </span>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#181d27]">
          Insights from the Enra Studio
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, idx) => (
          <div key={idx} className="p-8 border border-[#dee0e5] rounded-sm bg-white hover:border-[#181d27] transition-all">
            <span className="text-xs font-mono text-[#181d27]/60 block mb-2">{post.date} • {post.read}</span>
            <h3 className="text-xl font-bold text-[#181d27] leading-snug">{post.title}</h3>
          </div>
        ))}
      </div>
    </main>
  );
};
