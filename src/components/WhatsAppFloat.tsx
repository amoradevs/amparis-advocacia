'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WA_URL =
  'https://wa.me/5511997904557?text=Olá!%20Vim%20pelo%20site%20da%20Amparis%20Advocacia%20e%20gostaria%20de%20uma%20análise%20gratuita%20do%20meu%20caso.';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('inicio');
    const check = () => {
      const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
      setVisible(heroBottom < 0);
    };
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5c] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:scale-110"
      style={{
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.3s ease, transform 0.2s ease',
      }}
    >
      <MessageCircle size={28} className="text-white" fill="white" />
    </a>
  );
}
