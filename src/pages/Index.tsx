import React from 'react';
import { Hero } from '../components/Hero';
import { CollaborationSection } from '../components/CollaborationSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { FAQSection } from '../components/FAQSection';

export const Index: React.FC = () => {
  return (
    <main>
      <Hero />
      <CollaborationSection />
      <ProjectsSection />
      <FAQSection />
    </main>
  );
};
