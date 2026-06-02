/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { BookOpen, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | string>('100%');
  const dragging = useRef(false);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      const handleResize = () => {
        if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  return (
    <div
      ref={containerRef}
      className="ba-container select-none"
      style={{ height: '400px' }}
      onMouseDown={e => { dragging.current = true; updatePos(e.clientX); }}
      onMouseMove={e => { if (dragging.current) updatePos(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchStart={e => { dragging.current = true; updatePos(e.touches[0].clientX); }}
      onTouchMove={e => { if (dragging.current) updatePos(e.touches[0].clientX); }}
      onTouchEnd={() => { dragging.current = false; }}
      aria-label="Before and after restoration slider"
    >
      {/* Before image (full) */}
      <Image src={beforeSrc} alt={beforeAlt} fill style={{ objectFit: 'cover' }} />

      {/* Before label */}
      <div
        className="absolute top-4 left-4 z-20"
        style={{
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          padding: '4px 12px',
          borderRadius: '20px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}
      >
        Before
      </div>

      {/* After image (clipped) */}
      <div
        className="ba-after"
        style={{ width: `${sliderPos}%` }}
      >
        <div className="absolute inset-0" style={{ width: containerWidth }}>
          <Image src={afterSrc} alt={afterAlt} fill style={{ objectFit: 'cover' }} />
        </div>
        {/* After label */}
        <div
          className="absolute top-4 right-4 z-20"
          style={{
            background: 'rgba(255,255,255,0.7)',
            color: '#2c2c2c',
            padding: '4px 12px',
            borderRadius: '20px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          After
        </div>
      </div>

      {/* Slider */}
      <div className="ba-divider" style={{ left: `${sliderPos}%` }}>
        <div className="ba-handle">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 5l-4 5 4 5M13 5l4 5-4 5" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ResearchSection() {
  const { t, language } = useLanguage();
  const researchData = language === 'fr' ? (t('research') as any) : t('research');

  return (
    <section
      id="research"
      className="w-full mobile-section-padding"
      style={{ background: 'var(--bluebell)', paddingTop: '120px', paddingBottom: '120px' }}
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
        <span className="section-number" style={{ color: '#5a7a96', display: 'block', marginBottom: '16px' }}>{t('research.sectionNum')}</span>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-end mobile-gap-8" style={{ gap: '48px', marginBottom: '64px' }}>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 300,
              color: '#1a2c3a',
              lineHeight: 1.1,
            }}
          >
            {t('research.titleLine1')}<br />
            <em>{t('research.titleLine2')}</em>
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9rem',
              color: '#3a5a70',
              lineHeight: 1.8,
              maxWidth: '400px',
            }}
          >
            {t('research.description')}
          </p>
        </div>

        {/* Featured Research: Before/After Slider */}
        <div className="rounded-3xl overflow-hidden" style={{ marginBottom: '32px', background: 'rgba(255,255,255,0.35)', backdropFilter: 'blur(12px)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ padding: '32px', gap: '32px' }}>
            <div>
              <div className="flex items-center" style={{ gap: '12px', marginBottom: '16px' }}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'var(--fern)' }}
                >
                  <BookOpen size={18} color="white" />
                </div>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    color: '#5a7a96',
                    textTransform: 'uppercase',
                  }}
                >
                  {t('research.featured')}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  color: '#1a2c3a',
                  lineHeight: 1.2,
                }}
              >
                {t('research.featuredTitle')}
              </h3>
              <p
                style={{
                  marginTop: '16px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.82rem',
                  color: '#3a5a70',
                  lineHeight: 1.8,
                }}
              >
                {t('research.featuredDesc')}
              </p>
              <div className="flex flex-wrap" style={{ marginTop: '16px', gap: '8px' }}>
                {['Heritage', 'Restoration', 'Djerba', 'Bioclimatic'].map(tag => (
                  <span
                    key={tag}
                    className="rounded-full text-xs"
                    style={{
                      padding: '4px 12px',
                      background: 'rgba(26,44,58,0.12)',
                      color: '#1a2c3a',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                id="research-view-btn"
                className="flex items-center font-medium"
                style={{ marginTop: '24px', gap: '8px', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'var(--fern)' }}
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('research.viewFull')} <ArrowRight size={16} />
              </button>
            </div>

            {/* Mini book visual */}
            <div
              className="relative rounded-2xl flex items-center justify-center"
              style={{ height: '220px', background: 'rgba(255,255,255,0.5)' }}
            >
              <div
                className="relative"
                style={{
                  width: '140px',
                  height: '180px',
                  background: 'var(--fern)',
                  borderRadius: '4px 12px 12px 4px',
                  boxShadow: '-6px 6px 20px rgba(0,0,0,0.2), 6px 0 12px rgba(0,0,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px',
                  transform: 'rotate(-3deg)',
                }}
              >
                <div className="w-full h-px bg-white/30 mb-3" />
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.75rem', color: 'white', textAlign: 'center', lineHeight: 1.4 }}>
                  Rehabilitation<br />of a Menzel<br />in Djerba
                </p>
                <div className="w-full h-px bg-white/30 mt-3" />
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', color: 'rgba(255,255,255,0.7)', marginTop: '8px', letterSpacing: '0.1em' }}>
                  HIBA JASSOUSTI
                </p>
              </div>
            </div>
          </div>

          {/* Before/After Slider */}
          <div style={{ padding: '0 32px 32px' }}>
            <h4
              style={{
                marginBottom: '16px',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.2rem',
                fontWeight: 500,
                color: '#1a2c3a',
              }}
            >
              {t('research.beforeAfterTitle')}
            </h4>
            <BeforeAfterSlider
              beforeSrc="/images/project_menzel_before_1780327703098.png"
              afterSrc="/images/project_restoration_1780327598333.png"
              beforeAlt="Menzel Djerba before restoration — crumbling limestone walls"
              afterAlt="Menzel Djerba after restoration — revived heritage architecture"
            />
            <p
              style={{
                marginTop: '12px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.72rem',
                color: '#5a7a96',
                textAlign: 'center',
              }}
            >
              {t('research.sliderHint')}
            </p>
          </div>
        </div>

        {/* Research journal categories */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '16px' }}>
          {researchData.categories?.map(({ cat, count, color }: any) => (
            <div
              key={cat}
              id={`research-cat-${cat.toLowerCase().replace(' ', '-')}`}
              className="rounded-2xl cursor-pointer transition-all hover:scale-105"
              style={{
                padding: '20px',
                background: 'rgba(255,255,255,0.45)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.5)',
              }}
            >
              <div
                className="w-8 h-1 rounded"
                style={{ marginBottom: '12px', background: color }}
              />
              <h4
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#1a2c3a',
                }}
              >
                {cat}
              </h4>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.75rem',
                  color: '#5a7a96',
                  marginTop: '4px',
                }}
              >
                {count} {t('research.papers')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
