# Amparis Advocacia — Site Institucional

Site institucional do escritório **Amparis Advocacia**, desenvolvido com Next.js 16, TypeScript e Tailwind CSS v4.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript
- **Estilo:** Tailwind CSS v4
- **Fontes:** Cormorant Garamond + Montserrat (Google Fonts)

## Estrutura do Projeto

```
src/
  app/
    layout.tsx       # Root layout com fontes e metadados
    page.tsx         # Página principal
    globals.css      # Variáveis de cor e estilos globais
  components/
    Navbar.tsx       # Navegação com scroll effect
    Hero.tsx         # Seção de abertura
    About.tsx        # Sobre o escritório
    PracticeAreas.tsx # Áreas de atuação
    Team.tsx         # Equipe
    Contact.tsx      # Formulário de contato
    Footer.tsx       # Rodapé

public/
  Fundo_escuro.jpg  # Logo sobre fundo marinho
  Fundo_claro.jpg   # Logo sobre fundo branco
  Favicom.jpg       # Ícone do escritório

docs/
  design/           # Guia de marca e identidade visual
  content/          # Guia de conteúdo e textos
  deploy/           # Instruções de deploy e infra
  legal/            # Documentos legais (privacidade, termos)
```

## Desenvolvimento Local

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## Deploy

Projeto pronto para deploy no **Vercel**. Veja [docs/deploy/deploy-guide.md](docs/deploy/deploy-guide.md) para instruções completas.

## Documentação

| Documento | Descrição |
|-----------|-----------|
| [docs/design/brand-guide.md](docs/design/brand-guide.md) | Cores, tipografia, assets |
| [docs/content/content-guide.md](docs/content/content-guide.md) | Textos, conteúdo das seções |
| [docs/deploy/deploy-guide.md](docs/deploy/deploy-guide.md) | Deploy, variáveis, domínio |

---

© Amparis Advocacia
