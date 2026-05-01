import { MessageCircle, ChevronDown } from 'lucide-react';

const WA_URL =
  'https://wa.me/5511999999999?text=Olá!%20Vim%20pelo%20site%20da%20Amparis%20Advocacia%20e%20gostaria%20de%20uma%20análise%20gratuita%20do%20meu%20caso.';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #060f1a 0%, #0b1c2c 55%, #162c45 100%)',
      }}
    >
      {/* Subtle diagonal pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #c5a059 0px,
            #c5a059 1px,
            transparent 1px,
            transparent 70px
          )`,
        }}
      />

      {/* Gold top line */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-70" />

      {/* Decorative balance scale — SVG illustration */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center opacity-5 pointer-events-none select-none">
        <svg viewBox="0 0 200 220" className="w-96 h-96 text-[#c5a059]" fill="currentColor">
          <rect x="96" y="10" width="8" height="180" rx="2" />
          <rect x="40" y="30" width="120" height="6" rx="3" />
          <circle cx="100" cy="28" r="10" />
          <ellipse cx="55" cy="80" rx="30" ry="8" />
          <rect x="50" y="80" width="10" height="50" />
          <rect x="30" y="128" width="50" height="6" rx="3" />
          <ellipse cx="145" cy="80" rx="30" ry="8" />
          <rect x="140" y="80" width="10" height="50" />
          <rect x="120" y="128" width="50" height="6" rx="3" />
          <rect x="80" y="190" width="40" height="8" rx="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-28 pb-16 lg:pt-36">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#c5a059]/10 border border-[#c5a059]/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-pulse" />
            <span
              className="text-[#c5a059] text-xs tracking-widest uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Especialistas em BPC e Aposentadoria
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white mb-6"
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(2.6rem, 6vw, 4.5rem)',
              fontWeight: 600,
              lineHeight: 1.1,
            }}
          >
            Amparo e Segurança
            <br />
            para a sua{' '}
            <span className="text-[#c5a059] italic">Aposentadoria</span>
            <br />e <span className="text-[#c5a059] italic">BPC.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-white/70 mb-10 leading-relaxed"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            }}
          >
            Mais do que excelência jurídica, oferecemos um atendimento cuidadoso
            para amparar suas necessidades.{' '}
            <strong className="text-white/90 font-medium">
              Nós não desistimos do seu direito.
            </strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-semibold px-7 py-4 rounded transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', letterSpacing: '0.05em' }}
            >
              <MessageCircle size={18} />
              Falar pelo WhatsApp
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2.5 border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-[#0b1c2c] font-semibold px-7 py-4 rounded transition-all"
              style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', letterSpacing: '0.05em' }}
            >
              Análise Gratuita do Caso
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-5">
            {[
              'Honorários apenas no êxito',
              'Consulta 100% gratuita',
              'Atendimento online em todo Brasil',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#c5a059] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span
                  className="text-white/60 text-xs"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#atuacao"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-[#c5a059] transition-colors"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>Ver mais</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
