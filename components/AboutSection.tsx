/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const timelineItems = [
  { year: '2019', title: 'Architecture Studies Begin', desc: 'Enrolled at the National School of Architecture and Urban Planning (ENAU), Tunis.', color: '#7a8c7b' },
  { year: '2021', title: 'First Internship', desc: 'Worked with a leading Tunis architecture studio on residential and commercial projects.', color: '#9a946b' },
  { year: '2022', title: 'Restoration Project', desc: 'Led documentation and design for heritage restoration in the Djerba medina.', color: '#c47d78' },
  { year: '2023', title: 'AUDA Collaboration', desc: 'Collaborated with the Tunisian Urban Development Agency on urban regeneration studies.', color: '#7a8c7b' },
  { year: '2026', title: 'A4 Architecture', desc: 'Joined A4 Architecture as a project designer, focusing on cultural and heritage projects.', color: '#628096' },
];

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full mobile-section-padding"
      style={{ background: '#ede5cc', overflow: 'hidden', paddingTop: '120px', paddingBottom: '120px' }}
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
        
        {/* Top section: Text + Image side by side */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
          
          {/* Text Content */}
          <div 
            className="lg:w-5/12 transition-all duration-1000"
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)' 
            }}
          >
            <span 
              style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '0.75rem', 
                letterSpacing: '0.2em', 
                color: '#7a8c7b', 
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              {t('about.sectionNum')}
            </span>
            <h2 
              className="mt-6 mb-8"
              style={{ 
                fontFamily: 'Playfair Display, Cormorant Garamond, serif', 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                fontWeight: 400, 
                lineHeight: 1.1,
                color: '#1a1f1b',
                letterSpacing: '-0.02em'
              }}
            >
              {t('about.titleLine1')}<br />
              <em style={{ fontStyle: 'italic', color: '#7a8c7b' }}>{t('about.titleLine2')}</em>
            </h2>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '0.95rem', 
                color: '#4a5a4c', 
                lineHeight: 1.8, 
                marginBottom: '1.5rem' 
              }}
            >
              {t('about.description1')}
            </p>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '0.95rem', 
                color: '#4a5a4c', 
                lineHeight: 1.8, 
                marginBottom: '2.5rem' 
              }}
            >
              {t('about.description2')}
            </p>
            
            <a 
              href="/hiba_jassousti_cv.pdf" 
              download="Hiba_Jassousti_CV.pdf"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 32px',
                background: '#2c3a2e',
                color: '#F4EFE6',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.8rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                borderRadius: '100px',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#7a8c7b';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 25px rgba(122,140,123,0.3)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = '#2c3a2e';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {t('about.downloadCv')}
            </a>
          </div>

          {/* Image */}
          <div 
            className="lg:w-5/12 relative transition-all duration-1000 delay-200 w-full ml-auto"
            style={{ 
              maxWidth: '480px',
              opacity: isVisible ? 1 : 0, 
              transform: isVisible ? 'translateX(0)' : 'translateX(40px)' 
            }}
          >
            <div 
              className="relative w-full rounded-[2px] overflow-hidden" 
              style={{ height: '600px', boxShadow: '0 24px 80px rgba(0,0,0,0.1)' }}
            >
              <Image
                src="/hiba.png"
                alt="Hiba Lahceni"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                style={{ objectFit: 'cover', objectPosition: 'center', filter: 'contrast(1.05) brightness(0.95)' }}
              />
            </div>
            
            {/* Glass Card */}
            <div 
              className="absolute bottom-6 left-6 sm:bottom-12 sm:-left-12 transition-transform duration-500 hover:scale-105"
              style={{
                background: 'rgba(244, 239, 230, 0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                padding: '1.5rem 2.5rem',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.6)',
                boxShadow: '0 15px 40px rgba(0,0,0,0.1)'
              }}
            >
              <p style={{ fontFamily: 'Playfair Display, Cormorant Garamond, serif', fontSize: '1.5rem', color: '#1a1f1b', marginBottom: '6px' }}>
                Hiba Jassousti
              </p>
              <div className="flex items-center gap-3">
                <div style={{ width: '20px', height: '1px', background: '#7a8c7b' }} />
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', color: '#7a8c7b', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500 }}>
                  {t('about.architectTitle')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section: Timeline (Horizontal) */}
        <div 
          className="transition-all duration-1000 delay-400"
          style={{ 
            marginTop: '80px',
            opacity: isVisible ? 1 : 0, 
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)' 
          }}
        >
          <div className="flex items-center justify-between border-b border-black/10 pb-6" style={{ marginBottom: '64px' }}>
            <h3 style={{ fontFamily: 'Playfair Display, Cormorant Garamond, serif', fontSize: '2.2rem', color: '#1a1f1b' }}>
              {t('about.journeyTitle')}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {((language === 'fr' ? (t('about') as any).journey : timelineItems) as typeof timelineItems).map((item, i) => (
              <div 
                key={item.year} 
                className="relative group cursor-default transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                style={{
                  background: 'rgba(255, 255, 255, 0.4)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  padding: '32px 24px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                }}
              >
                {/* Accent Top Line inside card */}
                <div 
                  className="absolute top-0 left-0 w-full transition-all duration-500 group-hover:h-[4px]"
                  style={{ 
                    height: '2px', 
                    background: item.color,
                    opacity: 0.8
                  }} 
                />
                
                <span 
                  style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '0.8rem', 
                    fontWeight: 600, 
                    color: item.color, 
                    letterSpacing: '0.15em',
                    display: 'block',
                    marginBottom: '16px'
                  }}
                >
                  {item.year}
                </span>
                
                <h4 
                  style={{ 
                    fontFamily: 'Playfair Display, Cormorant Garamond, serif', 
                    fontSize: '1.4rem', 
                    color: '#1a1f1b', 
                    marginBottom: '12px', 
                    lineHeight: 1.2 
                  }}
                >
                  {item.title}
                </h4>
                
                <p 
                  style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '0.85rem', 
                    color: '#5a6b5c', 
                    lineHeight: 1.8,
                    flexGrow: 1
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
