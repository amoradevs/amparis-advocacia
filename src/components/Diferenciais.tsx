import { Trophy, UserCheck, Lock, Eye, FileSearch, Laptop } from 'lucide-react';

const items = [
  {
    Icon: Trophy,
    title: 'Você só paga quando receber',
    desc: 'Nossos honorários são de 30% — cobrados apenas no êxito. Se não houver resultado, não há cobrança nenhuma. Sem risco para você.',
  },
  {
    Icon: UserCheck,
    title: 'Sempre um ser humano te atende',
    desc: 'Aqui você nunca fala com robô ou mensagem automática. Sempre um membro da equipe, com atenção real ao seu caso.',
  },
  {
    Icon: Lock,
    title: 'Sigilo e privacidade total',
    desc: 'Seus dados ficam protegidos. Não há spam, ligações indesejadas ou compartilhamento de informações com terceiros.',
  },
  {
    Icon: Eye,
    title: 'Você está no controle',
    desc: 'Você é orientado e decide. Nunca será pressionado a aceitar ou rejeitar um acordo — somos parceiros, não donos da sua decisão.',
  },
  {
    Icon: FileSearch,
    title: 'Acompanhe seu processo',
    desc: 'Quando seu processo é distribuído, enviamos o número e o link para acompanhar os andamentos quando e onde quiser.',
  },
  {
    Icon: Laptop,
    title: 'Online para todo o Brasil',
    desc: 'Atendimento 100% digital, sem precisar sair de casa. Se preferir presencialmente, temos sede própria em São Paulo.',
  },
];

export default function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #1c2d4a 0%, #13213a 100%)' }}
    >
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
            Por que nos escolher
          </p>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'white',
            }}
          >
            Nosso{' '}
            <span style={{ color: '#b89450', fontStyle: 'italic' }}>Diferencial</span>
          </h2>

          {/* Subtítulo amplo e legível */}
          <p
            className="max-w-xl mx-auto mt-4"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.55)',
              fontWeight: 300,
              lineHeight: 1.75,
            }}
          >
            A Amparis nasceu para humanizar o Direito Previdenciário.
            Cada compromisso abaixo é um pilar que sustenta nosso atendimento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl p-7 transition-all duration-300 hover:scale-[1.01]"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ background: 'rgba(184,148,80,0.12)' }}
              >
                <Icon size={22} style={{ color: '#b89450' }} />
              </div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.3rem',
                  color: 'white',
                  fontWeight: 600,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.9375rem',
                  color: 'rgba(255,255,255,0.55)',
                  fontWeight: 300,
                  lineHeight: 1.75,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
