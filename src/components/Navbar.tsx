'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MessageCircle, Menu, X } from 'lucide-react';

const WA_URL =
  'https://wa.me/5511997904557?text=Olá!%20Vim%20pelo%20site%20da%20Amparis%20Advocacia%20e%20gostaria%20de%20uma%20análise%20gratuita%20do%20meu%20caso.';

const links = [
  { href: '#atuacao', label: 'Áreas de Atuação' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#sobre', label: 'A Dra. Larissa' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? '#1c2d4a' : 'rgba(28,45,74,0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.2)' : 'none',
        padding: scrolled ? '10px 0' : '14px 0',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <a href="#inicio" aria-label="Amparis Advocacia — Início">
          <Image
            src="/Fundo_escuro.jpg"
            alt="Amparis Advocacia"
            width={130}
            height={58}
            className="object-contain"
            priority
          />
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/75 hover:text-white text-sm font-medium transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa !py-2.5 !px-5 !text-sm"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2 -mr-1 rounded"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-5 py-6"
          style={{ background: '#13213a', borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <ul className="flex flex-col gap-5 mb-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-white/80 text-base font-medium hover:text-white transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa w-full"
            onClick={() => setOpen(false)}
          >
            <MessageCircle size={18} />
            Falar pelo WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
