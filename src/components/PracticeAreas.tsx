'use client';

const areas = [
  {
    icon: '§',
    title: 'Direito Civil',
    desc: 'Contratos, responsabilidade civil, família e sucessões. Assessoria completa nas relações entre particulares.',
    topics: ['Contratos', 'Família e Sucessões', 'Responsabilidade Civil'],
  },
  {
    icon: '⚖',
    title: 'Direito Trabalhista',
    desc: 'Defesa de empregados e empregadores em todas as fases das relações laborais e processos trabalhistas.',
    topics: ['Reclamações Trabalhistas', 'Assédio Moral', 'Demissões'],
  },
  {
    icon: '◈',
    title: 'Direito Previdenciário',
    desc: 'Aposentadorias, pensões e benefícios do INSS. Garantimos o que é seu por direito perante a Previdência Social.',
    topics: ['Aposentadoria', 'Benefícios por Incapacidade', 'Pensão por Morte'],
  },
  {
    icon: '◉',
    title: 'Direito Empresarial',
    desc: 'Constituição e dissolução de empresas, contratos empresariais, recuperação judicial e fusões.',
    topics: ['Abertura de Empresa', 'Contratos', 'Recuperação Judicial'],
  },
  {
    icon: '△',
    title: 'Direito do Consumidor',
    desc: 'Proteção contra práticas abusivas e defesa dos direitos do consumidor perante fornecedores e empresas.',
    topics: ['Produtos com Defeito', 'Cobranças Indevidas', 'Dano Moral'],
  },
  {
    icon: '◇',
    title: 'Direito Imobiliário',
    desc: 'Transações imobiliárias, locações, condomínios e regularização de propriedades com segurança jurídica.',
    topics: ['Compra e Venda', 'Locação', 'Regularização'],
  },
];

export default function PracticeAreas() {
  return (
    <section
      id="areas"
      className="py-28"
      style={{ background: 'linear-gradient(180deg, #1a2744 0%, #111b33 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#b8964a] text-xs tracking-[0.4em] uppercase font-medium mb-4">
            O que fazemos
          </p>
          <h2
            className="text-white font-light leading-tight mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            }}
          >
            Áreas de <span className="text-[#b8964a] italic">Atuação</span>
          </h2>
          <span className="section-divider mx-auto mb-6" />
          <p
            className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
          >
            Atuamos em diversas áreas do Direito com equipes especializadas,
            garantindo a melhor defesa para cada situação.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <div
              key={area.title}
              className="group relative p-8 border border-white/10 rounded-sm transition-all duration-300 cursor-pointer"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(4px)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(184,150,74,0.08)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(184,150,74,0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              {/* Number */}
              <span
                className="absolute top-6 right-6 text-white/10 font-light"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div
                className="text-[#b8964a] mb-5 text-2xl"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {area.icon}
              </div>

              {/* Title */}
              <h3
                className="text-white mb-3"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                }}
              >
                {area.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px bg-[#b8964a] mb-4 opacity-60" />

              {/* Description */}
              <p
                className="text-white/50 text-sm leading-relaxed mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
              >
                {area.desc}
              </p>

              {/* Topics */}
              <ul className="flex flex-col gap-2">
                {area.topics.map((t) => (
                  <li
                    key={t}
                    className="text-[#b8964a]/70 text-xs tracking-wide flex items-center gap-2"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    <span className="w-3 h-px bg-[#b8964a]/50 inline-block" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="#contato" className="btn-outline-gold">
            Consulte um Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
