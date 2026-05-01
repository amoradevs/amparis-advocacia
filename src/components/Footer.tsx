import Image from 'next/image';

const links = {
  'O Escritório': ['Sobre Nós', 'Nossa Equipe', 'Valores e Missão'],
  'Áreas de Atuação': ['Direito Civil', 'Direito Trabalhista', 'Direito Previdenciário', 'Direito Empresarial'],
  'Atendimento': ['Consulta Gratuita', 'WhatsApp', 'Contato', 'Localização'],
};

export default function Footer() {
  return (
    <footer style={{ background: '#0d1526' }}>
      {/* Top strip */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#b8964a] to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Image
              src="/Fundo_escuro.jpg"
              alt="Amparis Advocacia"
              width={140}
              height={70}
              className="object-contain mb-6"
            />
            <p
              className="text-white/40 text-xs leading-relaxed mb-6 max-w-xs"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
            >
              Assessoria jurídica especializada com ética, competência e dedicação
              total a cada cliente que nos confia seus interesses.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#b8964a]" />
              <p className="text-white/30 text-xs" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                OAB/SP registrado
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#b8964a]" />
              <p className="text-white/30 text-xs" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Membro da OAB Seção SP
              </p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h5
                className="text-[#b8964a] text-xs tracking-[0.3em] uppercase mb-5"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
              >
                {title}
              </h5>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/40 text-xs hover:text-[#b8964a] transition-colors"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-white/20 text-xs"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            © {new Date().getFullYear()} Amparis Advocacia. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {['Política de Privacidade', 'Termos de Uso'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/20 text-xs hover:text-[#b8964a] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
