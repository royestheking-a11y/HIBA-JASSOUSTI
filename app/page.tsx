'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionCards from '@/components/SectionCards';
import ProjectsSection from '@/components/ProjectsSection';
import ProjectExplorer from '@/components/ProjectExplorer';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ResearchSection from '@/components/ResearchSection';
import SkillsSection from '@/components/SkillsSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}

      <div
        className="page-layout flex flex-col"
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.6s ease',
          pointerEvents: loading ? 'none' : 'auto',
        }}
      >
        {/* Global Fixed Navbar */}
        <Navbar />

        {/* Main Content */}
        <main
          className="flex-1 min-h-screen w-full relative"
          role="main"
          id="main-content"
        >
          <Hero />
          <SectionCards />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ProjectExplorer />
          <ResearchSection />
          <SkillsSection />
          <GallerySection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}
