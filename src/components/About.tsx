import { Shield, Heart, Star } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Lado esquerdo — card visual sem foto */}
          <div className="relative order-2 lg:order-1">
            {/* Frame decorativo */}
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
              style={{ border: '1.5px solid rgba(184,148,80,0.25)' }}
            />

            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #1c2d4a 0%, #13213a 100%)',
                minHeight: '440px',
              }}
            >
              <div className="p-10 flex flex-col justify-between h-full gap-10">
                {/* Citação */}
                <blockquote
                  className="text-center"
                >
                  <p
                    className="text-white italic mb-4"
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.25rem',
                      fontWeight: 400,
                      lineHeight: 1.6,
                    }}
                  >
                    &ldquo;Cada caso que chega até mim traz uma história de luta.
                    Meu compromisso é estar ao lado dessas pessoas,
                    com coragem e fé, até o fim.&rdquo;
                  </p>
                  <div className="w-8 h-0.5 mx-auto mb-3" style={{ background: '#b89450', opacity: 0.5 }} />
                  <p
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '0.8rem',
                      color: '#b89450',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                    }}
                  >
                    DRA. LARISSA ROCHA
                  </p>
                </blockquote>

                {/* Credenciais */}
                <div
                  className="grid grid-cols-2 gap-4 pt-6"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {[
                    { label: 'Experiência', value: '15 anos' },
                    { label: 'Especialidade', value: 'BPC & Aposentadoria' },
                    { label: 'Pós-Graduação', value: 'Mackenzie' },
                    { label: 'Atendimento', value: 'Todo o Brasil' },
                  ].map((c) => (
                    <div key={c.label}>
                      <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>
                        {c.label}
                      </p>
                      <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem', color: '#b89450', fontWeight: 500 }}>
                        {c.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Lado direito — texto */}
          <div className="order-1 lg:order-2">
            <p
              className="font-semibold mb-3"
              style={{
                color: '#b89450',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.8rem',
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

            {/* Bio fornecida pela cliente — texto integral */}
            <p
              className="mb-5"
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
      </div>
    </section>
  );
}
