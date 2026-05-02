import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidade — Amparis Advocacia',
  description: 'Saiba como a Amparis Advocacia trata seus dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).',
  robots: { index: false, follow: false },
};

export default function Privacidade() {
  return (
    <main className="min-h-screen py-20 px-5" style={{ background: '#f7f5f1' }}>
      <div className="max-w-3xl mx-auto">

        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-10 text-sm hover:opacity-70 transition-opacity"
          style={{ fontFamily: 'Montserrat, sans-serif', color: '#b89450', textDecoration: 'none' }}
        >
          ← Voltar ao site
        </Link>

        <h1
          className="mb-3"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#1c2d4a', lineHeight: 1.15 }}
        >
          Política de Privacidade
        </h1>
        <p
          className="mb-12"
          style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.85rem', color: '#999' }}
        >
          Última atualização: maio de 2026
        </p>

        <div
          className="prose"
          style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem', color: '#444', lineHeight: 1.8, fontWeight: 300 }}
        >
          {sections.map(({ title, content }) => (
            <section key={title} className="mb-10">
              <h2
                className="mb-4"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: '#1c2d4a', fontWeight: 600 }}
              >
                {title}
              </h2>
              <div style={{ color: '#555' }}>{content}</div>
            </section>
          ))}
        </div>

        <div
          className="mt-14 rounded-xl p-6 text-center"
          style={{ background: '#1c2d4a' }}
        >
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>
            Dúvidas sobre esta política?
          </p>
          <a
            href="mailto:larissarocha@amparis.com.br"
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', color: '#b89450', fontWeight: 500 }}
          >
            larissarocha@amparis.com.br
          </a>
        </div>

      </div>
    </main>
  );
}

const sections = [
  {
    title: '1. Quem somos',
    content: (
      <p>
        A <strong style={{ color: '#1c2d4a', fontWeight: 500 }}>Amparis Advocacia</strong>, sob responsabilidade da
        Dra. Larissa Rocha (OAB/SP nº 26.314), com sede na Rua Barcelona, 340, B — Sala 05, Jaguaré, São Paulo/SP,
        CEP 05331-011, é a controladora dos dados pessoais coletados neste site.
      </p>
    ),
  },
  {
    title: '2. Quais dados coletamos',
    content: (
      <>
        <p className="mb-3">Coletamos apenas os dados que você nos fornece voluntariamente por meio do formulário de contato:</p>
        <ul className="pl-5 flex flex-col gap-1" style={{ listStyleType: 'disc' }}>
          <li>Nome completo</li>
          <li>Telefone / WhatsApp</li>
          <li>Assunto do contato</li>
          <li>Mensagem descrevendo sua situação</li>
        </ul>
        <p className="mt-3">Não coletamos cookies de rastreamento, dados de navegação ou informações de pagamento.</p>
      </>
    ),
  },
  {
    title: '3. Para que usamos seus dados',
    content: (
      <>
        <p className="mb-3">Seus dados são utilizados exclusivamente para:</p>
        <ul className="pl-5 flex flex-col gap-1" style={{ listStyleType: 'disc' }}>
          <li>Retornar seu contato e realizar a análise gratuita do caso</li>
          <li>Enviar informações relevantes sobre seus direitos previdenciários, mediante solicitação</li>
          <li>Cumprir obrigações legais e regulatórias aplicáveis ao exercício da advocacia</li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Base legal (LGPD)',
    content: (
      <p>
        O tratamento dos dados é realizado com base no <strong style={{ color: '#1c2d4a', fontWeight: 500 }}>consentimento do titular</strong> (art. 7º, I da Lei nº 13.709/2018)
        e na <strong style={{ color: '#1c2d4a', fontWeight: 500 }}>execução de contrato ou diligências pré-contratuais</strong> (art. 7º, V),
        quando aplicável ao atendimento jurídico solicitado.
      </p>
    ),
  },
  {
    title: '5. Compartilhamento de dados',
    content: (
      <p>
        Seus dados <strong style={{ color: '#1c2d4a', fontWeight: 500 }}>não são vendidos, alugados ou compartilhados</strong> com terceiros
        para fins comerciais. O acesso é restrito à equipe da Amparis Advocacia. O formulário de contato utiliza
        o serviço FormSubmit.co apenas para o encaminhamento da mensagem ao e-mail do escritório.
      </p>
    ),
  },
  {
    title: '6. Por quanto tempo guardamos seus dados',
    content: (
      <p>
        Os dados são mantidos pelo prazo necessário para a prestação do serviço jurídico e,
        no mínimo, pelo prazo previsto na legislação aplicável ao sigilo profissional do advogado.
        Após esse período, os dados são eliminados de forma segura.
      </p>
    ),
  },
  {
    title: '7. Seus direitos (LGPD)',
    content: (
      <>
        <p className="mb-3">Conforme a Lei nº 13.709/2018, você tem direito a:</p>
        <ul className="pl-5 flex flex-col gap-1" style={{ listStyleType: 'disc' }}>
          <li>Confirmar a existência de tratamento de seus dados</li>
          <li>Acessar seus dados</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
          <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
          <li>Revogar o consentimento a qualquer momento</li>
          <li>Solicitar a portabilidade dos dados</li>
        </ul>
        <p className="mt-3">
          Para exercer qualquer desses direitos, entre em contato pelo e-mail{' '}
          <a href="mailto:larissarocha@amparis.com.br" style={{ color: '#b89450' }}>
            larissarocha@amparis.com.br
          </a>.
        </p>
      </>
    ),
  },
  {
    title: '8. Segurança',
    content: (
      <p>
        O site utiliza protocolo HTTPS com certificado SSL. Adotamos medidas técnicas e organizacionais
        adequadas para proteger seus dados contra acesso não autorizado, alteração ou divulgação indevida.
      </p>
    ),
  },
  {
    title: '9. Alterações nesta política',
    content: (
      <p>
        Esta política pode ser atualizada periodicamente. Recomendamos revisá-la periodicamente.
        A data da última atualização está indicada no topo desta página.
      </p>
    ),
  },
];
