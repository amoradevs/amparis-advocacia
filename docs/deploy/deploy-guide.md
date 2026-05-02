# Guia de Deploy — Amparis Advocacia

## Stack

| Item | Detalhe |
|------|---------|
| Framework | Next.js 16.2.4 (App Router) |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS v4 |
| Fontes | Cormorant Garamond + Montserrat (next/font/google, self-hosted) |
| Ícones | Lucide React (tree-shaken via optimizePackageImports) |
| Formulário | FormSubmit.co (sem backend) |
| Deploy | Vercel |
| Repositório | github.com/amoradevs/amparis-advocacia |

## URLs

| Ambiente | URL |
|----------|-----|
| Produção | https://www.amparis.com.br |
| Redirect | https://amparis.com.br → www (308) |
| Vercel app | https://amparis-advocacia.vercel.app |

## DNS (Hostinger)

| Tipo | Nome | Destino | TTL |
|------|------|---------|-----|
| A | @ | 216.198.79.1 | 3600 |
| CNAME | www | cname.vercel-dns.com | 3600 |
| TXT | @ | google-site-verification=GaB28BBke-HfAnUud6fu7wY4jq1RrMjCm13t3damJj4 | 3600 |
| MX | @ | mx1.hostinger.com (prioridade 5) | 14400 |
| MX | @ | mx2.hostinger.com (prioridade 10) | 14400 |

> ⚠️ Não alterar MX, SPF e DKIM — usados pelo e-mail larissarocha@amparis.com.br

## Estrutura de Arquivos

```
src/
├── app/
│   ├── icon.jpg              ← Favicon (Next.js App Router)
│   ├── layout.tsx            ← Metadata SEO, schema, fontes
│   ├── page.tsx              ← Composição das seções (dynamic imports)
│   ├── globals.css           ← Tokens de cor, botões globais
│   ├── sitemap.ts            ← Sitemap automático
│   └── privacidade/
│       └── page.tsx          ← Política de Privacidade LGPD
└── components/
    ├── Navbar.tsx             ← 'use client' — scroll + menu mobile
    ├── Hero.tsx               ← Seção inicial
    ├── Problem.tsx            ← "Você se identifica?"
    ├── Services.tsx           ← Áreas de atuação
    ├── Diferenciais.tsx       ← 6 diferenciais
    ├── HowItWorks.tsx         ← Como funciona (3 passos)
    ├── About.tsx              ← Dra. Larissa + foto
    ├── Contact.tsx            ← 'use client' — formulário + mapa
    ├── Footer.tsx             ← Rodapé com OAB e Política de Privacidade
    └── WhatsAppFloat.tsx      ← 'use client' — botão flutuante scroll-aware
```

## Deploy Local → Produção

```bash
npm install          # instalar dependências
npm run build        # verificar zero erros antes do deploy
npx vercel --prod    # deploy para produção
```

## Otimizações de Performance (next.config.ts)

```ts
compress: true                          // Brotli/gzip
images: { formats: ['avif', 'webp'] }  // conversão automática de imagens
images: { minimumCacheTTL: 31536000 }  // cache de 1 ano para imagens
experimental: { optimizePackageImports: ['lucide-react'] }  // tree-shaking
```

Dynamic imports em `page.tsx` para componentes below-fold:
- Services, Diferenciais, HowItWorks, About, Contact, Footer, WhatsAppFloat

## SEO e Indexação

| Item | Status |
|------|--------|
| Google Search Console | ✅ Verificado (DNS TXT + meta tag) |
| Sitemap | ✅ Enviado — 1 página indexada |
| Schema markup | ✅ LegalService + Person (JSON-LD) |
| Open Graph | ✅ og:image, og:url, og:siteName |
| Twitter Card | ✅ summary_large_image |
| Canonical URL | ✅ https://www.amparis.com.br |

## Favicon

Arquivo: `src/app/icon.jpg` (Next.js App Router — detecção automática)
Tag manual no `<head>` em layout.tsx como fallback:
```html
<link rel="icon" href="/Favicom.jpg" type="image/jpeg" />
<link rel="apple-touch-icon" href="/Favicom.jpg" />
```

## Checklist de Deploy

- [ ] `npm run build` sem erros
- [ ] TypeScript sem warnings
- [ ] Formulário testado → larissarocha@amparis.com.br
- [ ] WhatsApp float aparece só após scroll da hero
- [ ] Responsivo mobile (375px e 768px)
- [ ] Favicon visível na aba
