const steps = [
  {
    number: '01',
    title: 'Fale Conosco',
    desc: 'Entre em contato pelo WhatsApp ou preencha o formulário. Nosso time responde com agilidade e sem burocracia.',
    action: 'WhatsApp ou formulário',
  },
  {
    number: '02',
    title: 'Análise do Caso',
    desc: 'A Dra. Larissa e equipe analisam minuciosamente sua situação e orientam sobre os seus direitos e a melhor estratégia.',
    action: 'Sem custo, sem compromisso',
  },
  {
    number: '03',
    title: 'Acompanhamento até o Fim',
    desc: 'Lutamos pelo seu benefício em todas as etapas — administrativo ou judicial — sem desistir diante das barreiras do sistema.',
    action: 'Você não enfrenta isso sozinho',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-[#c5a059] text-xs tracking-[0.4em] uppercase font-semibold mb-3"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            O processo é simples
          </p>
          <h2
            className="text-[#0b1c2c] mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600 }}
          >
            Como <span className="italic text-[#c5a059]">Funciona</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#c5a059] mx-auto" />
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-[#c5a059]/30" />

          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              {/* Number circle */}
              <div
                className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6 z-10"
                style={{ background: i === 1 ? '#0b1c2c' : 'white', border: '2px solid #c5a059' }}
              >
                <span
                  className={`font-semibold text-2xl ${i === 1 ? 'text-[#c5a059]' : 'text-[#0b1c2c]'}`}
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {step.number}
                </span>
              </div>

              <h3
                className="text-[#0b1c2c] mb-3"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 600 }}
              >
                {step.title}
              </h3>
              <p
                className="text-[#666] text-sm leading-relaxed mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
              >
                {step.desc}
              </p>
              <span
                className="text-[#c5a059] text-xs font-semibold"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                → {step.action}
              </span>
            </div>
          ))}
        </div>

        {/* Honorários note */}
        <div className="mt-14 bg-[#0b1c2c] rounded-lg p-7 flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
          <div className="text-4xl">⚖</div>
          <div>
            <p
              className="text-white font-medium mb-1"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem' }}
            >
              Honorários: 30% — somente quando você receber
            </p>
            <p
              className="text-white/50 text-sm"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
            >
              Se você não receber nenhum valor, nada será cobrado. Sem risco para você.
            </p>
          </div>
          <a
            href="#contato"
            className="md:ml-auto flex-shrink-0 bg-[#c5a059] hover:bg-[#e0bb71] text-[#0b1c2c] font-semibold text-sm px-6 py-3 rounded transition-colors"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Começar agora
          </a>
        </div>
      </div>
    </section>
  );
}
