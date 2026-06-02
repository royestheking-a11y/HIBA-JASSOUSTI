/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const experiences = [
  {
    id: 1,
    company: 'A4 Architecture',
    role: 'Project Designer',
    period: '2026 – Present',
    location: 'Tunis, Tunisia',
    description: 'Designing cultural and heritage-focused architectural projects. Leading concept development and 3D visualization.',
    responsibilities: [
      'Developing architectural concepts for residential and hospitality projects',
      'Producing technical drawings using AutoCAD and Revit',
      '3D modeling and visualization with SketchUp, Lumion, and D5 Render',
      'Client presentations and design development',
    ],
    skills: ['AutoCAD', 'Revit', 'SketchUp', 'D5 Render', 'Lumion'],
    img: '/images/project_residential_1780327581514.png',
    color: 'var(--fern)',
  },
  {
    id: 2,
    company: 'AUDA',
    role: 'Research Collaborator',
    period: '2023',
    location: 'Tunis, Tunisia',
    description: 'Collaborated on urban regeneration studies for the Tunisian Urban Development Agency.',
    responsibilities: [
      'Urban site analysis and mapping',
      'Heritage building documentation',
      'Developing urban design proposals',
      'Research report writing and visualization',
    ],
    skills: ['Urban Design', 'GIS', 'Heritage Documentation', 'AutoCAD'],
    img: '/images/project_hospitality_1780327670356.png',
    color: 'var(--bluebell)',
  },
  {
    id: 3,
    company: 'Architecture Studio Internship',
    role: 'Architectural Intern',
    period: '2021 – 2022',
    location: 'Tunis, Tunisia',
    description: 'Worked across residential, commercial and restoration projects under senior architects.',
    responsibilities: [
      'Assisting with concept design and schematic design phases',
      'Producing construction drawings and details',
      'Site visits and construction supervision support',
      'Model making and physical prototyping',
    ],
    skills: ['AutoCAD', 'Photoshop', 'Illustrator', 'Model Making'],
    img: '/images/project_menzel_before_1780327703098.png',
    color: 'var(--peony)',
  },
];

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(1);
  const { t, language } = useLanguage();
  const experiencesList = (language === 'fr' ? (t('experience') as any).list : experiences) as typeof experiences;

  return (
    <section
      id="experience"
      className="w-full mobile-section-padding"
      style={{ background: 'var(--cherry-blossom)', paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div 
        className="w-full mobile-container-padding"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          paddingLeft: '5%',
          paddingRight: '5%'
        }}
      >
        <span className="section-number" style={{ color: '#8c5c5a' }}>{t('experience.sectionNum')}</span>
        <h2
          className="mt-3 mb-12"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            fontWeight: 300,
            color: '#3a2422',
            lineHeight: 1.1,
          }}
        >
          {t('experience.titleLine1')}<br />
          <em>{t('experience.titleLine2')}</em>
        </h2>

        <div className="flex flex-col" style={{ marginTop: '32px', gap: '16px' }}>
          {experiencesList.map((exp) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              isOpen={expanded === exp.id}
              onToggle={() => setExpanded(expanded === exp.id ? null : exp.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  isOpen,
  onToggle,
}: {
  exp: typeof experiences[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      id={`experience-card-${exp.id}`}
      className="rounded-2xl overflow-hidden transition-all duration-500"
      style={{
        background: 'rgba(255,255,255,0.5)',
        backdropFilter: 'blur(16px)',
        border: isOpen ? `2px solid ${exp.color}` : '2px solid rgba(255,255,255,0.6)',
        boxShadow: isOpen ? `0 16px 48px rgba(0,0,0,0.08)` : '0 4px 16px rgba(0,0,0,0.04)',
      }}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full text-left flex items-center justify-between"
        style={{ padding: '24px' }}
        aria-expanded={isOpen}
        aria-controls={`experience-content-${exp.id}`}
      >
        <div className="flex items-center" style={{ gap: '16px' }}>
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: exp.color }}
          >
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 700, color: 'white' }}>
              {exp.company.charAt(0)}
            </span>
          </div>
          <div>
            <h3
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.3rem',
                fontWeight: 600,
                color: '#2c3a2e',
              }}
            >
              {exp.company}
            </h3>
            <div className="flex flex-wrap items-center" style={{ gap: '12px', marginTop: '4px' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: '#666' }}>
                {exp.role}
              </span>
              <span style={{ color: '#ccc' }}>·</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#888' }}>
                {exp.period}
              </span>
              <span style={{ color: '#ccc' }}>·</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#888' }}>
                {exp.location}
              </span>
            </div>
          </div>
        </div>
        <div style={{ color: exp.color }}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {/* Expandable content */}
      {isOpen && (
        <div
          id={`experience-content-${exp.id}`}
          style={{ padding: '0 24px 24px', borderTop: '1px solid rgba(0,0,0,0.06)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '24px', marginTop: '20px' }}>
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden img-reveal" style={{ height: '200px' }}>
              <Image src={exp.img} alt={exp.company} fill style={{ objectFit: 'cover' }} />
            </div>

            {/* Details */}
            <div>
              <p
                style={{
                  marginBottom: '16px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.82rem',
                  color: '#4a5a4c',
                  lineHeight: 1.7,
                }}
              >
                {exp.description}
              </p>

              <h4
                style={{
                  marginBottom: '8px',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#2c3a2e',
                }}
              >
                {/* We pass a custom prop or just use hook directly in child? Let's use hook */}
                <ExperienceResponsibilitiesTitle />
              </h4>
              <ul>
                {exp.responsibilities.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-2"
                    style={{
                      marginBottom: '6px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.78rem',
                      color: '#5a6b5c',
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: exp.color, marginTop: '3px', flexShrink: 0 }}>▸</span>
                    {r}
                  </li>
                ))}
              </ul>

              {/* Skill badges */}
              <div className="flex flex-wrap" style={{ gap: '8px', marginTop: '16px' }}>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full text-xs font-medium"
                    style={{
                      padding: '4px 12px',
                      background: `${exp.color}22`,
                      color: exp.color,
                      fontFamily: 'Inter, sans-serif',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ExperienceResponsibilitiesTitle() {
  const { t } = useLanguage();
  return <>{t('experience.keyResponsibilities')}</>;
}
