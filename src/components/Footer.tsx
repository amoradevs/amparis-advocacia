import Image from 'next/image';
import { MessageCircle } from 'lucide-react';

const WA_URL =
  'https://wa.me/5511999999999?text=Olá!%20Vim%20pelo%20site%20da%20Amparis%20Advocacia%20e%20gostaria%20de%20uma%20análise%20gratuita%20do%20meu%20caso.';

export default function Footer() {
  return (
    <footer style={{ background: '#0d1a2d' }}>
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, #b89450, transparent)', opacity: 0.4 }}
      />

      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Marca */}
          <div>
            <Image
              src="/Fundo_escuro.jpg"
              alt="Amparis Advocacia"
              width={130}
              height={60}
              className="object-contain mb-5"
            />
            <p
              className="mb-5"
              style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', fontWeight: 300, lineHeight: 1.7 }}
            >
              Especialistas em BPC e Aposentadoria. Atendimento humanizado,
              honorários apenas no êxito. Online para todo o Brasil.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-sm transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#25D366', textDecoration: 'none' }}
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>

          {/* Áreas */}
          <div>
            <p
              className="mb-4 font-semibold"
              style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', color: '#b89450', letterSpacing: '0.3em', textTransform: 'uppercase' }}
            >
              Áreas de Atuação
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                'BPC para Idosos (65+)',
                'BPC para Pessoas com Deficiência',
                'Aposentadoria por Idade',
                'Aposentadoria por Invalidez',
                'Recursos e Negativas do INSS',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#atuacao"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p
              className="mb-4 font-semibold"
              style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', color: '#b89450', letterSpacing: '0.3em', textTransform: 'uppercase' }}
            >
              Contato
            </p>
            <div
              className="flex flex-col gap-3"
              style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.65 }}
            >
              <p>larissarocha@amparis.com.br</p>
              <p>(11) 99999-9999</p>
              <p>Rua Barcelona, 340, B — Sala 05<br />Jaguaré, São Paulo — SP<br />CEP: 05331-011</p>
              <p>Seg — Sex: 8h às 18h</p>
            </div>
          </div>
        </div>

        {/* Barra legal */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}
          >
            © {new Date().getFullYear()} Amparis Advocacia · Dra. Larissa Rocha · Todos os direitos reservados
          </p>
          <p
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', color: 'rgba(255,255,255,0.15)', textAlign: 'center', maxWidth: '360px', lineHeight: 1.5 }}
          >
            Este site não é vinculado ao INSS ou qualquer órgão governamental.
            Serviços exclusivamente jurídicos privados.
          </p>
        </div>
      </div>
    </footer>
  );
}
