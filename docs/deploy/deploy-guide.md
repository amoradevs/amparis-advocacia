# Guia de Deploy — Amparis Advocacia

## Stack

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript
- **Estilo:** Tailwind CSS v4
- **Fontes:** Google Fonts (Cormorant Garamond + Montserrat)
- **Deploy:** Vercel (recomendado)

## Deploy no Vercel

### Via GitHub (recomendado)

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em "New Project"
3. Importe o repositório `amoradevs/amparis-advocacia`
4. Configurações automáticas detectam Next.js — clique em "Deploy"
5. URL gerada automaticamente

### Variáveis de Ambiente

Ainda não há variáveis de ambiente necessárias.
Quando integrar um backend de formulário (ex: Resend, EmailJS), adicionar:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

### Comandos Locais

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar em produção local
npm start

# Lint
npm run lint
```

## Repositório GitHub

- **URL:** https://github.com/amoradevs/amparis-advocacia
- **Branch principal:** `main`
- **Visibilidade:** Público

## Próximos Passos

- [ ] Conectar Vercel ao repositório GitHub para deploy automático
- [ ] Configurar domínio personalizado (ex: amparisadvocacia.com.br)
- [ ] Integrar envio real de e-mail no formulário de contato
- [ ] Adicionar fotos reais da equipe
- [ ] Configurar Google Analytics ou similar
- [ ] Adicionar mapa do Google Maps na seção de contato
