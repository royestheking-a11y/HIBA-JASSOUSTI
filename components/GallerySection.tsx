/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const categories = ['All', 'Sketches', 'Models', 'Renders', 'Construction', 'Site Visits'];

const galleryItems = [
  { id: 1, src: '/images/project_residential_1780327581514.png', alt: 'Coastal residence render', cat: 'Renders', height: 'tall' },
  { id: 2, src: '/images/exploreproject.png', alt: 'Menzel Djerba 3D model', cat: 'Models', height: 'normal' },
  { id: 3, src: '/images/project_hospitality_1780327670356.png', alt: 'Boutique hotel courtyard', cat: 'Renders', height: 'normal' },
  { id: 4, src: '/images/project_menzel_before_1780327703098.png', alt: 'Menzel before restoration', cat: 'Site Visits', height: 'short' },
  { id: 5, src: '/images/project_restoration_1780327598333.png', alt: 'Heritage restoration', cat: 'Construction', height: 'tall' },
  { id: 6, src: '/images/hero section.png', alt: 'Djerba villa architecture', cat: 'Renders', height: 'normal' },
];

const heightMap = { tall: '380px', normal: '260px', short: '200px' };

export default function GallerySection() {
  const { t, language } = useLanguage();
  const galleryData = language === 'fr' ? (t('gallery') as any) : t('gallery');
  const activeCategories = galleryData.categories || categories;
  const activeItems = galleryData.items || galleryItems;
  const [activeCategory, setActiveCategory] = useState(activeCategories[0]);
  const [lightboxImg, setLightboxImg] = useState<typeof galleryItems[0] | null>(null);

  // If the user clicks a category that isn't mapped properly, default to 'All' or its translated equivalent.
  // We'll just map by index to make filtering simpler, since the first is always "All".
  const activeCatIndex = activeCategories.indexOf(activeCategory);
  
  const filtered = activeCatIndex === 0
    ? activeItems
    : activeItems.filter((g: any) => g.cat === activeCategory);

  return (
    <section
      id="gallery"
      className="w-full mobile-section-padding"
      style={{ background: 'var(--fennel-light)', paddingTop: '120px', paddingBottom: '120px' }}
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
        <span className="section-number" style={{ color: 'var(--fern)', display: 'block', marginBottom: '16px' }}>{t('gallery.sectionNum')}</span>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between" style={{ marginTop: '12px', marginBottom: '40px', gap: '24px' }}>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 300,
              color: '#2c3a2e',
              lineHeight: 1.1,
            }}
          >
            {t('gallery.titleLine1')}<br />
            <em>{t('gallery.titleLine2')}</em>
          </h2>

          {/* Category filter */}
          <div className="flex flex-wrap justify-start lg:justify-end" style={{ gap: '8px' }}>
            {activeCategories.map((cat: string) => (
              <button
                key={cat}
                id={`gallery-filter-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className="rounded-full transition-all duration-200"
                style={{
                  padding: '8px 18px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.85rem',
                  background: activeCategory === cat ? 'var(--fern)' : 'rgba(0,0,0,0.06)',
                  color: activeCategory === cat ? 'white' : '#4a5a4c',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: activeCategory === cat ? 600 : 400,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry grid */}
        <div className="masonry-grid">
          {filtered.map((item: any) => (
            <div
              key={item.id}
              className="masonry-item img-reveal rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setLightboxImg(item)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setLightboxImg(item)}
              aria-label={`View ${item.alt}`}
            >
              <div
                className="relative"
                style={{ height: heightMap[item.height as keyof typeof heightMap] ?? '260px' }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-600"
                />
                {/* Category badge */}
                <div
                  className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'rgba(0,0,0,0.55)',
                    color: 'white',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.cat}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ padding: '32px', background: 'rgba(0,0,0,0.9)', zIndex: 500 }}
          onClick={() => setLightboxImg(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div
            className="relative max-w-4xl w-full"
            style={{ aspectRatio: '16/10', borderRadius: '16px', overflow: 'hidden' }}
            onClick={e => e.stopPropagation()}
          >
            <Image src={lightboxImg.src} alt={lightboxImg.alt} fill style={{ objectFit: 'contain' }} />
          </div>
          <button
            className="absolute top-6 right-6 text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full"
            style={{ background: 'rgba(255,255,255,0.15)' }}
            onClick={() => setLightboxImg(null)}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <p
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {lightboxImg.alt}
          </p>
        </div>
      )}
    </section>
  );
}
