export default function About() {
  const pillars = [
    {
      icon: '⚖',
      title: 'Ética',
      desc: 'Atuamos com integridade absoluta em cada caso, respeitando os mais altos padrões da ética jurídica.',
    },
    {
      icon: '◈',
      title: 'Excelência',
      desc: 'Buscamos a melhor estratégia jurídica para cada situação, com análise cuidadosa e fundamentada.',
    },
    {
      icon: '◉',
      title: 'Comprometimento',
      desc: 'Estamos ao lado de nossos clientes em cada etapa do processo, com atenção personalizada.',
    },
  ];

  return (
    <section id="sobre" className="py-28 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — Image with decorative frame */}
          <div className="relative">
            <div
              className="absolute -top-6 -left-6 w-full h-full border-2 border-[#b8964a] opacity-30 rounded-sm"
            />
            <div
              className="relative w-full aspect-[4/5] rounded-sm overflow-hidden shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #1a2744 0%, #243258 100%)' }}
            >
              {/* Logo version on dark background as decorative visual */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-12">
                <div className="text-center">
                  <p
                    className="text-white/20 text-xs tracking-[0.5em] uppercase mb-8"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Fundado em 2013
                  </p>
                  <div
                    className="text-white font-light leading-tight mb-4"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: '3.5rem',
                    }}
                  >
                    A
                  </div>
                  <div className="w-20 h-px bg-[#b8964a] mx-auto mb-4" />
                  <p
                    className="text-[#b8964a] text-xs tracking-[0.5em] uppercase"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Amparis Advocacia
                  </p>
                </div>

                <div className="w-full border-t border-white/10 pt-8 grid grid-cols-2 gap-6 text-center">
                  <div>
                    <p className="text-[#b8964a] text-3xl font-light mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>+10</p>
                    <p className="text-white/40 text-xs tracking-widest uppercase">Anos</p>
                  </div>
                  <div>
                    <p className="text-[#b8964a] text-3xl font-light mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>+500</p>
                    <p className="text-white/40 text-xs tracking-widest uppercase">Casos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text content */}
          <div>
            <p className="text-[#b8964a] text-xs tracking-[0.4em] uppercase font-medium mb-4">
              Quem Somos
            </p>

            <h2
              className="text-[#1a2744] leading-tight mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 300,
              }}
            >
              Um escritório fundado
              <br />
              <span className="text-[#b8964a] italic">na confiança</span> e na
              <br />
              excelência jurídica
            </h2>

            <span className="section-divider mb-8" />

            <p className="text-gray-600 leading-relaxed mb-5 text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
              A Amparis Advocacia nasceu com a missão de oferecer assessoria jurídica de alto nível,
              com atendimento personalizado e estratégias eficazes para proteger os direitos de cada cliente.
            </p>

            <p className="text-gray-600 leading-relaxed mb-10 text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
              Nosso time é formado por advogados especializados em diferentes áreas do Direito,
              comprometidos em entregar não apenas resultados jurídicos, mas paz de espírito e
              segurança para quem nos confia seus interesses.
            </p>

            {/* Pillars */}
            <div className="flex flex-col gap-6">
              {pillars.map((p) => (
                <div key={p.title} className="flex gap-5 items-start">
                  <div
                    className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0 text-[#b8964a] text-xl"
                    style={{ background: '#f5edd8', border: '1px solid #e8d9b0' }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <h4
                      className="text-[#1a2744] mb-1 text-lg"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {p.title}
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      {p.desc}
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
