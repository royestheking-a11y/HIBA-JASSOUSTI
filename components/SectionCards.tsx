/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const cards = [
  {
    num: '01',
    title: 'ABOUT ME',
    desc: 'Get to know my journey, passion and design philosophy.',
    cta: 'Discover',
    target: 'about',
    bg: '#7a8c7b',
    color: 'white',
    img: '/hiba2.png',
  },
  {
    num: '02',
    title: 'PROJECTS',
    desc: 'Architectural, interior and academic works.',
    cta: 'Explore',
    target: 'projects',
    bg: '#cfc6ae',
    color: '#1a1f1b',
    img: '/images/hero section.png', // The reference image shows the pool house for this card!
  },
  {
    num: '03',
    title: 'EXPERIENCE',
    desc: 'My professional experience and collaborations.',
    cta: 'More',
    target: 'experience',
    bg: '#e8b8b0',
    color: '#1a1f1b',
    img: '/images/project_hospitality_1780327670356.png', // The courtyard image
  },
  {
    num: '04',
    title: 'DESIGN JOURNAL',
    desc: 'Research, thoughts and inspirations.',
    cta: 'Read',
    target: 'research',
    bg: '#F4EFE6',
    color: '#1a1f1b',
    img: '/images/exploreproject.png',
  },
];

export default function SectionCards() {
  const { t, language } = useLanguage();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sectionCardsData = language === 'fr' ? (t('sectionCards') as any) : t('sectionCards');
  
  // Merge cards with translations
  const localizedCards = cards.map((c, i) => {
    const translatedCard = sectionCardsData.cards[i] || c;
    return { ...c, ...translatedCard };
  });

  return (
    <section
      className="w-full flex flex-col items-center mobile-section-padding"
      style={{ background: '#F4EFE6', paddingTop: '100px', paddingBottom: '100px' }}
      aria-label="Site sections overview"
    >
      <div 
        className="w-full flex flex-col mobile-container-padding"
        style={{
          maxWidth: '1440px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '5%',
          paddingRight: '5%'
        }}
      >
        {/* Quote bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between py-4 border-b border-black/10 gap-4"
        >
          <p
            style={{
              fontFamily: 'Playfair Display, Cormorant Garamond, serif',
              fontSize: '1.1rem',
              fontStyle: 'italic',
              color: '#6b7a6c',
              letterSpacing: '0.02em',
            }}
          >
            &ldquo; {t('sectionCards.quote')} &rdquo;
          </p>
          <div
            className="flex items-center gap-1.5"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              color: '#6b7a6c',
              textTransform: 'uppercase'
            }}
          >
            <MapPin size={12} style={{ color: '#d9534f', fill: '#d9534f' }} />
            {t('sectionCards.basedIn')}
          </div>
        </div>

        {/* 4-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 w-full" style={{ gap: '24px' }}>
          {localizedCards.map((card) => (
            <SectionCard key={card.num} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionCard({ card }: { card: typeof cards[0] }) {
  return (
    <div
      className="flex flex-col group cursor-pointer transition-all duration-300"
      style={{
        background: '#fcfbf8',
        borderRadius: '0px', // Clean, sharp edges
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
      }}
      onClick={() => document.getElementById(card.target)?.scrollIntoView({ behavior: 'smooth' })}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && document.getElementById(card.target)?.scrollIntoView({ behavior: 'smooth' })}
    >
      {/* Top Box: Image or Color Block */}
      <div 
        className="w-full relative overflow-hidden" 
        style={{ height: '260px', background: card.bg }}
      >
        {card.img && (
          <Image 
            src={card.img} 
            alt={card.title} 
            fill 
            sizes="(max-width: 768px) 100vw, 25vw" 
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-700 group-hover:scale-105"
          />
        )}
      </div>

      {/* Bottom Text Area (Neat and Clean) */}
      <div className="flex flex-col justify-between flex-1" style={{ padding: '24px' }}>
        <div>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              color: '#8a998c',
            }}
          >
            {card.num}
          </span>
          <h3
            className="mt-2 mb-2"
            style={{
              fontFamily: 'Playfair Display, Cormorant Garamond, serif',
              fontSize: '1.4rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
              lineHeight: 1.2,
              color: '#2c3a2e',
            }}
          >
            {card.title}
          </h3>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8rem',
              lineHeight: 1.6,
              color: '#6b7a6c',
            }}
          >
            {card.desc}
          </p>
        </div>

        <div className="mt-8 flex items-center gap-2 group/cta">
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.03em',
              color: '#2c3a2e',
            }}
          >
            {card.cta}
          </span>
          <ArrowRight
            size={14}
            strokeWidth={1.5}
            color="#2c3a2e"
            className="transition-transform duration-300 group-hover/cta:translate-x-1"
          />
        </div>
      </div>
    </div>
  );
}
