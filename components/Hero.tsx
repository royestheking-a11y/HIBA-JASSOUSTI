'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

/* ── Count-up hook ── */
function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const startTime = performance.now();
        const animate = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(ease * end));
          if (progress < 1) requestAnimationFrame(animate);
          else setCount(end);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
}


const StatIcons = {
  experience: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  projects: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  ),
  languages: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
};

/* ── Main Hero ── */
export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const buildingRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current || !buildingRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      buildingRef.current.style.transform = `translate(${x * 14}px, ${y * 8}px)`;
    };
    const el = heroRef.current;
    el?.addEventListener('mousemove', handleMouse);
    return () => el?.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(140deg, #ede5cc 0%, #EBDEC0 45%, #f0e4ce 75%, #f7dfd1 100%)',
      }}
    >

      {/* ── Full-width Building Image ── */}
      <div className="absolute inset-0">
        <div
          ref={buildingRef}
          className="absolute inset-0"
          style={{ transition: 'transform 0.25s ease-out' }}
        >
          <Image
            src="/images/hero section.png"
            alt="Djerba-inspired limestone architecture with water reflection"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center right' }}
          />
        </div>
        {/* Gradient: strong left fade so text is always readable */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #EBDEC0 0%, rgba(235,222,192,0.88) 22%, rgba(235,222,192,0.55) 45%, rgba(235,222,192,0.15) 65%, transparent 100%)',
          }}
        />
      </div>

      {/* ── Large decorative circle (sun) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'rgba(235, 210, 170, 0.28)',
          top: '50%',
          right: '18%',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      />

      {/* Birds SVG removed as per request to 'remove signature' if interpreted as such */}

      {/* ── Safe Area Wrapper ── */}
      <div 
        className="relative w-full min-h-screen flex items-center justify-between"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          paddingLeft: '5%',
          paddingRight: '5%'
        }}
      >
        {/* ── Left Content Panel ── */}
        <div
          className="flex flex-col justify-center pt-16 pb-16 z-10"
          style={{ maxWidth: '600px' }}
        >
        <div className="relative flex">
          {/* Vertical Line - Absolutely positioned to not disrupt the grid */}
          <div className="absolute top-6 bottom-24 -left-8 w-[1.5px] bg-[#1e2e20] opacity-30" />

          {/* Text Content (Pushed slightly right to avoid border) */}
          <div className="flex flex-col pl-4 md:pl-10">
            {/* Name */}
            <div className="animate-fade-up relative" style={{ animationDelay: '0.2s', animationFillMode: 'both', opacity: 0 }}>
              <h1
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(3rem, 12vw, 7.5rem)',
                  fontWeight: 400,
                  color: '#1e2e20',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}
              >
                HIBA
                <span
                  className="absolute pointer-events-none"
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#f2b5a7',
                    top: '46%',
                    left: '52px',
                    transform: 'translateY(-50%)',
                    zIndex: -1,
                  }}
                />
                <br />
                JASSOUSTI
              </h1>
            </div>

            {/* Title line */}
            <div className="animate-fade-up mt-6" style={{ animationDelay: '0.4s', animationFillMode: 'both', opacity: 0 }}>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1rem',
                  fontWeight: 500,
                  letterSpacing: '0.45em',
                  color: '#1e2e20',
                  textTransform: 'uppercase',
                }}
              >
                {t('hero.subtitle')}
              </span>
            </div>

            {/* Tagline */}
            <p
              className="animate-fade-up mt-10"
              style={{
                animationDelay: '0.55s',
                animationFillMode: 'both',
                opacity: 0,
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.05rem',
                fontWeight: 400,
                color: '#3a4a3e',
                lineHeight: 1.7,
                maxWidth: '340px',
              }}
            >
              {t('hero.description')}
            </p>

            {/* CTA */}
            <div className="animate-fade-up" style={{ animationDelay: '0.7s', animationFillMode: 'both', opacity: 0, marginTop: '40px' }}>
              <button
                className="flex items-center justify-between rounded-full transition-all duration-300 hover:scale-105 shadow-md"
                style={{
                  background: '#f1c488',
                  color: '#1e2e20',
                  padding: '0.75rem 1.25rem',
                  width: 'fit-content',
                  gap: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  letterSpacing: '0.04em',
                }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>{t('hero.viewProjects')}</span>
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Floating Stats Card (right side) & Explore Button ── */}
      <div className="animate-float hidden lg:flex relative z-20 flex-col gap-6">
        <div
          style={{
            animationDuration: '6s',
            background: '#f2ecd9', // Warm off-white
            border: '1px solid rgba(255,255,255,0.4)',
            borderRadius: '1.25rem',
            padding: '1.25rem 1rem',
            minWidth: '130px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
          }}
        >
        {[
          { num: '4+', label: language === 'fr' ? "Années\nd'expérience" : 'Years\nExperience', icon: StatIcons.experience },
          { num: '10+', label: language === 'fr' ? 'Projets\nRéalisés' : 'Projects\nCompleted', icon: StatIcons.projects },
          { num: '3', label: language === 'fr' ? 'Langues' : 'Languages', icon: StatIcons.languages },
        ].map(({ num, label, icon }, i) => (
          <div key={i} className="flex flex-col relative">
            <div className="flex items-center gap-3">
              <div style={{ color: '#5a6b5c', opacity: 0.8, display: 'flex', alignItems: 'center' }}>
                {icon}
              </div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 400, color: '#1e2e20', lineHeight: 1 }}>
                {num}
              </div>
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', color: '#5a6b5c', marginTop: '0.2rem', marginLeft: '1.8rem', lineHeight: 1.3 }}>
              {label.split('\n').map((l, idx) => <div key={idx}>{l}</div>)}
            </div>
            {i < 2 && (
              <div style={{ width: '100%', height: '1px', background: 'rgba(0,0,0,0.06)', marginTop: '0.8rem' }} />
            )}
          </div>
        ))}
        </div>

      </div>

      {/* ── Social Icons — bottom right ── */}
      <div
        className="absolute hidden md:flex items-center gap-3"
        style={{
          bottom: '2.5rem',
          right: '3.5%',
          zIndex: 20,
        }}
      >
        {[
          {
            label: 'LinkedIn',
            href: 'https://linkedin.com',
            icon: (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            ),
          },
          {
            label: 'Instagram',
            href: 'https://instagram.com',
            icon: (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            ),
          },
          {
            label: 'Email',
            href: 'mailto:hiba@example.com',
            icon: <Mail size={15} />,
          },
        ].map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="flex items-center justify-center rounded-full transition-all duration-200"
            style={{
              width: '32px',
              height: '32px',
              background: 'transparent',
              border: '1.2px solid rgba(255,255,255,0.7)',
              color: 'white',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'white';
              (e.currentTarget as HTMLElement).style.color = '#5a6b5c';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.color = 'white';
            }}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* ── Scroll Indicator — bottom center ── */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute flex flex-col items-center gap-3"
        style={{
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          color: '#4a5a4c',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="Scroll to discover"
      >
        <div
          style={{
            width: '22px',
            height: '36px',
            borderRadius: '11px',
            border: '1.5px solid rgba(74,90,76,0.6)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '6px',
          }}
        >
          <div
            style={{
              width: '4px',
              height: '8px',
              background: 'var(--fern)',
              borderRadius: '2px',
              animation: 'float 1.6s ease-in-out infinite',
            }}
          />
        </div>
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.6rem',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            opacity: 0.8,
          }}
        >
          {language === 'fr' ? 'Faire défiler' : 'Scroll to Discover'}
        </span>
      </button>
      </div>
    </section>
  );
}
