import Image from 'next/image';
import { MessageCircle } from 'lucide-react';

const WA_URL =
  'https://wa.me/5511999999999?text=Olá!%20Vim%20pelo%20site%20da%20Amparis%20Advocacia%20e%20gostaria%20de%20uma%20análise%20gratuita%20do%20meu%20caso.';

export default function Footer() {
  return (
    <footer style={{ background: '#060f1a' }}>
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #c5a059, transparent)', opacity: 0.4 }} />

      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Image
              src="/Fundo_escuro.jpg"
              alt="Amparis Advocacia"
              width={130}
              height={60}
              className="object-contain mb-4"
            />
            <p
              className="text-white/40 text-xs leading-relaxed mb-5 max-w-xs"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
            >
              Especialistas em BPC e Aposentadoria. Atendimento humanizado,
              honorários apenas no êxito, para todo o Brasil.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white text-xs font-medium px-4 py-2 rounded border border-[#25D366]/30 transition-all"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <MessageCircle size={13} />
              Falar pelo WhatsApp
            </a>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Áreas de Atuação
            </p>
            <ul className="flex flex-col gap-2.5">
              {['BPC / LOAS para Idosos', 'BPC para Pessoas com Deficiência', 'Aposentadoria por Idade', 'Aposentadoria por Invalidez', 'Recursos e Negativas do INSS'].map((item) => (
                <li key={item}>
                  <a
                    href="#atuacao"
                    className="text-white/35 hover:text-[#c5a059] text-xs transition-colors"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Contato
            </p>
            <div className="flex flex-col gap-3 text-white/35 text-xs" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <p>larissarocha@amparis.com.br</p>
              <p>(11) 99999-9999</p>
              <p className="leading-relaxed">
                Rua Barcelona, 340, B — Sala 05<br />
                Jaguaré, São Paulo — SP<br />
                CEP: 05331-011
              </p>
              <p>Seg — Sex: 8h às 18h</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            © {new Date().getFullYear()} Amparis Advocacia · Dra. Larissa Rocha · Todos os direitos reservados
          </p>
          <p className="text-white/15 text-xs text-center max-w-md leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Este site não é vinculado ao INSS ou qualquer órgão governamental. Serviços exclusivamente jurídicos privados.
          </p>
        </div>
      </div>
    </footer>
  );
}
