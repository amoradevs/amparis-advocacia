import { Shield, Heart, Star } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual element instead of photo */}
          <div className="relative">
            {/* Decorative gold frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#c5a059]/30 rounded-lg" />

            <div
              className="relative rounded-lg overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0b1c2c 0%, #162c45 100%)', minHeight: '400px' }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                {/* Scales of justice illustration */}
                <div className="mb-8 opacity-20">
                  <svg viewBox="0 0 120 140" className="w-32 h-32 text-[#c5a059]" fill="currentColor">
                    <rect x="57" y="5" width="6" height="110" rx="2" />
                    <rect x="22" y="18" width="76" height="5" rx="2" />
                    <circle cx="60" cy="16" r="8" />
                    <ellipse cx="28" cy="50" rx="22" ry="6" />
                    <rect x="24" y="50" width="8" height="38" />
                    <rect x="14" y="86" width="36" height="5" rx="2" />
                    <ellipse cx="92" cy="50" rx="22" ry="6" />
                    <rect x="88" y="50" width="8" height="38" />
                    <rect x="78" y="86" width="36" height="5" rx="2" />
                    <rect x="46" y="115" width="28" height="6" rx="2" />
                  </svg>
                </div>

                <p
                  className="text-[#c5a059] text-xs tracking-[0.4em] uppercase font-semibold mb-4"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Dra. Larissa Rocha
                </p>
                <p
                  className="text-white italic text-xl font-light mb-6 leading-relaxed"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  &ldquo;Cada caso que chega até mim traz uma história de luta.
                  Meu compromisso é estar ao lado dessas pessoas até o fim.&rdquo;
                </p>
                <div className="w-8 h-px bg-[#c5a059]/50 mb-4" />

                <div className="grid grid-cols-3 gap-6 w-full">
                  {[
                    { label: 'Especialidade', value: 'BPC & APOSEN.' },
                    { label: 'Atendimento', value: 'Todo Brasil' },
                    { label: 'Início', value: '1ª Consulta Grátis' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-[#c5a059] text-xs font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{stat.value}</p>
                      <p className="text-white/30 text-xs uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <p
              className="text-[#c5a059] text-xs tracking-[0.4em] uppercase font-semibold mb-3"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Quem está ao seu lado
            </p>
            <h2
              className="text-[#0b1c2c] mb-5"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 600 }}
            >
              Dra. <span className="italic text-[#c5a059]">Larissa Rocha</span>
              <br />
              Advogada Previdenciarista
            </h2>

            <div className="w-10 h-0.5 bg-[#c5a059] mb-6" />

            <p
              className="text-[#555] text-sm leading-relaxed mb-5"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
            >
              A Amparis Advocacia nasceu com um propósito muito claro e inegociável:
              humanizar o Direito Previdenciário por meio de um atendimento verdadeiramente acolhedor.
            </p>
            <p
              className="text-[#555] text-sm leading-relaxed mb-5"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
            >
              Sabemos que buscar o INSS é, muitas vezes, um processo desgastante, repleto de exigências
              que deixam as pessoas perdidas. Por isso, nosso compromisso vai muito além da excelência técnica.
            </p>
            <p
              className="text-[#555] text-sm leading-relaxed mb-8"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
            >
              Nosso pilar é o <strong className="text-[#0b1c2c] font-medium">amparo</strong>. Analisamos a sua história com cuidado,
              traçamos a rota mais segura e <strong className="text-[#0b1c2c] font-medium">não desistimos</strong> diante da primeira
              barreira. Estaremos ao seu lado até o fim.
            </p>

            {/* Pillars */}
            <div className="flex flex-col gap-4">
              {[
                { Icon: Shield, label: 'Ética e Transparência', desc: 'Honorários claros, processo acompanhável, sem surpresas.' },
                { Icon: Heart, label: 'Atendimento Humanizado', desc: 'Você é mais do que um processo — é uma história que merece atenção.' },
                { Icon: Star, label: 'Comprometimento Total', desc: 'Do primeiro contato ao recebimento do benefício, estamos com você.' },
              ].map(({ Icon, label, desc }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded bg-[#fdf6ea] flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-[#c5a059]" />
                  </div>
                  <div>
                    <p className="text-[#0b1c2c] font-medium text-sm mb-0.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>{label}</p>
                    <p className="text-[#888] text-xs leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>{desc}</p>
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
