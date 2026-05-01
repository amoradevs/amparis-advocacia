const situations = [
  {
    icon: '✕',
    text: 'Teve o BPC ou Aposentadoria negado pelo INSS',
  },
  {
    icon: '?',
    text: 'Não sabe se tem direito ao benefício e por onde começar',
  },
  {
    icon: '⟳',
    text: 'Já tentou resolver sozinho e continua sem resposta',
  },
  {
    icon: '⚠',
    text: 'Está perdido com as exigências e burocracia do sistema',
  },
];

export default function Problem() {
  return (
    <section className="py-20 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <p
            className="text-[#c5a059] text-xs tracking-[0.4em] uppercase font-semibold mb-3"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Você se reconhece?
          </p>
          <h2
            className="text-[#0b1c2c] mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 600 }}
          >
            Situações que a Amparis resolve todo dia
          </h2>
          <p
            className="text-[#666] max-w-xl mx-auto text-sm leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
          >
            Se você passou por alguma dessas situações, saiba que existe um caminho jurídico
            — e nós conhecemos cada passo dele.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {situations.map((s) => (
            <div
              key={s.text}
              className="bg-white rounded p-6 shadow-sm border border-gray-100 flex flex-col gap-4"
            >
              <div
                className="w-10 h-10 rounded-full bg-[#c5a059]/10 flex items-center justify-center text-[#c5a059] font-bold text-lg flex-shrink-0"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {s.icon}
              </div>
              <p
                className="text-[#333] text-sm leading-relaxed"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                {s.text}
              </p>
            </div>
          ))}
        </div>

        {/* Answer statement */}
        <div className="text-center bg-[#0b1c2c] rounded-lg p-10">
          <p
            className="text-white italic mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 400 }}
          >
            &ldquo;A Amparis Advocacia existe para essas pessoas.
            <br />
            Para amparar, orientar e <span className="text-[#c5a059]">não desistir.</span>&rdquo;
          </p>
          <p
            className="text-white/50 text-sm"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            — Dra. Larissa Rocha, Advogada Previdenciarista
          </p>
        </div>
      </div>
    </section>
  );
}
