import { HandHeart, Scale, FileX } from 'lucide-react';

const services = [
  {
    Icon: HandHeart,
    title: 'BPC / LOAS',
    subtitle: 'Benefício de Prestação Continuada',
    description:
      'Amparamos idosos acima de 65 anos e pessoas com deficiência (PCDs) em situação de vulnerabilidade para garantir o recebimento de um salário mínimo mensal, mesmo sem contribuição ao INSS.',
    topics: [
      'BPC para Idosos (65+)',
      'BPC para Pessoas com Deficiência',
      'Revisão e Reavaliação de BPC',
      'Recurso em caso de negativa',
    ],
  },
  {
    Icon: Scale,
    title: 'Aposentadoria',
    subtitle: 'Planejamento e Solicitação',
    description:
      'Realizamos seu planejamento previdenciário completo e a solicitação de aposentadorias, assegurando o melhor cenário e o maior benefício possível para o seu futuro.',
    topics: [
      'Aposentadoria por Idade',
      'Aposentadoria por Tempo de Contribuição',
      'Aposentadoria por Invalidez',
      'Aposentadoria Especial',
    ],
  },
  {
    Icon: FileX,
    title: 'Recursos e Negativas',
    subtitle: 'Benefício negado? Não desistimos.',
    description:
      'Nosso diferencial está em não aceitar a primeira negativa como resposta final. Analisamos minuciosamente cada caso e entramos com recursos administrativos ou judiciais.',
    topics: [
      'Recurso Administrativo no INSS',
      'Ação Judicial Previdenciária',
      'Revisão de Benefícios',
      'Restabelecimento de Benefícios',
    ],
  },
];

export default function Services() {
  return (
    <section id="atuacao" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-[#c5a059] text-xs tracking-[0.4em] uppercase font-semibold mb-3"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Como podemos ajudar
          </p>
          <h2
            className="text-[#0b1c2c] mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600 }}
          >
            Áreas de <span className="italic text-[#c5a059]">Atuação</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#c5a059] mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {services.map(({ Icon, title, subtitle, description, topics }) => (
            <div
              key={title}
              className="group border border-gray-100 rounded-lg p-8 hover:border-[#c5a059]/40 hover:shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-[#fdf6ea] flex items-center justify-center mb-5 group-hover:bg-[#c5a059] transition-colors duration-300">
                <Icon
                  size={26}
                  className="text-[#c5a059] group-hover:text-white transition-colors duration-300"
                />
              </div>

              <h3
                className="text-[#0b1c2c] mb-1"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600 }}
              >
                {title}
              </h3>
              <p
                className="text-[#c5a059] text-xs font-semibold uppercase tracking-wider mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {subtitle}
              </p>
              <div className="w-8 h-px bg-[#c5a059]/40 mb-4" />
              <p
                className="text-[#666] text-sm leading-relaxed mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
              >
                {description}
              </p>

              <ul className="flex flex-col gap-2">
                {topics.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 text-[#c5a059] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span
                      className="text-[#555] text-xs leading-relaxed"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p
            className="text-[#666] text-sm mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
          >
            Não sabe em qual categoria se encaixa? A análise inicial é gratuita.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-white font-semibold px-7 py-3 rounded text-sm transition-all"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Quero uma Análise Gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
