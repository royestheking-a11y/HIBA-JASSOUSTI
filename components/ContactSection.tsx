'use client';

import { useState } from 'react';
import { Mail, MapPin, Download, ArrowUpRight, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the mailto link with pre-filled subject and body
    const subject = encodeURIComponent(`New Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello,\n\n${formData.message}\n\nFrom:\n${formData.name}\n${formData.email}`
    );
    
    // Open default mail client
    window.location.href = `mailto:h.jassousti.architect@gmail.com?subject=${subject}&body=${body}`;
    
    // Show success state on the UI
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="relative w-full mobile-section-padding"
      style={{ minHeight: '100vh', background: 'var(--fern)', paddingTop: '100px', paddingBottom: '100px' }}
    >
      {/* Blueprint decorative SVG lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.06 }}
        aria-hidden="true"
      >
        {/* Horizontal lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 60} x2="100%" y2={i * 60} stroke="#B7CBDB" strokeWidth="0.5" />
        ))}
        {/* Vertical lines */}
        {Array.from({ length: 30 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="100%" stroke="#B7CBDB" strokeWidth="0.5" />
        ))}
        {/* Diagonal accent lines */}
        <line x1="0" y1="0" x2="40%" y2="100%" stroke="#B7CBDB" strokeWidth="0.8" strokeDasharray="8,12" />
        <line x1="100%" y1="0" x2="60%" y2="100%" stroke="#B7CBDB" strokeWidth="0.8" strokeDasharray="8,12" />
        {/* Circles */}
        <circle cx="50%" cy="50%" r="300" stroke="#B7CBDB" strokeWidth="0.8" fill="none" />
        <circle cx="50%" cy="50%" r="200" stroke="#B7CBDB" strokeWidth="0.5" fill="none" />
      </svg>

      <div 
        className="relative z-10 w-full mobile-container-padding"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          paddingLeft: '5%',
          paddingRight: '5%'
        }}
      >
        <span
          style={{
            display: 'block',
            marginBottom: '24px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
            opacity: 0.8,
            color: 'white',
            textTransform: 'uppercase',
          }}
        >
          {t('contact.sectionNum')}
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '64px', marginTop: '24px' }}>
          {/* ─── Left: Info ─── */}
          <div>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 300,
                color: 'white',
                lineHeight: 1.1,
              }}
            >
              {t('contact.titleLine1')}<br />
              <em style={{ color: 'var(--bluebell)' }}>{t('contact.titleLine2')}</em>
            </h2>

            <p
              style={{
                marginTop: '24px',
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.05rem',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: 1.7,
                maxWidth: '360px',
              }}
            >
              &ldquo; {t('contact.quote')} &rdquo;
            </p>

            {/* Contact cards */}
            <div className="flex flex-col" style={{ gap: '16px', marginTop: '40px' }}>
              {[
                {
                  icon: () => <Mail size={18} />,
                  label: t('contact.email'),
                  value: 'h.jassousti.architect@gmail.com',
                  href: 'mailto:h.jassousti.architect@gmail.com',
                  color: 'var(--peony)',
                },
                {
                  icon: LinkedinIcon,
                  label: t('contact.linkedin'),
                  value: 'linkedin.com/in/hibajassousti',
                  href: 'https://linkedin.com',
                  color: '#0A66C2',
                },
                {
                  icon: () => <MapPin size={18} />,
                  label: t('contact.location'),
                  value: 'Tunis, Tunisia',
                  href: null,
                  color: 'var(--honey)',
                },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <div
                  key={label}
                  id={`contact-${label.toLowerCase()}`}
                  className="rounded-xl transition-all duration-200"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '16px', padding: '16px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(183,203,219,0.12)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${color}22`, color }}
                  >
                    <Icon />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', color: 'rgba(255,255,255,0.9)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="flex items-center gap-1 hover:underline"
                        style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'white', textDecoration: 'none' }}
                      >
                        {value} <ArrowUpRight size={12} />
                      </a>
                    ) : (
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'white' }}>
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Download CV */}
            <a
              id="contact-download-cv-btn"
              href="/hiba_jassousti_cv.pdf"
              download="Hiba_Jassousti_CV.pdf"
              className="rounded-full transition-all duration-300"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', marginTop: '24px',
                background: 'var(--honey)',
                color: '#2c2c2c',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--honey-dark)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--honey)'; }}
            >
              <Download size={16} />
              {t('contact.downloadCv')}
            </a>
          </div>

          {/* ─── Right: Contact Form ─── */}
          <div>
            <div
              className="rounded-2xl"
              style={{
                padding: '32px',
                background: 'rgba(183,203,219,0.06)',
                border: '1px solid rgba(183,203,219,0.15)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <h3
                style={{
                  marginBottom: '24px',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.6rem',
                  fontWeight: 400,
                  color: 'white',
                }}
              >
                {t('contact.sendMessageTitle')}
              </h3>

              {sent ? (
                <div
                  className="flex flex-col items-center justify-center py-12 gap-4"
                  style={{ color: 'var(--bluebell)' }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(183,203,219,0.15)' }}>
                    <Send size={28} />
                  </div>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', color: 'white' }}>
                    {t('contact.messageSent')}
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>
                    {t('contact.messageThanks')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: '16px' }}>
                  {[
                    { id: 'contact-name', label: t('contact.yourName'), type: 'text', field: 'name', placeholder: t('contact.placeholderName') },
                    { id: 'contact-email', label: t('contact.emailAddress'), type: 'email', field: 'email', placeholder: t('contact.placeholderEmail') },
                  ].map(({ id, label, type, field, placeholder }) => (
                    <div key={field}>
                      <label
                        htmlFor={id}
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.72rem',
                          color: 'rgba(255,255,255,0.9)',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          display: 'block',
                          marginBottom: '6px',
                        }}
                      >
                        {label}
                      </label>
                      <input
                        id={id}
                        type={type}
                        required
                        value={formData[field as keyof typeof formData]}
                        onChange={e => setFormData((f: typeof formData) => ({ ...f, [field]: e.target.value }))}
                        placeholder={placeholder}
                        className="contact-input rounded-xl outline-none transition-all duration-200 placeholder-white placeholder-opacity-70"
                        style={{
                          width: '100%', padding: '12px 16px',
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(183,203,219,0.2)',
                          color: 'white',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.85rem',
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="contact-message"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.72rem',
                        color: 'rgba(255,255,255,0.9)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '6px',
                      }}
                    >
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData((f: typeof formData) => ({ ...f, message: e.target.value }))}
                      placeholder={t('contact.placeholderMessage')}
                      className="contact-input rounded-xl outline-none transition-all duration-200 resize-none placeholder-white placeholder-opacity-70"
                      style={{
                        width: '100%', padding: '12px 16px',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(183,203,219,0.2)',
                        color: 'white',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.85rem',
                      }}
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="btn-honey transition-all duration-300"
                    style={{ width: '100%', marginTop: '8px', display: 'flex', justifyContent: 'center', gap: '8px', padding: '14px 32px' }}
                  >
                    {t('contact.sendBtn')} <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 md:gap-0"
          style={{ 
            marginTop: '80px', paddingTop: '32px', borderTop: '1px solid rgba(183,203,219,0.12)' 
          }}
        >
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.4rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.2)',
              letterSpacing: '0.1em',
            }}
          >
            {t('contact.footerName')}
          </span>
          {t('contact.footerDescription') && (
            <p
              className="mt-2 md:mt-0 md:max-w-[400px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.4)',
                lineHeight: 1.5,
              }}
            >
              {t('contact.footerDescription')}
            </p>
          )}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.72rem',
              color: 'rgba(255,255,255,0.2)',
            }}
          >
            © {new Date().getFullYear()} {t('contact.rights')} | {t('contact.designedBy')}{' '}
            <a 
              href="https://www.linkedin.com/in/aurangzebsunny/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >
              Aurangzeb Sunny
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
