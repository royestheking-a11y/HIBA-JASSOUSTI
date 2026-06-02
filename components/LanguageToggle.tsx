'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="relative flex items-center bg-black/5 backdrop-blur-md border border-black/10 rounded-full p-1" style={{ width: '80px', height: '36px' }}>
      <button
        onClick={() => { if (language !== 'en') toggleLanguage(); }}
        className="relative z-10 w-1/2 h-full flex items-center justify-center text-xs font-medium tracking-widest transition-colors"
        style={{ color: language === 'en' ? '#1c1c1c' : 'rgba(30,46,32,0.6)', fontFamily: 'Inter, sans-serif' }}
      >
        EN
      </button>
      <button
        onClick={() => { if (language !== 'fr') toggleLanguage(); }}
        className="relative z-10 w-1/2 h-full flex items-center justify-center text-xs font-medium tracking-widest transition-colors"
        style={{ color: language === 'fr' ? '#1c1c1c' : 'rgba(30,46,32,0.6)', fontFamily: 'Inter, sans-serif' }}
      >
        FR
      </button>
      <motion.div
        className="absolute top-1 bottom-1 w-[34px] rounded-full"
        style={{ background: 'var(--honey)', left: '4px' }}
        animate={{
          x: language === 'en' ? 0 : 38
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </div>
  );
}
