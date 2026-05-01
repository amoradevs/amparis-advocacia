'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#areas', label: 'Áreas de Atuação' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="#inicio" className="flex items-center gap-3">
          <Image
            src={scrolled ? '/Fundo_claro.jpg' : '/Fundo_escuro.jpg'}
            alt="Amparis Advocacia"
            width={120}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-medium text-sm tracking-widest uppercase transition-colors duration-200 ${
                  scrolled
                    ? 'text-[#1a2744] hover:text-[#b8964a]'
                    : 'text-white hover:text-[#b8964a]'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              className="btn-primary text-sm py-2 px-5"
            >
              Fale Conosco
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? 'bg-[#1a2744]' : 'bg-white'
            } ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? 'bg-[#1a2744]' : 'bg-white'
            } ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? 'bg-[#1a2744]' : 'bg-white'
            } ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a2744] px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white text-sm tracking-widest uppercase hover:text-[#b8964a] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contato"
                className="btn-primary inline-block text-sm py-2 px-5"
                onClick={() => setMenuOpen(false)}
              >
                Fale Conosco
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
