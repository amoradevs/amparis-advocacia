'use client';

import { useState } from 'react';
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

const WA_URL =
  'https://wa.me/5511999999999?text=Olá!%20Vim%20pelo%20site%20da%20Amparis%20Advocacia%20e%20gostaria%20de%20uma%20análise%20gratuita%20do%20meu%20caso.';

export default function Contact() {
  const [form, setForm] = useState({ nome: '', telefone: '', assunto: '', mensagem: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://formsubmit.co/ajax/larissarocha@amparis.com.br', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `Site Amparis — ${form.assunto || 'Novo contato'}`,
        }),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setForm({ nome: '', telefone: '', assunto: '', mensagem: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-white px-4 py-3.5 text-base outline-none transition-colors rounded-lg';
  const inputStyle = { fontFamily: 'Montserrat, sans-serif', border: '1.5px solid #e0dbd4', fontSize: '1rem' };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="font-semibold mb-3"
            style={{ color: '#b89450', fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', letterSpacing: '0.35em', textTransform: 'uppercase' }}
          >
            Estamos prontos para ouvir você
          </p>
          <h2
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1c2d4a' }}
          >
            Fale{' '}
            <span style={{ color: '#b89450', fontStyle: 'italic' }}>Conosco</span>
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem', color: '#6b7280', fontWeight: 300, lineHeight: 1.7 }}
          >
            A consulta inicial é gratuita e sem compromisso.
            Use o WhatsApp para resposta mais rápida, ou preencha o formulário.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* WhatsApp em destaque */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa w-full"
            >
              <MessageCircle size={20} />
              Falar pelo WhatsApp
            </a>

            {/* Itens de contato */}
            {[
              { Icon: Mail, label: 'E-mail', value: 'larissarocha@amparis.com.br', href: 'mailto:larissarocha@amparis.com.br' },
              { Icon: MapPin, label: 'Endereço', value: 'Rua Barcelona, 340, B — Sala 05\nJaguaré, São Paulo — SP\nCEP: 05331-011', href: null },
              { Icon: Clock, label: 'Horário', value: 'Seg — Sex: 8h às 18h\nAtendimento online em todo Brasil', href: null },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="flex gap-4 items-start">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: '#1c2d4a' }}
                >
                  <Icon size={17} style={{ color: '#b89450' }} />
                </div>
                <div>
                  <p
                    className="font-semibold mb-0.5"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', color: '#b89450', letterSpacing: '0.05em', textTransform: 'uppercase' }}
                  >
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="hover:underline whitespace-pre-line"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9375rem', color: '#333', lineHeight: 1.6 }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p
                      className="whitespace-pre-line"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9375rem', color: '#333', lineHeight: 1.65 }}
                    >
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Formulário */}
          <div
            className="lg:col-span-3 rounded-2xl p-8 md:p-10"
            style={{ background: '#f7f5f1', border: '1px solid #e8e4df' }}
          >
            {status === 'success' ? (
              <div className="text-center py-12">
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', color: '#b89450' }}>✓</div>
                <h3
                  className="mt-4 mb-2"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', color: '#1c2d4a' }}
                >
                  Mensagem enviada!
                </h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem', color: '#666', fontWeight: 300 }}>
                  A Dra. Larissa entrará em contato em até 24 horas úteis.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-5">
                <h3
                  className="mb-1"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', color: '#1c2d4a' }}
                >
                  Solicite uma Análise Gratuita
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="nome"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', color: '#888', display: 'block', marginBottom: '6px', letterSpacing: '0.03em' }}
                    >
                      Seu nome *
                    </label>
                    <input
                      id="nome"
                      type="text"
                      name="nome"
                      required
                      value={form.nome}
                      onChange={change}
                      placeholder="Nome completo"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefone"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', color: '#888', display: 'block', marginBottom: '6px', letterSpacing: '0.03em' }}
                    >
                      Telefone / WhatsApp *
                    </label>
                    <input
                      id="telefone"
                      type="tel"
                      name="telefone"
                      required
                      value={form.telefone}
                      onChange={change}
                      placeholder="(11) 99999-9999"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="assunto"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', color: '#888', display: 'block', marginBottom: '6px', letterSpacing: '0.03em' }}
                  >
                    O que você precisa?
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={form.assunto}
                    onChange={change}
                    className={inputClass}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Dúvida sobre BPC / LOAS">Dúvida sobre BPC / LOAS</option>
                    <option value="Dúvida sobre Aposentadoria">Dúvida sobre Aposentadoria</option>
                    <option value="Benefício negado pelo INSS">Benefício negado pelo INSS</option>
                    <option value="Revisão de benefício">Revisão de benefício</option>
                    <option value="Outro assunto previdenciário">Outro assunto previdenciário</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', color: '#888', display: 'block', marginBottom: '6px', letterSpacing: '0.03em' }}
                  >
                    Conte brevemente o seu caso
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={form.mensagem}
                    onChange={change}
                    rows={4}
                    placeholder="Descreva sua situação para que a Dra. Larissa possa analisar com atenção..."
                    className={inputClass + ' resize-none'}
                    style={inputStyle}
                  />
                </div>

                <p
                  style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', color: '#aaa' }}
                >
                  🔒 Seus dados são tratados com total sigilo e confidencialidade.
                </p>

                {status === 'error' && (
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem', color: '#e53e3e' }}>
                    Ocorreu um erro. Por favor, nos contate diretamente pelo WhatsApp.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-gold w-full disabled:opacity-60"
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar para Análise Gratuita'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-14 rounded-2xl overflow-hidden shadow-md" style={{ border: '1px solid #e8e4df' }}>
          <div
            className="px-6 py-4 flex flex-wrap items-center gap-3"
            style={{ background: '#1c2d4a' }}
          >
            <MapPin size={16} style={{ color: '#b89450', flexShrink: 0 }} />
            <div>
              <p
                className="text-white font-medium"
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9375rem' }}
              >
                Rua Barcelona, 340, B — Sala 05 · Jaguaré, São Paulo — SP
              </p>
              <p
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}
              >
                CEP 05331-011 · Também atendemos 100% online para todo o Brasil
              </p>
            </div>
          </div>
          <iframe
            title="Localização Amparis Advocacia — Jaguaré, São Paulo"
            src="https://maps.google.com/maps?q=Rua+Barcelona,+340,+Jaguar%C3%A9,+S%C3%A3o+Paulo,+SP&output=embed"
            width="100%"
            height="380"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
