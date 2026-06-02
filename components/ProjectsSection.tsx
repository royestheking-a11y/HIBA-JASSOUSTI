/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const projects = [
  {
    id: 1,
    num: '01',
    name: 'Menzel Djerba',
    category: 'Restoration',
    year: '2023',
    location: 'Djerba, Tunisia',
    desc: 'Heritage rehabilitation of a traditional Tunisian Menzel, preserving cultural identity through contemporary intervention.',
    img: '/images/project_restoration_1780327598333.png',
    color: 'var(--fern)',
  },
  {
    id: 2,
    num: '02',
    name: 'Coastal Residence',
    category: 'Residential',
    year: '2022',
    location: 'Tunis, Tunisia',
    desc: 'A luxury private residence merging North African architectural language with modern Mediterranean living.',
    img: '/images/project_residential_1780327581514.png',
    color: 'var(--pistachio)',
  },
  {
    id: 3,
    num: '03',
    name: 'Riad Hospitality',
    category: 'Hospitality',
    year: '2021',
    location: 'Sousse, Tunisia',
    desc: 'Boutique hotel design rooted in Tunisian courtyard typology, zellige craftsmanship and biophilic design.',
    img: '/images/project_hospitality_1780327670356.png',
    color: 'var(--cherry-blossom)',
  },
  {
    id: 4,
    num: '04',
    name: 'AUDA Urban Study',
    category: 'Urban Research',
    year: '2023',
    location: 'Tunis, Tunisia',
    desc: 'Collaborative urban development research with the Tunisian Urban Development Agency.',
    img: '/images/hero section.png',
    color: 'var(--bluebell)',
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const { t, language } = useLanguage();
  const projectsList = (language === 'fr' ? (t('projects') as any).list : projects) as typeof projects;
  const current = projectsList[activeProject];

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden mobile-section-padding"
      style={{ minHeight: '100vh', background: '#2a3528' }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/project.png"
          alt="Architecture gallery interior"
          fill
          style={{ objectFit: 'cover', opacity: 0.5 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(30,40,28,0.97) 0%, rgba(30,40,28,0.7) 40%, rgba(30,40,28,0.3) 100%)',
          }}
        />
      </div>

      <div 
        className="relative z-10 flex flex-col lg:flex-row min-h-screen lg:h-screen w-full"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          paddingLeft: '5%',
          paddingRight: '5%'
        }}
      >
        {/* ─── Left Panel ─── */}
        <div className="flex flex-col justify-center mobile-full-width" style={{ width: '38%', minWidth: '320px', padding: '64px 0' }}>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: 300,
              color: 'white',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            {t('projects.titleLine1').toUpperCase()}<br />
            {t('projects.titleLine2').toUpperCase()}
          </h2>
          <p
            style={{
              marginTop: '8px',
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.4rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.5,
            }}
          >
            {t('projects.subtitle').split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
          </p>

          {/* Divider */}
          <div style={{ width: '48px', height: '1px', background: 'rgba(255,255,255,0.3)', margin: '24px 0' }} />

          {/* Active project info */}
          <div style={{ marginBottom: '24px' }}>
            <div
              className="inline-flex items-center rounded-full text-xs font-medium"
              style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)', padding: '4px 12px', marginBottom: '12px', gap: '8px' }}
            >
              {current.category} · {current.year}
            </div>
            <h3
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.8rem',
                fontWeight: 400,
                color: 'white',
              }}
            >
              {current.name}
            </h3>
            <p
              style={{
                marginTop: '8px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.82rem',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.7,
                maxWidth: '280px',
              }}
            >
              {current.desc}
            </p>
          </div>

          <button
            id="view-all-projects-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '100px',
              color: 'white',
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              background: 'transparent',
              width: 'fit-content'
            }}
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('projects.viewAll')} <ArrowRight size={16} />
          </button>

          {/* Project Numbers */}
          <div className="flex" style={{ gap: '20px', marginTop: '40px' }}>
            {projectsList.map((p, i) => (
              <button
                key={p.id}
                id={`project-tab-${i + 1}`}
                onClick={() => setActiveProject(i)}
                className="transition-all duration-300"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: activeProject === i ? 700 : 400,
                  color: activeProject === i ? 'white' : 'rgba(255,255,255,0.4)',
                  borderBottom: activeProject === i ? '1.5px solid white' : '1.5px solid transparent',
                  paddingBottom: '2px',
                }}
                aria-label={`View project ${p.num}`}
              >
                {p.num}
              </button>
            ))}
          </div>
        </div>

        {/* ─── Right Panel — Project Cards ─── */}
        <div className="flex-1 flex items-center overflow-x-auto hide-scrollbar mobile-full-width" style={{ padding: '64px 24px', gap: '16px' }}>
          {projectsList.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={activeProject === i}
              onClick={() => setActiveProject(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  isActive,
  onClick,
}: {
  project: typeof projects[0];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      id={`project-card-${project.id}`}
      className="relative shrink-0 rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        width: isActive ? '340px' : '200px',
        height: '460px',
        transition: 'width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        boxShadow: isActive ? '0 24px 60px rgba(0,0,0,0.5)' : '0 8px 24px rgba(0,0,0,0.3)',
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
      aria-label={`View ${project.name}`}
    >
      <Image
        src={project.img}
        alt={project.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 340px"
        style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
        className="group-hover:scale-105"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: isActive
            ? 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)'
            : 'rgba(0,0,0,0.35)',
        }}
      />

      {/* Category label */}
      <div
        className="absolute"
        style={{
          top: '16px',
          left: '16px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.65rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.7)',
          background: 'rgba(0,0,0,0.3)',
          backdropFilter: 'blur(8px)',
          padding: '4px 10px',
          borderRadius: '20px',
        }}
      >
        {project.category}
      </div>

      {/* Bottom info (visible when active) */}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0" style={{ padding: '24px' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>
            {project.location} · {project.year}
          </p>
          <h4
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.5rem',
              fontWeight: 500,
              color: 'white',
              marginTop: '4px',
            }}
          >
            {project.name}
          </h4>
          <button
            className="flex items-center text-white/70 hover:text-white transition-colors"
            style={{ marginTop: '12px', gap: '8px', fontSize: '0.875rem' }}
            onClick={e => { e.stopPropagation(); }}
          >
            <ProjectExploreTitle /> <ArrowUpRight size={14} />
          </button>
        </div>
      )}

      {/* Collapsed — just number */}
      {!isActive && (
        <div
          className="absolute inset-0 flex items-end justify-center pb-4"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          {project.num}
        </div>
      )}
    </div>
  );
}

function ProjectExploreTitle() {
  const { t } = useLanguage();
  return <>{t('projects.explore')}</>;
}
