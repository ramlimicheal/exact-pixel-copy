import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  category: 'Branding' | 'Web Design' | 'Mobile App';
  description: string;
  image: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 'lumina-pay',
    title: 'Lumina Fintech Platform',
    category: 'Web Design',
    description: 'Next-generation financial operations and treasury management UI for enterprise startups.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    year: '2024'
  },
  {
    id: 'zenith-ai',
    title: 'Zenith Neural Analytics',
    category: 'Mobile App',
    description: 'Autonomous AI workflow orchestrator with real-time predictive telemetry dashboards.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    year: '2024'
  },
  {
    id: 'pulse-brand',
    title: 'Pulse Clean Energy Brand',
    category: 'Branding',
    description: 'Complete visual identity, 3D assets, and design system for clean energy pioneers.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    year: '2023'
  },
  {
    id: 'vortex-commerce',
    title: 'Vortex Global Storefront',
    category: 'Web Design',
    description: 'Ultra-fast headless Shopify e-commerce experience with sub-second page transitions.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    year: '2023'
  }
];

const categories = ['All', 'Web Design', 'Mobile App', 'Branding'] as const;

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="py-24 bg-neutral-50/60 border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest text-emerald-600 font-bold mb-2"
            >
              Featured Case Studies
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight"
            >
              Crafted with obsessive attention to detail
            </motion.h2>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 bg-neutral-200/70 p-1 rounded-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-colors ${
                  selectedCategory === cat ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="activeFilterTab"
                    className="absolute inset-0 bg-white rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-neutral-200/80 hover:shadow-xl hover:border-neutral-300 transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100 relative">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-neutral-800 shadow-sm">
                    {project.category}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400">
                    <span>{project.year}</span>
                    <span>•</span>
                    <span>Delivered in 2.5 weeks</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
