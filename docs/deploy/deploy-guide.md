# Guia de Deploy — Amparis Advocacia

## Stack

| Item | Detalhe |
|------|---------|
| Framework | Next.js 16.2.4 (App Router, static export) |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS v4 |
| Fontes | Cormorant Garamond + Montserrat (Google Fonts) |
| Ícones | Lucide React |
| Formulário | FormSubmit.co (sem backend) |
| Deploy | Vercel |
| Repositório | github.com/amoradevs/amparis-advocacia |

## URLs

| Ambiente | URL |
|----------|-----|
| Produção | https://www.amparis.com.br |
| Redirect | https://amparis.com.br → www |
| Vercel app | https://amparis-advocacia.vercel.app |

## DNS (Hostinger)

| Tipo | Nome | Destino |
|------|------|---------|
| A | @ | 216.198.79.1 |
| CNAME | www | cname.vercel-dns.com |
| TXT | @ | google-site-verification=GaB28BBke-HfAnUud6fu7wY4jq1RrMjCm13t3damJj4 |
| MX | @ | mx1.hostinger.com (prioridade 5) |
| MX | @ | mx2.hostinger.com (prioridade 10) |

> ⚠️ Não alterar os registros MX, SPF e DKIM — são usados pelo e-mail larissarocha@amparis.com.br

## Deploy Local → Produção

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção (verificar erros antes do deploy)
npm run build

# Deploy para produção
npx vercel --prod
```

## Variáveis de Ambiente

Nenhuma variável de ambiente necessária no momento.
O formulário usa FormSubmit.co com envio direto para larissarocha@amparis.com.br.

## SEO e Indexação

- **Google Search Console:** Verificado via DNS TXT + meta tag
- **Sitemap:** https://www.amparis.com.br/sitemap.xml (submetido em 02/05/2026)
- **Schema:** LegalService + Person (JSON-LD no layout.tsx)
- **Canonical:** https://www.amparis.com.br

## Checklist de Deploy

- [ ] `npm run build` sem erros
- [ ] TypeScript sem warnings
- [ ] Formulário testado (envia para larissarocha@amparis.com.br)
- [ ] WhatsApp float aparece após scroll da hero
- [ ] Responsivo mobile (testar em 375px e 768px)
