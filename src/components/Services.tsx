import { HandHeart, Scale, FileX } from 'lucide-react';

const services = [
  {
    Icon: HandHeart,
    title: 'BPC / LOAS',
    subtitle: 'Benefício de Prestação Continuada',
    description:
      'O BPC garante um salário mínimo mensal a idosos acima de 65 anos e pessoas com deficiência em situação de vulnerabilidade — mesmo sem nunca ter contribuído ao INSS.',
    topics: [
      'BPC para Idosos (65 anos ou mais)',
      'BPC para Pessoas com Deficiência',
      'Revisão e Reavaliação do BPC',
      'Recurso em caso de negativa',
    ],
  },
  {
    Icon: Scale,
    title: 'Aposentadoria',
    subtitle: 'Planejamento e Solicitação Completos',
    description:
      'Realizamos o planejamento previdenciário completo e a solicitação do benefício, garantindo o maior valor possível de aposentadoria para o seu futuro.',
    topics: [
      'Aposentadoria por Idade',
      'Aposentadoria por Tempo de Contribuição',
      'Aposentadoria por Invalidez',
      'Aposentadoria Especial (insalubridade)',
    ],
  },
  {
    Icon: FileX,
    title: 'Recursos e Negativas',
    subtitle: 'Benefício negado? Não desistimos.',
    description:
      'A primeira negativa não é o fim. Analisamos minuciosamente cada caso e entramos com recurso administrativo ou ação judicial — sem custo antecipado.',
    topics: [
      'Recurso Administrativo no INSS',
      'Ação Judicial Previdenciária',
      'Revisão de Benefícios Existentes',
      'Restabelecimento de Benefícios Cassados',
    ],
  },
];

export default function Services() {
  return (
    <section id="atuacao" className="py-24 bg-white">
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
            Como podemos ajudar
          </p>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#1c2d4a',
            }}
          >
            Áreas de{' '}
            <span style={{ color: '#b89450', fontStyle: 'italic' }}>Atuação</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {services.map(({ Icon, title, subtitle, description, topics }) => (
            <div
              key={title}
              className="group rounded-xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ border: '1.5px solid #e8e4df' }}
            >
              {/* Ícone */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ background: '#fdf5e6' }}
              >
                <Icon size={26} style={{ color: '#b89450' }} />
              </div>

              {/* Título */}
              <h3
                className="mb-1"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.55rem', color: '#1c2d4a' }}
              >
                {title}
              </h3>
              <p
                className="mb-4"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.75rem',
                  color: '#b89450',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {subtitle}
              </p>

              {/* Divisor dourado */}
              <div className="w-8 h-0.5 mb-5" style={{ background: '#b89450', opacity: 0.4 }} />

              {/* Descrição — texto legível */}
              <p
                className="mb-6 flex-1"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.9375rem',
                  color: '#555',
                  fontWeight: 300,
                  lineHeight: 1.75,
                }}
              >
                {description}
              </p>

              {/* Tópicos */}
              <ul className="flex flex-col gap-2.5">
                {topics.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: '#b89450' }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '0.875rem',
                        color: '#444',
                        lineHeight: 1.6,
                      }}
                    >
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p
            className="mb-5"
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem', color: '#777', fontWeight: 300 }}
          >
            Não sabe em qual caso se encaixa? A análise inicial é gratuita e sem compromisso.
          </p>
          <a href="#contato" className="btn-outline-gold">
            Quero uma Análise Gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
