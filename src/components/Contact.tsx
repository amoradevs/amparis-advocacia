'use client';

import { useState } from 'react';
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

const WA_URL =
  'https://wa.me/5511999999999?text=Olá!%20Vim%20pelo%20site%20da%20Amparis%20Advocacia%20e%20gostaria%20de%20uma%20análise%20gratuita%20do%20meu%20caso.';

export default function Contact() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://formsubmit.co/ajax/larissarocha@amparis.com.br', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nome: form.nome,
          telefone: form.telefone,
          assunto: form.assunto,
          mensagem: form.mensagem,
          _subject: `Novo contato pelo site: ${form.assunto}`,
          _replyto: '',
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ nome: '', telefone: '', assunto: '', mensagem: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-[#c5a059] text-xs tracking-[0.4em] uppercase font-semibold mb-3"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Estamos prontos para ouvir você
          </p>
          <h2
            className="text-[#0b1c2c] mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600 }}
          >
            Fale <span className="italic text-[#c5a059]">Conosco</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#c5a059] mx-auto" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left col — info */}
          <div className="lg:col-span-2 flex flex-col gap-7">
            <p
              className="text-[#555] text-sm leading-relaxed"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
            >
              Preencha o formulário para uma análise gratuita, ou utilize nosso
              WhatsApp para uma resposta mais rápida.
            </p>

            {/* Info items */}
            <div className="flex flex-col gap-5">
              {[
                {
                  Icon: MessageCircle,
                  label: 'WhatsApp',
                  value: '(11) 99999-9999',
                  sub: 'Resposta rápida',
                  href: WA_URL,
                },
                {
                  Icon: Mail,
                  label: 'E-mail',
                  value: 'larissarocha@amparis.com.br',
                  sub: null,
                  href: 'mailto:larissarocha@amparis.com.br',
                },
                {
                  Icon: MapPin,
                  label: 'Endereço',
                  value: 'Rua Barcelona, 340, B — Sala 05\nJaguaré, São Paulo — SP\nCEP: 05331-011',
                  sub: null,
                  href: null,
                },
                {
                  Icon: Clock,
                  label: 'Atendimento',
                  value: 'Seg — Sex: 8h às 18h',
                  sub: 'Online para todo o Brasil',
                  href: null,
                },
              ].map(({ Icon, label, value, sub, href }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#0b1c2c] flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#c5a059]" />
                  </div>
                  <div>
                    <p
                      className="text-[#c5a059] text-xs font-semibold tracking-widest uppercase mb-0.5"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-[#333] text-sm hover:text-[#c5a059] transition-colors whitespace-pre-line"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p
                        className="text-[#333] text-sm whitespace-pre-line"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                      >
                        {value}
                      </p>
                    )}
                    {sub && (
                      <p className="text-[#aaa] text-xs mt-0.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {sub}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-semibold py-3.5 rounded text-sm transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <MessageCircle size={17} />
              Falar Agora pelo WhatsApp
            </a>
          </div>

          {/* Right col — Form */}
          <div className="lg:col-span-3">
            <div className="bg-[#f8f7f5] rounded-lg p-8 border border-gray-100">
              {status === 'success' ? (
                <div className="text-center py-10">
                  <div
                    className="text-[#c5a059] mb-4"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
                  >
                    ✓
                  </div>
                  <h3
                    className="text-[#0b1c2c] mb-2"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem' }}
                  >
                    Mensagem enviada!
                  </h3>
                  <p
                    className="text-[#666] text-sm"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
                  >
                    A Dra. Larissa entrará em contato em até 24 horas úteis.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h3
                    className="text-[#0b1c2c] mb-2"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem' }}
                  >
                    Solicite uma Análise Gratuita
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#888] uppercase tracking-widest mb-1.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        required
                        value={form.nome}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className="w-full bg-white border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#c5a059] transition-colors rounded"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#888] uppercase tracking-widest mb-1.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="telefone"
                        required
                        value={form.telefone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className="w-full bg-white border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#c5a059] transition-colors rounded"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#888] uppercase tracking-widest mb-1.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Qual assunto você quer tratar? *
                    </label>
                    <select
                      name="assunto"
                      required
                      value={form.assunto}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#c5a059] transition-colors rounded"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="Dúvida sobre BPC / LOAS">Dúvida sobre BPC / LOAS</option>
                      <option value="Dúvida sobre Aposentadoria">Dúvida sobre Aposentadoria</option>
                      <option value="Meu benefício foi negado">Meu benefício foi negado</option>
                      <option value="Revisão de benefício">Revisão de benefício</option>
                      <option value="Outros assuntos previdenciários">Outros assuntos previdenciários</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-[#888] uppercase tracking-widest mb-1.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Conte brevemente o seu caso
                    </label>
                    <textarea
                      name="mensagem"
                      value={form.mensagem}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Descreva sua situação para que a Dra. Larissa possa analisar com mais detalhes..."
                      className="w-full bg-white border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#c5a059] transition-colors resize-none rounded"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    />
                  </div>

                  <p className="text-[#aaa] text-xs" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    🔒 Seus dados são tratados com total sigilo e confidencialidade.
                  </p>

                  {status === 'error' && (
                    <p className="text-red-500 text-xs" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Ocorreu um erro. Tente nos contatar diretamente pelo WhatsApp.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-[#c5a059] hover:bg-[#e0bb71] disabled:opacity-60 text-[#0b1c2c] font-semibold py-3.5 rounded text-sm transition-colors"
                    style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}
                  >
                    {status === 'loading' ? 'Enviando...' : 'Enviar para Análise Gratuita'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-14 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
          <div className="bg-[#0b1c2c] px-6 py-4 flex items-center gap-3">
            <MapPin size={16} className="text-[#c5a059]" />
            <div>
              <p className="text-white text-sm font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Rua Barcelona, 340, B — Sala 05 · Jaguaré, São Paulo — SP
              </p>
              <p className="text-white/40 text-xs" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                CEP 05331-011 · Atendimento também 100% online para todo o Brasil
              </p>
            </div>
          </div>
          <iframe
            title="Localização Amparis Advocacia"
            src="https://maps.google.com/maps?q=Rua+Barcelona+340+Jaguaré+São+Paulo+SP&output=embed"
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
