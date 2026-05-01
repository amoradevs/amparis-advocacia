import {
  Trophy,
  UserCheck,
  Lock,
  Eye,
  FileSearch,
  Laptop,
} from 'lucide-react';

const items = [
  {
    Icon: Trophy,
    title: 'Honorários Apenas no Êxito',
    desc: 'Você só paga quando receber o seu benefício. Se não houver resultado, não há cobrança. Simples assim.',
    highlight: 'Sem resultado = sem cobrança',
  },
  {
    Icon: UserCheck,
    title: 'Atendimento Humano, Sem Robôs',
    desc: 'Nada mais frustrante do que respostas automáticas. Aqui você sempre será atendido por um membro da equipe, jamais por um robô.',
    highlight: 'Sempre uma pessoa real',
  },
  {
    Icon: Lock,
    title: 'Sigilo e Privacidade Total',
    desc: 'Seus dados estão protegidos. Você não receberá spam, ligações indesejadas ou compartilhamento de informações.',
    highlight: 'Seus dados protegidos',
  },
  {
    Icon: Eye,
    title: 'Você no Controle',
    desc: 'Você é informado e decide. Nunca será pressionado a aceitar ou rejeitar um acordo sem a orientação mais completa possível.',
    highlight: 'Você decide sempre',
  },
  {
    Icon: FileSearch,
    title: 'Transparência no Processo',
    desc: 'Quando seu processo é distribuído, enviamos o número e o link para você acompanhar os andamentos quando quiser.',
    highlight: 'Acompanhe em tempo real',
  },
  {
    Icon: Laptop,
    title: 'Online para Todo o Brasil',
    desc: 'Todo nosso atendimento é digital. Você não precisa sair de casa para nos contratar. Mas se preferir, temos sede própria.',
    highlight: 'De onde você estiver',
  },
];

export default function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #0b1c2c 0%, #0f2540 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-[#c5a059] text-xs tracking-[0.4em] uppercase font-semibold mb-3"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Por que nos escolher
          </p>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600 }}
          >
            O Nosso <span className="italic text-[#c5a059]">Diferencial</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#c5a059] mx-auto mb-5" />
          <p
            className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
          >
            A Amparis Advocacia nasceu com um propósito claro: humanizar o Direito Previdenciário
            com um atendimento que realmente ampara.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ Icon, title, desc, highlight }) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 rounded-lg p-7 hover:bg-white/8 hover:border-[#c5a059]/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#c5a059]/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-[#c5a059]" />
                </div>
                <div>
                  <h3
                    className="text-white mb-2"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 600 }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-white/55 text-xs leading-relaxed mb-3"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
                  >
                    {desc}
                  </p>
                  <span
                    className="inline-block bg-[#c5a059]/15 text-[#c5a059] text-xs px-2.5 py-1 rounded-full"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                  >
                    {highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
