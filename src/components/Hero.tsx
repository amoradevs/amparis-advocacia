export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #111b33 0%, #1a2744 50%, #243258 100%)' }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #b8964a 0px,
            #b8964a 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b8964a] to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b8964a] to-transparent opacity-60" />
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#b8964a] to-transparent opacity-30" />
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-[#b8964a] to-transparent opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Gold ornament */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#b8964a]" />
          <span className="text-[#b8964a] text-xs tracking-[0.4em] uppercase font-medium">
            Excelência em Advocacia
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#b8964a]" />
        </div>

        <h1
          className="text-white font-light mb-6 leading-tight"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            letterSpacing: '0.02em',
          }}
        >
          Defendemos o que
          <br />
          <span className="text-[#b8964a] italic">mais importa</span>
          <br />
          para você
        </h1>

        <p
          className="text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
            fontWeight: 300,
            letterSpacing: '0.03em',
          }}
        >
          Assessoria jurídica estratégica com compromisso, ética e resultados.
          Há mais de uma década protegendo os direitos de nossos clientes
          com dedicação e excelência.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contato" className="btn-primary">
            Agende uma Consulta
          </a>
          <a href="#areas" className="btn-outline">
            Nossas Áreas
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
          {[
            { number: '+500', label: 'Casos Resolvidos' },
            { number: '+10', label: 'Anos de Experiência' },
            { number: '98%', label: 'Clientes Satisfeitos' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-[#b8964a] font-light mb-1"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                }}
              >
                {stat.number}
              </p>
              <p className="text-white/50 text-xs tracking-widest uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-xs tracking-widest uppercase">Rolar</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#b8964a] to-transparent" />
      </div>
    </section>
  );
}
