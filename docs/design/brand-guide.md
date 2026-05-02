# Guia de Marca — Amparis Advocacia

## Identidade Visual

### Cores

| Variável CSS | Hex | Uso |
|-------------|-----|-----|
| `--navy` | `#1c2d4a` | Cor principal — fundo do logo, headers, seções escuras |
| `--navy-deep` | `#13213a` | Hero, menus mobile |
| `--gold` | `#b89450` | Acento dourado — arco do logo, CTAs, destaques |
| `--gold-light` | `#d4af6a` | Hover de botões dourados |
| `--gold-pale` | `#fdf5e6` | Fundo de ícones em seções claras |
| `--bg-soft` | `#f7f5f1` | Fundo de seções alternadas (Problem, About) |
| `--green-wa` | `#25D366` | Botão flutuante WhatsApp apenas |

### Tipografia

| Fonte | Uso | Pesos |
|-------|-----|-------|
| Cormorant Garamond | Títulos h1–h3, citações | 400, 600, 700 (normal + italic) |
| Montserrat | Corpo, labels, botões, UI | 300, 400, 500, 600 |

**Tamanhos mínimos:**
- Body: 16px base (1rem)
- Subtítulos: 15px (0.9375rem)
- Labels uppercase: 12px (0.75rem)

### Botões Globais (globals.css)

| Classe | Aparência | Uso |
|--------|-----------|-----|
| `.btn-gold` | Fundo dourado, texto navy | CTA primário — Hero e HowItWorks |
| `.btn-outline-gold` | Borda dourada, texto dourado | CTA secundário |
| `.btn-wa` | Fundo verde WhatsApp | Botão flutuante e menu mobile |

> **Hero:** usa `.btn-gold` para o CTA WhatsApp. O verde `.btn-wa` seria muito intenso sobre fundo navy escuro.

### Logos

| Arquivo | Uso |
|---------|-----|
| `/Fundo_escuro.jpg` | Navbar e Footer (fundo navy) |
| `/Fundo_claro.jpg` | Seções brancas (quando necessário) |
| `/Favicom.jpg` | Favicon |
| `/Larissa_Perfil.jpeg` | Foto da Dra. Larissa — seção About |

Dimensões da logo: 130×58px (Navbar), 130×60px (Footer)

### Elementos Decorativos

- **Frame dourado:** `border: 1.5px solid rgba(184,148,80,0.35)` com offset 16px
- **Linha divisória:** `background: #b89450`, `height: 2px`, `width: 40px`
- **Linha top da Hero:** gradiente `transparent → #b89450 → transparent`
- **Textura diagonal Hero:** `repeating-linear-gradient(-45deg, #b89450...)`, opacidade 3%

### Ícones

- **Biblioteca:** Lucide React
- **Estilo:** 2D minimalista, `strokeWidth={1.5}`
- **Cor em fundos claros:** `#1c2d4a` (navy)
- **Cor em fundos escuros:** `#b89450` (gold)

## Tom de Voz

- **Formal e acessível** — técnico sem ser hermético
- **Empático e humano** — "Nós não desistimos do seu direito"
- **Confiança e solidez** — 15 anos, Mackenzie, OAB/SP nº 26.314
- Evitar: verde em excesso, jargões excessivos, promessas vagas

## Princípios de UX

- Touch targets: mínimo 52px de altura
- Texto body: mínimo 16px
- Hierarquia de CTA: WhatsApp (primário) → Formulário (secundário)
- WhatsApp float: aparece somente após scroll sair da Hero
- Foco exclusivo: BPC e Aposentadoria — não é escritório generalista
