/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const skills = [
  { name: 'Revit',      logo: 'https://cdn.simpleicons.org/autodesk/0696D7', color: '#0696D7', angle: 0   },
  { name: 'AutoCAD',    logo: 'https://www.google.com/s2/favicons?sz=128&domain=autocad.com', color: '#E51937', angle: 45  },
  { name: 'SketchUp',   logo: 'https://cdn.simpleicons.org/sketchup/0058A8', color: '#0058A8', angle: 90  },
  { name: 'Lumion',     logo: 'https://www.google.com/s2/favicons?sz=128&domain=lumion.com', color: '#00A1E4', angle: 135 },
  { name: 'D5 Render',  logo: 'https://www.google.com/s2/favicons?sz=128&domain=d5render.com', color: '#FF6B35', angle: 180 },
  { name: 'Photoshop',  logo: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%2331A8FF'/%3E%3Ctext x='50' y='68' font-family='Arial, sans-serif' font-weight='bold' font-size='55' fill='white' text-anchor='middle'%3EPs%3C/text%3E%3C/svg%3E", color: '#31A8FF', angle: 225 },
  { name: 'Illustrator',logo: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%23FF9A00'/%3E%3Ctext x='50' y='68' font-family='Arial, sans-serif' font-weight='bold' font-size='55' fill='white' text-anchor='middle'%3EAi%3C/text%3E%3C/svg%3E", color: '#FF9A00', angle: 270 },
  { name: 'Rhino',      logo: 'https://cdn.simpleicons.org/rhinoceros/808080', color: '#808080', angle: 315 },
];

const softSkills = [
  'Critical Thinking', 'Design Research', 'Project Management',
  'Heritage Conservation', 'Bioclimatic Design', 'Urban Analysis',
  '3D Visualization', 'Client Presentation',
];

export default function SkillsSection() {
  const { t, language } = useLanguage();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const softSkills = language === 'fr' ? (t('skills.softSkills') as any) : t('skills.softSkills');
  const skillsData = language === 'fr' ? (t('skills') as any) : t('skills');
  const [rotation, setRotation] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [hoveredSkill, setHoveredSkill] = useState<any | null>(null);
  const animRef = useRef<number | null>(null);

  const activeSoftSkills = skillsData.softSkills || softSkills;

  useEffect(() => {
    let lastTime = 0;
    const animate = (time: number) => {
      if (lastTime) {
        const delta = time - lastTime;
        setRotation(r => (r + delta * 0.02) % 360);
      }
      lastTime = time;
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

  const ORBIT_R = 180;

  return (
    <section
      id="skills"
      className="w-full mobile-section-padding"
      style={{ background: 'var(--fennel)', paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div 
        className="w-full mobile-container-padding"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          paddingLeft: 'clamp(2rem, 8vw, 6rem)',
          paddingRight: 'clamp(2rem, 8vw, 6rem)'
        }}
      >
        <span className="section-number" style={{ color: 'var(--fern)', display: 'block', marginBottom: '16px' }}>{t('skills.sectionNum')}</span>
        <h2
          style={{
            marginBottom: '64px',
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            fontWeight: 300,
            color: '#2c3a2e',
            lineHeight: 1.1,
          }}
        >
          {t('skills.titleLine1')}<br />
          <em>{t('skills.titleLine2')}</em>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: '64px' }}>
          {/* ─── Orbit System ─── */}
          <div className="flex items-center justify-center">
            <div className="orbit-container mobile-scale-orbit" style={{ width: '420px', height: '420px' }}>
              {/* Orbit rings */}
              {[ORBIT_R, ORBIT_R * 0.65].map((r, i) => (
                <div
                  key={i}
                  className="orbit-ring absolute"
                  style={{
                    width: r * 2,
                    height: r * 2,
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              ))}

              {/* Center node */}
              <div
                className="absolute z-10 flex flex-col items-center justify-center rounded-full"
                style={{
                  width: '120px',
                  height: '120px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: '#2c3a2e',
                  boxShadow: '0 8px 40px rgba(44, 58, 46, 0.5)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: 'white',
                    letterSpacing: '0.05em',
                  }}
                >
                  HIBA
                </span>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.55rem',
                    color: 'rgba(255,255,255,0.7)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                  }}
                >
                  {t('skills.architectTitle')}
                </span>
              </div>

              {/* Orbiting skill items */}
              {skills.map((skill) => {
                const angleRad = ((skill.angle + rotation) * Math.PI) / 180;
                const x = Math.cos(angleRad) * ORBIT_R;
                const y = Math.sin(angleRad) * ORBIT_R;
                const isHovered = hoveredSkill === skill.name;

                return (
                  <button
                    key={skill.name}
                    id={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="absolute flex flex-col items-center gap-1.5 z-20"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      transition: 'transform 0.2s ease',
                    }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    aria-label={`Skill: ${skill.name}`}
                  >
                    {/* Skill icon bubble */}
                    <div
                      className="flex items-center justify-center rounded-xl"
                      style={{
                        width: isHovered ? '52px' : '44px',
                        height: isHovered ? '52px' : '44px',
                        background: isHovered ? skill.color : 'white',
                        color: isHovered ? 'white' : skill.color,
                        boxShadow: isHovered
                          ? `0 8px 24px ${skill.color}55`
                          : '0 4px 16px rgba(0,0,0,0.1)',
                        border: `2px solid ${skill.color}`,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        style={{
                          width: isHovered ? '28px' : '20px',
                          height: isHovered ? '28px' : '20px',
                          objectFit: 'contain',
                          filter: isHovered ? 'brightness(0) invert(1)' : 'none',
                          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                      />
                    </div>
                  </button>
                );
              })}

              {/* Hovered skill tooltip */}
              {hoveredSkill && (
                <div
                  className="absolute z-30 pointer-events-none"
                  style={{
                    left: '50%',
                    bottom: '8px',
                    transform: 'translateX(-50%)',
                    background: 'rgba(0,0,0,0.75)',
                    color: 'white',
                    padding: '4px 14px',
                    borderRadius: '20px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.72rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {hoveredSkill}
                </div>
              )}
            </div>
          </div>

          {/* ─── Soft Skills ─── */}
          <div>
            <h3
              style={{
                marginBottom: '24px',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: '#2c3a2e',
              }}
            >
              {t('skills.coreCompetencies')}
            </h3>
            <div className="flex flex-wrap" style={{ gap: '12px' }}>
              {activeSoftSkills.map((skill: string, i: number) => (
                <div
                  key={skill}
                  id={`competency-${i + 1}`}
                  className="rounded-full transition-all hover:scale-105 cursor-default"
                  style={{
                    padding: '8px 16px',
                    background: i % 3 === 0
                      ? 'rgba(118,142,120,0.15)'
                      : i % 3 === 1
                        ? 'rgba(198,192,156,0.25)'
                        : 'rgba(183,203,219,0.2)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.8rem',
                    color: '#2c3a2e',
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>

            {/* Language section */}
            <div style={{ marginTop: '40px' }}>
              <h3
                style={{
                  marginBottom: '20px',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  color: '#2c3a2e',
                }}
              >
                {t('skills.languagesTitle')}
              </h3>
              {(skillsData.languages || []).map(({ lang, level, pct, color }: any) => (
                <div key={lang} style={{ marginBottom: '16px' }}>
                  <div className="flex justify-between" style={{ marginBottom: '6px' }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', fontWeight: 500, color: '#2c3a2e' }}>{lang}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#888' }}>{level}</span>
                  </div>
                  <div
                    className="h-1.5 rounded-full"
                    style={{ background: 'rgba(0,0,0,0.08)' }}
                  >
                    <div
                      className="h-1.5 rounded-full"
                      style={{ width: `${pct}%`, background: color, transition: 'width 1s ease' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
