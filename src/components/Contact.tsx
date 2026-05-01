'use client';

import { useState } from 'react';

const areas = [
  'Direito Civil',
  'Direito Trabalhista',
  'Direito Previdenciário',
  'Direito Empresarial',
  'Direito do Consumidor',
  'Direito Imobiliário',
  'Outra área',
];

export default function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', area: '', mensagem: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contato"
      className="py-28"
      style={{ background: 'linear-gradient(180deg, #f8f5ef 0%, #f0ebe0 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Info */}
          <div>
            <p className="text-[#b8964a] text-xs tracking-[0.4em] uppercase font-medium mb-4">
              Entre em Contato
            </p>
            <h2
              className="text-[#1a2744] font-light leading-tight mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              }}
            >
              Agende sua
              <br />
              <span className="text-[#b8964a] italic">consulta</span> gratuita
            </h2>

            <span className="section-divider mb-8" />

            <p
              className="text-gray-600 text-sm leading-relaxed mb-10"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
            >
              Nossa primeira consulta é gratuita e confidencial. Conte-nos sua situação
              e um de nossos especialistas entrará em contato para orientá-lo sobre os
              melhores caminhos jurídicos.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: '📍',
                  label: 'Endereço',
                  value: 'Av. Paulista, 1000 — Sala 1010\nBela Vista, São Paulo — SP',
                },
                {
                  icon: '📞',
                  label: 'Telefone',
                  value: '(11) 3000-0000',
                },
                {
                  icon: '✉',
                  label: 'E-mail',
                  value: 'contato@amparisadvocacia.com.br',
                },
                {
                  icon: '🕐',
                  label: 'Horário',
                  value: 'Segunda a Sexta: 8h às 18h',
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div
                    className="w-11 h-11 rounded-sm flex items-center justify-center flex-shrink-0 text-base"
                    style={{ background: '#1a2744' }}
                  >
                    <span>{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-[#b8964a] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {item.label}
                    </p>
                    <p className="text-gray-700 text-sm whitespace-pre-line" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-10">
              <a
                href="https://wa.me/5511300000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-sm text-sm font-medium transition-opacity hover:opacity-90"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Fale pelo WhatsApp
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className="p-10 rounded-sm shadow-xl"
            style={{ background: 'white' }}
          >
            {sent ? (
              <div className="text-center py-12">
                <div className="text-[#b8964a] text-5xl mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>✓</div>
                <h3
                  className="text-[#1a2744] mb-3"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem' }}
                >
                  Mensagem enviada!
                </h3>
                <p className="text-gray-500 text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  Entraremos em contato em até 24 horas úteis.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3
                  className="text-[#1a2744] mb-2"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem' }}
                >
                  Envie sua mensagem
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-500 tracking-widest uppercase block mb-1.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      required
                      value={form.nome}
                      onChange={handleChange}
                      className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#b8964a] transition-colors"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 tracking-widest uppercase block mb-1.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      required
                      value={form.telefone}
                      onChange={handleChange}
                      className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#b8964a] transition-colors"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 tracking-widest uppercase block mb-1.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#b8964a] transition-colors"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500 tracking-widest uppercase block mb-1.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Área de interesse
                  </label>
                  <select
                    name="area"
                    value={form.area}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#b8964a] transition-colors bg-white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    <option value="">Selecione uma área</option>
                    {areas.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-500 tracking-widest uppercase block mb-1.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Mensagem
                  </label>
                  <textarea
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#b8964a] transition-colors resize-none"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    placeholder="Descreva brevemente sua situação..."
                  />
                </div>

                <p className="text-gray-400 text-xs" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Seus dados são tratados com total sigilo e confidencialidade.
                </p>

                <button type="submit" className="btn-primary w-full text-center">
                  Solicitar Consulta Gratuita
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
