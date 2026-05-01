import { MessageCircle, ChevronDown } from 'lucide-react';

const WA_URL =
  'https://wa.me/5511997904557?text=Olá!%20Vim%20pelo%20site%20da%20Amparis%20Advocacia%20e%20gostaria%20de%20uma%20análise%20gratuita%20do%20meu%20caso.';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(150deg, #0a1628 0%, #111f38 50%, #1c2d4a 100%)',
      }}
    >
      {/* Gold line top */}
      <div
        className="absolute top-0 inset-x-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #b89450, transparent)' }}
      />

      {/* Subtle diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg,#b89450 0,#b89450 1px,transparent 1px,transparent 60px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-32 pb-20 w-full">
        {/* Pill badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8"
          style={{ background: 'rgba(184,148,80,0.12)', border: '1px solid rgba(184,148,80,0.3)' }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: '#b89450' }}
          />
          <span
            className="text-sm font-medium"
            style={{ color: '#b89450', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.04em' }}
          >
            Especialistas em BPC e Aposentadoria
          </span>
        </div>

        {/* Headline — tamanho generoso para leitura fácil */}
        <h1
          className="mb-6 max-w-3xl"
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            color: '#ffffff',
            textShadow: '0 2px 20px rgba(0,0,0,0.4)',
          }}
        >
          Amparo e Segurança
          <br />
          para a sua{' '}
          <span style={{ color: '#b89450', fontStyle: 'italic' }}>Aposentadoria</span>
          {' '}e{' '}
          <span style={{ color: '#b89450', fontStyle: 'italic' }}>BPC.</span>
        </h1>

        {/* Subtitle — fonte mínima 17px */}
        <p
          className="mb-10 max-w-xl"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '1.0625rem',
            fontWeight: 400,
            lineHeight: 1.8,
            color: 'rgba(255,255,255,0.85)',
          }}
        >
          Mais do que excelência jurídica, um atendimento cuidadoso
          para amparar você em cada etapa.{' '}
          <strong className="text-white font-medium">Nós não desistimos do seu direito.</strong>
        </p>

        {/* CTAs — primário WhatsApp, secundário formulário */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-wa">
            <MessageCircle size={20} />
            Falar agora pelo WhatsApp
          </a>
          <a href="#contato" className="btn-outline-gold">
            Análise Gratuita do Meu Caso
          </a>
        </div>

        {/* Trust bar */}
        <div
          className="inline-flex flex-wrap gap-x-8 gap-y-3 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          {[
            { icon: '✓', text: 'Honorários só quando você receber' },
            { icon: '✓', text: '15 anos de experiência' },
            { icon: '✓', text: 'Atendimento online para todo Brasil' },
            { icon: '✓', text: 'Consulta inicial gratuita' },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <span style={{ color: '#b89450', fontWeight: 700 }}>{icon}</span>
              <span
                className="text-white/55"
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#atuacao"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 hover:opacity-70 transition-opacity"
        style={{ color: 'rgba(255,255,255,0.25)' }}
        aria-label="Ver conteúdo"
      >
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
