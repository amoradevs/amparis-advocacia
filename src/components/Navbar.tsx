'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MessageCircle, Menu, X } from 'lucide-react';

const WA_URL =
  'https://wa.me/5511999999999?text=Olá!%20Vim%20pelo%20site%20da%20Amparis%20Advocacia%20e%20gostaria%20de%20tirar%20uma%20dúvida.';

const links = [
  { href: '#atuacao', label: 'Áreas de Atuação' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b1c2c]/98 shadow-lg backdrop-blur-md py-3'
          : 'bg-[#0b1c2c]/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio">
          <Image
            src="/Fundo_escuro.jpg"
            alt="Amparis Advocacia"
            width={130}
            height={60}
            className="object-contain"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-[#c5a059] text-xs font-medium tracking-widest uppercase transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5c] text-white text-xs font-semibold px-5 py-2.5 rounded transition-colors"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0b1c2c] border-t border-white/10 px-5 py-5">
          <ul className="flex flex-col gap-4 mb-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-white/80 text-sm tracking-widest uppercase hover:text-[#c5a059] transition-colors"
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
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-3 rounded w-full"
          >
            <MessageCircle size={16} />
            Falar pelo WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
