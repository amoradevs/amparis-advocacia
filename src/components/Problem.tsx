import { XCircle, HelpCircle, RefreshCw, FileWarning, Clock } from 'lucide-react';

const situations = [
  {
    Icon: XCircle,
    text: 'Tive meu BPC ou Aposentadoria negado e não sei o que fazer',
  },
  {
    Icon: HelpCircle,
    text: 'Não sei se tenho direito ao benefício e por onde começar',
  },
  {
    Icon: RefreshCw,
    text: 'Já tentei resolver sozinho e continuo sem resposta do INSS',
  },
  {
    Icon: FileWarning,
    text: 'Estou perdido na burocracia e nas exigências do sistema',
  },
  {
    Icon: Clock,
    text: 'Acho que eu já podia ter me aposentado, mas não tenho certeza',
  },
];

export default function Problem() {
  return (
    <section className="py-20" style={{ background: '#f7f5f1' }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
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
            Você se identifica?
          </p>
          <h2
            className="mb-4"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
              color: '#1c2d4a',
            }}
          >
            Situações que a Amparis resolve todo dia
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1rem',
              color: '#6b7280',
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            Se você já viveu uma dessas situações, saiba que existe um caminho jurídico
            — e a Dra. Larissa conhece cada passo dele.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {situations.map(({ Icon, text }) => (
            <div
              key={text}
              className="bg-white rounded-xl p-7 shadow-sm flex flex-col gap-5"
              style={{ border: '1px solid #eee' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: '#f0f4fa' }}
              >
                <Icon size={24} style={{ color: '#1c2d4a' }} strokeWidth={1.5} />
              </div>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.9375rem',
                  color: '#444',
                  lineHeight: 1.65,
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl p-10 text-center"
          style={{ background: '#1c2d4a' }}
        >
          <p
            className="text-white italic mb-4"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.35rem, 3vw, 1.9rem)',
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            &ldquo;A Amparis Advocacia existe para essas pessoas.
            <br />
            Para amparar, orientar e{' '}
            <span style={{ color: '#b89450' }}>não desistir.</span>&rdquo;
          </p>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.875rem',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            — Dra. Larissa Rocha, Advogada Previdenciarista
          </p>
        </div>
      </div>
    </section>
  );
}
