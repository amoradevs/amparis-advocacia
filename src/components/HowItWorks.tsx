const steps = [
  {
    n: '01',
    title: 'Fale Conosco',
    desc: 'Entre em contato pelo WhatsApp ou preencha o formulário. A equipe responde rapidamente e sem burocracia.',
  },
  {
    n: '02',
    title: 'Análise do Seu Caso',
    desc: 'A Dra. Larissa analisa sua situação, orienta sobre seus direitos e define a estratégia mais segura — sem custo.',
  },
  {
    n: '03',
    title: 'Acompanhamento até o Fim',
    desc: 'Lutamos em todas as etapas, administrativo ou judicial, até você receber o que é seu por direito.',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24" style={{ background: '#f7f5f1' }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
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
            O processo é simples
          </p>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#1c2d4a',
            }}
          >
            Como{' '}
            <span style={{ color: '#b89450', fontStyle: 'italic' }}>Funciona</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((s, i) => (
            <div key={s.n} className="flex flex-col items-center text-center">
              {/* Número */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                style={{
                  background: i === 1 ? '#1c2d4a' : 'white',
                  border: '2px solid #b89450',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.6rem',
                    fontWeight: 600,
                    color: i === 1 ? '#b89450' : '#1c2d4a',
                  }}
                >
                  {s.n}
                </span>
              </div>

              <h3
                className="mb-3"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.4rem',
                  color: '#1c2d4a',
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.9375rem',
                  color: '#666',
                  fontWeight: 300,
                  lineHeight: 1.75,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Nota honorários */}
        <div
          className="rounded-xl p-8 flex flex-col md:flex-row items-center gap-6"
          style={{ background: '#1c2d4a' }}
        >
          <div
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '2.5rem',
              color: '#b89450',
            }}
          >
            ⚖
          </div>
          <div className="text-center md:text-left">
            <p
              className="text-white font-semibold mb-1"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.35rem' }}
            >
              Honorários: 30% — somente quando você receber
            </p>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.9375rem',
                color: 'rgba(255,255,255,0.5)',
                fontWeight: 300,
              }}
            >
              Se não houver resultado, nada será cobrado. Zero risco financeiro para você.
            </p>
          </div>
          <a
            href="#contato"
            className="btn-gold md:ml-auto flex-shrink-0 !py-3 !px-6 !text-sm"
          >
            Quero começar
          </a>
        </div>
      </div>
    </section>
  );
}
