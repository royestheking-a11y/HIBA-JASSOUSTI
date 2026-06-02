'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { t } = useLanguage();
  
  const links = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'research', label: t('nav.research') },
    { id: 'contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // More robust scroll spy using getBoundingClientRect
      let current = '';
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section reaches the middle of the screen
          if (rect.top <= window.innerHeight * 0.55) {
            current = links[i].id;
            break;
          }
        }
      }
      if (current) setActive(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="sticky top-0 z-200 w-full flex justify-center transition-all duration-300"
      style={{
        padding: '1.5rem 0',
        background: scrolled ? 'rgba(237, 229, 204, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
      }}
      aria-label="Top navigation"
    >
      <div 
        className="w-full relative flex items-center justify-between"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          paddingLeft: '5%',
          paddingRight: '5%'
        }}
      >
        {/* ── Left: Logo ── */}
        <div className="flex-1">
          <button
            onClick={() => scrollTo('home')}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1rem, 4vw, 1.25rem)',
              fontWeight: 600,
              color: '#1e2e20',
              letterSpacing: '0.15em',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            HIBA JASSOUSTI
          </button>
        </div>
        
        {/* ── Center: Links (Desktop) ── */}
        <div className="hidden lg:flex items-center justify-center gap-6 lg:gap-10 shrink-0">
          {links.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="relative flex items-center transition-all duration-200"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: isActive ? 500 : 400,
                  letterSpacing: '0.05em',
                  color: isActive ? '#1e2e20' : '#4a5a4c',
                  textTransform: 'uppercase',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 0',
                }}
              >
                <span
                  style={{
                    width: isActive ? '4px' : '0px',
                    height: '4px',
                    borderRadius: '50%',
                    background: '#7a8c7b',
                    marginRight: isActive ? '6px' : '0px',
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'scale(1)' : 'scale(0)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'inline-block',
                  }}
                />
                <span style={{ transition: 'color 0.3s ease' }}>{label}</span>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: isActive ? '100%' : '0%',
                    height: '1px',
                    background: '#1e2e20',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: isActive ? 1 : 0,
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* ── Right: CTA Button & Toggle (Desktop) ── */}
        <div className="flex-1 hidden lg:flex items-center justify-end gap-4">
          <LanguageToggle />
          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-3 rounded-full transition-all duration-200"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 500,
              color: '#1e2e20',
              border: '1px solid rgba(30,46,32,0.3)',
              padding: '0.5rem 1.25rem',
              background: scrolled ? 'transparent' : 'rgba(255,255,255,0.15)',
              backdropFilter: scrolled ? 'none' : 'blur(8px)',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = '#1e2e20';
              (e.currentTarget as HTMLElement).style.color = 'white';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = scrolled ? 'transparent' : 'rgba(255,255,255,0.15)';
              (e.currentTarget as HTMLElement).style.color = '#1e2e20';
            }}
          >
            {t('hero.contactMe')}
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </button>
        </div>

        {/* ── Mobile Hamburger Icon & Toggle ── */}
        <div className="flex lg:hidden flex-1 justify-end items-center gap-4">
          <LanguageToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#1e2e20',
              padding: '8px',
            }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className="lg:hidden fixed inset-0 z-100 flex flex-col justify-center items-center transition-all duration-500 ease-in-out"
        style={{
          background: 'rgba(237, 229, 204, 0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          top: '0',
          left: '0',
          height: '100vh',
          width: '100vw',
        }}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1e2e20' }}
        >
          <X size={32} />
        </button>

        <div className="flex flex-col items-center gap-8">
          {links.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="transition-all duration-300"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '2.5rem',
                  color: isActive ? '#7a8c7b' : '#1e2e20',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: mobileMenuOpen ? `${links.findIndex(l => l.id === id) * 50}ms` : '0ms',
                }}
              >
                {label}
              </button>
            );
          })}
          
          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-3 rounded-full mt-8"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              fontWeight: 500,
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              background: '#1e2e20',
              cursor: 'pointer',
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: mobileMenuOpen ? `${links.length * 50}ms` : '0ms',
              transition: 'all 0.3s ease',
            }}
          >
            {t('hero.contactMe')}
            <ArrowUpRight size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </nav>
  );
}
