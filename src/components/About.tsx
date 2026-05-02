import Image from 'next/image';
import { Shield, Heart, Star } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Coluna esquerda — foto com frame decorativo */}
          <div className="relative order-2 lg:order-1 flex justify-center">
            {/* Frame dourado deslocado */}
            <div
              className="absolute top-6 left-6 w-full h-full rounded-2xl"
              style={{ border: '1.5px solid rgba(184,148,80,0.35)', zIndex: 0 }}
            />

            {/* Container da foto */}
            <div
              className="relative w-full rounded-2xl overflow-hidden"
              style={{ aspectRatio: '4/5', maxWidth: '460px', zIndex: 1 }}
            >
              <Image
                src="/Larissa_Perfil.jpeg"
                alt="Dra. Larissa Rocha — Advogada Previdenciarista"
                fill
                className="object-cover object-top"
                priority
              />

              {/* Badge sobreposição no rodapé da foto */}
              <div
                className="absolute bottom-0 inset-x-0 px-7 py-6"
                style={{
                  background: 'linear-gradient(to top, rgba(12,26,46,0.92) 0%, transparent 100%)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '2px',
                  }}
                >
                  Dra. Larissa Rocha
                </p>
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.75rem',
                    color: '#b89450',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Advogada Previdenciarista · OAB/SP
                </p>
              </div>
            </div>
          </div>

          {/* Coluna direita — conteúdo */}
          <div className="order-1 lg:order-2">
            <p
              className="font-semibold mb-3"
              style={{
                color: '#b89450',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.75rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
              }}
            >
              Quem está ao seu lado
            </p>

            <h2
              className="mb-5"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2rem, 4vw, 2.9rem)',
                color: '#1c2d4a',
                lineHeight: 1.15,
              }}
            >
              Dra.{' '}
              <span style={{ color: '#b89450', fontStyle: 'italic' }}>Larissa Rocha</span>
              <br />
              Advogada Previdenciarista
            </h2>

            <div className="w-10 h-0.5 mb-7" style={{ background: '#b89450' }} />

            {/* Bio */}
            <p
              className="mb-4"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '1rem',
                color: '#444',
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              Larissa Rocha é Advogada Previdenciarista há{' '}
              <strong style={{ fontWeight: 500, color: '#1c2d4a' }}>15 anos</strong>,
              com Mestrado em Direito Político e Econômico, com ênfase em
              Políticas Públicas Sociais —{' '}
              <strong style={{ fontWeight: 500, color: '#1c2d4a' }}>MACKENZIE</strong>.
            </p>
            <p
              className="mb-8"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '1rem',
                color: '#444',
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              Sempre cheia de fé, com coragem e comprometida a ajudar seus
              clientes da melhor forma possível.
            </p>

            {/* Credenciais em chips */}
            <div className="flex flex-wrap gap-2 mb-10">
              {[
                '15 anos de experiência',
                'BPC & Aposentadoria',
                'Pós-Graduação Mackenzie',
                'Atendimento online — Brasil',
              ].map((c) => (
                <span
                  key={c}
                  className="rounded-full px-4 py-1.5"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.8rem',
                    color: '#1c2d4a',
                    fontWeight: 500,
                    background: '#f0f4fa',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Pilares */}
            <div className="flex flex-col gap-5">
              {[
                {
                  Icon: Shield,
                  label: 'Ética e Transparência',
                  desc: 'Honorários claros, processo acompanhável, sem surpresas.',
                },
                {
                  Icon: Heart,
                  label: 'Atendimento Humanizado',
                  desc: 'Você é mais do que um processo — é uma história que merece atenção.',
                },
                {
                  Icon: Star,
                  label: 'Comprometimento Total',
                  desc: 'Do primeiro contato ao recebimento do benefício, a Dra. Larissa está com você.',
                },
              ].map(({ Icon, label, desc }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: '#fdf5e6' }}
                  >
                    <Icon size={18} style={{ color: '#b89450' }} />
                  </div>
                  <div>
                    <p
                      className="font-medium mb-0.5"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9375rem', color: '#1c2d4a' }}
                    >
                      {label}
                    </p>
                    <p
                      style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem', color: '#888', fontWeight: 300, lineHeight: 1.6 }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Citação — faixa abaixo do grid */}
        <div
          className="mt-20 rounded-2xl p-10 text-center"
          style={{ background: '#1c2d4a' }}
        >
          <p
            className="text-white italic mb-4"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            &ldquo;Cada caso que chega até mim traz uma história de luta.
            Meu compromisso é estar ao lado dessas pessoas,
            com coragem e fé,{' '}
            <span style={{ color: '#b89450' }}>até o fim.&rdquo;</span>
          </p>
          <div className="w-8 h-0.5 mx-auto mb-3" style={{ background: '#b89450', opacity: 0.5 }} />
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Dra. Larissa Rocha
          </p>
        </div>

      </div>
    </section>
  );
}
