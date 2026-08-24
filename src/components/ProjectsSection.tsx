import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      slug: 'aura-skin-e-commerce',
      title: 'Aura Skin E-Commerce',
      category: 'E-Commerce / Brand',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
    },
    {
      slug: 'finflow',
      title: 'Finflow Banking Platform',
      category: 'FinTech / SaaS',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    },
    {
      slug: 'medichat-triage-assistant',
      title: 'MediChat Triage Assistant',
      category: 'AI / Healthcare',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
    },
    {
      slug: 'nexus-logistics',
      title: 'Nexus Global Logistics',
      category: 'Enterprise / Supply Chain',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
    },
    {
      slug: 'structura-lead-gen-campaign',
      title: 'Structura Architecture Campaign',
      category: 'Marketing / Real Estate',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
    },
    {
      slug: 'urban-kicks',
      title: 'Urban Kicks Storefront',
      category: 'Lifestyle / Fashion',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section className="py-24 border-b border-[#dee0e5] bg-[#fafafa]">
      <div className="max-w-[1440px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#181d27]/70 block mb-2">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#181d27]">
              Selected Works
            </h2>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#181d27] hover:underline"
          >
            <span>View all projects (6)</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <Link
              key={proj.slug}
              to={`/projects/${proj.slug}`}
              className="group block border border-[#dee0e5] rounded-sm overflow-hidden bg-white transition-all duration-300 hover:shadow-md"
            >
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg text-[#181d27] group-hover:text-black transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-[#181d27]/60 font-mono mt-1">
                    {proj.category} • {proj.year}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#f4f5f7] flex items-center justify-center group-hover:bg-[#74f5a1] transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-[#181d27]" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
