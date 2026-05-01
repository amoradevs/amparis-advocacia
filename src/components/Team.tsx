const members = [
  {
    name: 'Dra. Ana Paula Ferreira',
    role: 'Sócia Fundadora',
    oab: 'OAB/SP 123.456',
    specialty: 'Direito Civil e Família',
    bio: 'Especialista em Direito de Família pela USP com mais de 15 anos de atuação em casos complexos de partilha, divórcio e guarda de filhos.',
    initials: 'AF',
  },
  {
    name: 'Dr. Carlos Medeiros',
    role: 'Sócio',
    oab: 'OAB/SP 234.567',
    specialty: 'Direito Trabalhista',
    bio: 'Mestre em Direito do Trabalho pela PUC-SP. Referência em negociações coletivas e ações trabalhistas de alta complexidade.',
    initials: 'CM',
  },
  {
    name: 'Dra. Beatriz Santos',
    role: 'Advogada Associada',
    oab: 'OAB/SP 345.678',
    specialty: 'Direito Previdenciário',
    bio: 'Especialista em Previdência Social com histórico de sucesso em casos de aposentadoria especial e benefícios por incapacidade.',
    initials: 'BS',
  },
  {
    name: 'Dr. Rafael Almeida',
    role: 'Advogado Associado',
    oab: 'OAB/SP 456.789',
    specialty: 'Direito Empresarial',
    bio: 'Especialista em M&A e recuperação judicial. Assessora médias e grandes empresas em reestruturações societárias.',
    initials: 'RA',
  },
];

export default function Team() {
  return (
    <section id="equipe" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#b8964a] text-xs tracking-[0.4em] uppercase font-medium mb-4">
            Nossos Profissionais
          </p>
          <h2
            className="text-[#1a2744] font-light leading-tight mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            }}
          >
            Conheça nossa <span className="text-[#b8964a] italic">Equipe</span>
          </h2>
          <span className="section-divider mx-auto mb-6" />
          <p
            className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
          >
            Advogados experientes, especializados e dedicados. Cada membro da equipe
            traz expertise única para defender seus interesses com máxima eficiência.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m) => (
            <div key={m.name} className="group">
              {/* Avatar */}
              <div className="relative mb-6">
                <div
                  className="w-full aspect-square rounded-sm flex items-center justify-center text-white transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #1a2744, #243258)',
                    fontSize: '2.5rem',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 300,
                  }}
                >
                  {m.initials}
                </div>
                {/* Gold accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b8964a] via-[#cead6a] to-[#b8964a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div>
                <h3
                  className="text-[#1a2744] mb-1"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem' }}
                >
                  {m.name}
                </h3>
                <p className="text-[#b8964a] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {m.role}
                </p>
                <p className="text-gray-400 text-xs mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {m.oab} · {m.specialty}
                </p>
                <div className="w-8 h-px bg-[#b8964a] mb-4 opacity-50" />
                <p
                  className="text-gray-500 text-xs leading-relaxed"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
                >
                  {m.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial band */}
        <div
          className="mt-20 p-10 text-center rounded-sm"
          style={{ background: '#f8f5ef' }}
        >
          <p
            className="text-[#1a2744] italic font-light leading-relaxed mb-4 max-w-3xl mx-auto"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem' }}
          >
            &ldquo;Nossa maior conquista é a confiança de cada cliente que nos procura
            em seus momentos mais difíceis e parte com a certeza de que foi
            verdadeiramente defendido.&rdquo;
          </p>
          <p className="text-[#b8964a] text-xs tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            — Dra. Ana Paula Ferreira, Sócia Fundadora
          </p>
        </div>
      </div>
    </section>
  );
}
