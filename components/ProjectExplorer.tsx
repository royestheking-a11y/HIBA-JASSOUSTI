/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { Plus, ArrowRight, ZoomIn, ZoomOut } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const tabs = [
  {
    id: 'concept',
    label: 'Concept',
    color: 'var(--fern)',
    content: {
      title: 'Design Concept',
      text: 'Inspired by the traditional Djerba Menzel typology — compact courtyards, thick limestone walls protecting from heat, pointed arches framing views to the sea. The project proposes a dialogue between memory and the contemporary, maintaining the proportions of heritage while introducing light through carefully placed openings.',
      tag: 'Heritage × Contemporary',
    },
  },
  {
    id: 'plans',
    label: 'Plans',
    color: 'var(--pistachio)',
    content: {
      title: 'Floor Plans',
      text: 'Ground floor: entrance riad, salon, kitchen and service area. First floor: three bedrooms with private terraces. Roof: communal terrace with pergola and panoramic views. The circulation flows around a central courtyard that acts as the bioclimatic heart of the building.',
      tag: 'Ground + First + Roof',
    },
  },
  {
    id: 'renders',
    label: 'Renders',
    color: 'var(--peony)',
    content: {
      title: '3D Visualizations',
      text: 'Photorealistic renders produced in D5 Render, showing the building at different times of day — dawn light catching the limestone texture, golden hour reflections on the pool, and the warm glow of lanterns at night. Vegetation is native Mediterranean species.',
      tag: 'D5 Render · Lumion',
    },
  },
  {
    id: 'research',
    label: 'Research',
    color: 'var(--bluebell)',
    content: {
      title: 'Research Background',
      text: 'Based on field studies of traditional Menzel typologies across Djerba island, documenting 47 heritage structures. Analysis of bioclimatic strategies: courtyard orientation, wall thickness, wind-catcher placement, and the relationship between built form and landscape.',
      tag: 'Heritage Documentation',
    },
  },
];

const hotspots = [
  { x: 33, y: 55, color: 'var(--honey)', label: 'Entrance Riad' },
  { x: 65, y: 45, color: 'var(--peony)', label: 'Central Courtyard' },
  { x: 35, y: 28, color: 'var(--fern)', label: 'Upper Terrace' },
  { x: 48, y: 72, color: 'var(--bluebell)', label: 'Water Feature' },
];

export default function ProjectExplorer() {
  const [activeTab, setActiveTab] = useState('concept');
  const [activeHotspot, setActiveHotspot] = useState<any | null>(null);
  const [zoom, setZoom] = useState(1);
  const [transformOrigin, setTransformOrigin] = useState('50% 50%');
  const { t, language } = useLanguage();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const explorerTabs = (language === 'fr' ? (t('projectExplorer') as any).tabs : tabs) as typeof tabs;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (zoom === 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  const activeContent = explorerTabs.find(t => t.id === activeTab)!;

  return (
    <section
      className="w-full mobile-section-padding"
      style={{ background: 'var(--fennel)', paddingTop: '120px', paddingBottom: '120px' }}
      aria-label="Interactive project explorer"
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
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mobile-gap-4" style={{ marginBottom: '48px' }}>
          <div>
            <span className="section-number">{t('projectExplorer.featuredProject')}</span>
            <h2
              style={{
                marginTop: '8px',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 400,
                color: '#2c3a2e',
              }}
            >
              {t('projectExplorer.projectName')}
            </h2>
          </div>
          <button
            id="project-explorer-explore-btn"
            className="btn-honey"
            onClick={() => {
              document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('projectExplorer.exploreProject')} <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: '48px' }}>
          {/* ─── Left: Building Image with Hotspots ─── */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ aspectRatio: '4/3', background: '#d4cec0', cursor: zoom > 1 ? 'crosshair' : 'default' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setTransformOrigin('50% 50%')}
          >
            {/* Zoom Controls */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
              <button
                onClick={() => setZoom(prev => Math.min(prev + 0.5, 3))}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
                style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}
                aria-label="Zoom in"
              >
                <ZoomIn size={18} />
              </button>
              <button
                onClick={() => setZoom(prev => Math.max(prev - 0.5, 1))}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
                style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', opacity: zoom === 1 ? 0.5 : 1 }}
                aria-label="Zoom out"
                disabled={zoom === 1}
              >
                <ZoomOut size={18} />
              </button>
            </div>

            {/* Zoomable Content */}
            <div
              className="absolute inset-0 transition-transform duration-300 ease-out"
              style={{ transform: `scale(${zoom})`, transformOrigin }}
            >
              <Image
                src="/images/exploreproject.png"
                alt="3D isometric view of Menzel Djerba architectural model"
                fill
                unoptimized
                style={{ objectFit: 'cover' }}
              />

            {/* Hotspot dots */}
            {hotspots.map((hs) => (
              <button
                key={hs.label}
                className="absolute"
                style={{
                  left: `${hs.x}%`,
                  top: `${hs.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10,
                }}
                onMouseEnter={() => setActiveHotspot(hs.label)}
                onMouseLeave={() => setActiveHotspot(null)}
                aria-label={`Hotspot: ${hs.label}`}
              >
                {/* Outer ring */}
                <span
                  className="block absolute"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: `2px solid ${hs.color}`,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    opacity: 0.5,
                    animation: 'pulse-ring 2.5s ease-in-out infinite',
                  }}
                />
                {/* Inner dot */}
                <span
                  className="relative block"
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: hs.color,
                    border: '2px solid white',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  }}
                />
                {/* Tooltip */}
                {activeHotspot === hs.label && (
                  <div
                    className="absolute"
                    style={{
                      bottom: '130%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'rgba(0,0,0,0.75)',
                      color: 'white',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '0.7rem',
                      whiteSpace: 'nowrap',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {hs.label}
                  </div>
                )}
              </button>
            ))}
            </div>

            {/* Cursor hint */}
            <div
              className="absolute bottom-4 left-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.8)',
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(8px)',
                padding: '6px 14px',
                borderRadius: '20px',
              }}
            >
              {t('projectExplorer.hoverHint')}
            </div>
          </div>

          {/* ─── Right: Tab Navigation + Content ─── */}
          <div className="flex flex-col lg:flex-row" style={{ gap: '24px' }}>
            {/* Tab pills */}
            <div className="flex flex-row lg:flex-col overflow-x-auto hide-scrollbar w-full lg:w-[180px]" style={{ gap: '12px' }}>
              {explorerTabs.map((tab) => (
                <button
                  key={tab.id}
                  id={`explorer-tab-${tab.id}`}
                  className="tab-pill"
                  style={{
                    background: activeTab === tab.id ? tab.color : 'rgba(0,0,0,0.06)',
                    color: activeTab === tab.id ? 'white' : '#4a4a4a',
                    transform: activeTab === tab.id ? 'translateX(4px)' : 'translateX(0)',
                    boxShadow: activeTab === tab.id ? `0 4px 16px ${tab.color}44` : 'none',
                  }}
                  onClick={() => setActiveTab(tab.id)}
                  aria-pressed={activeTab === tab.id}
                >
                  {tab.label}
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.25)' }}
                  >
                    <Plus size={12} />
                  </span>
                </button>
              ))}
            </div>

            {/* Content area */}
            <div
              className="flex-1 rounded-2xl flex flex-col justify-between"
              style={{
                padding: '32px',
                background: 'rgba(255,255,255,0.5)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.6)',
                minHeight: '280px',
              }}
            >
              <div>
                <div
                  className="inline-block rounded-full text-xs"
                  style={{
                    padding: '4px 12px',
                    marginBottom: '12px',
                    background: activeContent.color,
                    color: 'white',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {activeContent.content.tag}
                </div>
                <h4
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    color: '#2c3a2e',
                  }}
                >
                  {activeContent.content.title}
                </h4>
                <p
                  style={{
                    marginTop: '12px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.82rem',
                    color: '#4a5a4c',
                    lineHeight: 1.75,
                  }}
                >
                  {activeContent.content.text}
                </p>
              </div>
              <div
                style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.08)' }}
              >
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.7rem',
                    color: '#888',
                    letterSpacing: '0.05em',
                  }}
                >
                  {t('projectExplorer.projectMeta')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
