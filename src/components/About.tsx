import Image from 'next/image';
import { Shield, Heart, Star } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24" style={{ background: '#f7f5f1' }}>
      <div className="max-w-6xl mx-auto px-5">

        {/* Label centralizado */}
        <p
          className="text-center font-semibold mb-3"
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
          className="text-center mb-16"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 4vw, 2.9rem)',
            color: '#1c2d4a',
            lineHeight: 1.15,
          }}
        >
          Dra.{' '}
          <span style={{ color: '#b89450', fontStyle: 'italic' }}>Larissa Rocha</span>
          {' '}— Advogada Previdenciarista
        </h2>

        <div className="grid lg:grid-cols-5 gap-14 items-start">

          {/* Coluna foto — 2 de 5 */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            {/* Wrapper com padding para o frame aparecer */}
            <div className="relative pl-4 pt-4">
              {/* Frame decorativo dourado atrás */}
              <div
                className="absolute top-0 left-0 rounded-2xl"
                style={{
                  right: '16px',
                  bottom: '16px',
                  border: '1.5px solid rgba(184,148,80,0.4)',
                }}
              />
              {/* Foto — cintura */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-xl"
                style={{ aspectRatio: '1/1' }}
              >
                <Image
                  src="/Larissa_Perfil.jpeg"
                  alt="Dra. Larissa Rocha — Advogada Previdenciarista"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                  loading="lazy"
                />
                {/* Overlay gradiente + nome */}
                <div
                  className="absolute bottom-0 inset-x-0 px-6 py-5"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,22,42,0.9) 0%, transparent 100%)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.25rem',
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
                      fontSize: '0.7rem',
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

            {/* Credenciais abaixo da foto */}
            <div
              className="mt-6 rounded-xl p-5 grid grid-cols-2 gap-4"
              style={{ background: '#1c2d4a' }}
            >
              {[
                { label: 'Experiência', value: '15 anos' },
                { label: 'Especialidade', value: 'BPC & Aposentadoria' },
                { label: 'Mestrado', value: 'Mackenzie' },
                { label: 'Atendimento', value: 'Todo o Brasil' },
              ].map((c) => (
                <div key={c.label}>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '3px' }}>
                    {c.label}
                  </p>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.85rem', color: '#b89450', fontWeight: 500 }}>
                    {c.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna conteúdo — 3 de 5 */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="w-10 h-0.5 mb-8" style={{ background: '#b89450' }} />

            {/* Bio */}
            <p
              className="mb-4"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '1rem',
                color: '#444',
                fontWeight: 300,
                lineHeight: 1.85,
              }}
            >
              Larissa Rocha é Advogada Previdenciarista há{' '}
              <strong style={{ fontWeight: 500, color: '#1c2d4a' }}>15 anos</strong>,
              com Mestrado em Direito Político e Econômico, com ênfase em
              Políticas Públicas Sociais —{' '}
              <strong style={{ fontWeight: 500, color: '#1c2d4a' }}>MACKENZIE</strong>.
            </p>
            <p
              className="mb-10"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '1rem',
                color: '#444',
                fontWeight: 300,
                lineHeight: 1.85,
              }}
            >
              Sempre cheia de fé, com coragem e comprometida a ajudar seus
              clientes da melhor forma possível.
            </p>

            {/* Pilares */}
            <div className="flex flex-col gap-6 mb-10">
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
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: '#fff', border: '1px solid #e8e4df' }}
                  >
                    <Icon size={18} style={{ color: '#b89450' }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p
                      className="font-medium mb-1"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9375rem', color: '#1c2d4a' }}
                    >
                      {label}
                    </p>
                    <p
                      style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem', color: '#888', fontWeight: 300, lineHeight: 1.65 }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Citação */}
            <blockquote
              className="rounded-xl px-8 py-6"
              style={{ background: '#1c2d4a', borderLeft: '3px solid #b89450' }}
            >
              <p
                className="text-white italic mb-3"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.2rem',
                  fontWeight: 400,
                  lineHeight: 1.65,
                }}
              >
                &ldquo;Cada caso que chega até mim traz uma história de luta.
                Meu compromisso é estar ao lado dessas pessoas,
                com coragem e fé,{' '}
                <span style={{ color: '#b89450' }}>até o fim.&rdquo;</span>
              </p>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                }}
              >
                — Dra. Larissa Rocha
              </p>
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}
