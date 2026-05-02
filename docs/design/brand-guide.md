# Guia de Marca — Amparis Advocacia

## Identidade Visual

### Cores

| Variável CSS | Hex | Uso |
|-------------|-----|-----|
| `--navy` | `#1c2d4a` | Cor principal — fundo do logo, headers, seções escuras |
| `--navy-deep` | `#13213a` | Hero (gradiente), menus mobile |
| `--gold` | `#b89450` | Acento dourado — arco do logo, CTAs, destaques |
| `--gold-light` | `#d4af6a` | Hover de botões dourados |
| `--gold-pale` | `#fdf5e6` | Fundo de ícones em seções claras |
| `--bg-soft` | `#f7f5f1` | Fundo de seções alternadas (Problem, About) |
| `--green-wa` | `#25D366` | Botão flutuante WhatsApp apenas |

### Tipografia

| Fonte | Uso | Pesos carregados |
|-------|-----|-----------------|
| Cormorant Garamond | Títulos h1–h3, citações | 400, 600, 700 (normal + italic) |
| Montserrat | Corpo, labels, botões, UI | 300, 400, 600 |

**Regras de tamanho:**
- Body mínimo: 16px (1rem)
- Subtítulos: 15px (0.9375rem)
- Labels uppercase: 12px (0.75rem)

### Botões Globais (globals.css)

| Classe | Aparência | Uso |
|--------|-----------|-----|
| `.btn-gold` | Fundo `#b89450`, texto navy | CTA primário (Hero, HowItWorks) |
| `.btn-outline-gold` | Borda gold, texto gold | CTA secundário |
| `.btn-wa` | Fundo `#25D366` | Botão flutuante e menu mobile |

> **Hero**: usa `.btn-gold` para o CTA WhatsApp — o verde seria visualmente muito intenso sobre o fundo navy escuro.

### Logos e Imagens

| Arquivo | Dimensão exibida | Uso |
|---------|-----------------|-----|
| `/Fundo_escuro.jpg` | 138×62px | Navbar e Footer |
| `/Fundo_claro.jpg` | — | Reservado para seções claras |
| `/Larissa_Perfil.jpeg` | aspect-ratio 16/17 | Seção About (cintura) |
| `/Favicom.jpg` | 32px | Favicon (aba do navegador) |

### Foto da Dra. Larissa (About)

- **Aspect ratio:** `16/17` (ligeiramente mais alto que quadrado)
- **object-fit:** `cover`, **object-position:** `top`
- **Enquadramento:** cabeça até a cintura
- **Frame decorativo:** borda dourada `rgba(184,148,80,0.4)` com offset `pl-4 pt-4`

### Elementos Decorativos

- **Linha divisória:** `background: #b89450`, `height: 2px`, `width: 40px`
- **Frame dourado:** `border: 1.5px solid rgba(184,148,80,0.4)`, offset 16px com `pl-4 pt-4`
- **Linha top da Hero:** gradiente `transparent → #b89450 → transparent`
- **Textura diagonal Hero:** `repeating-linear-gradient(-45deg, #b89450...)`, opacidade 3%

### Ícones

- **Biblioteca:** Lucide React (`strokeWidth={1.5}`)
- **Cor em fundos claros:** `#1c2d4a`
- **Cor em fundos escuros:** `#b89450`
- **Fundo do ícone em seções claras:** `#fdf5e6` (gold-pale)
- **Fundo do ícone na About:** `#fff` com borda `#e8e4df`

## Tom de Voz

- **Formal e acessível** — técnico sem ser hermético
- **Empático e humano** — "Nós não desistimos do seu direito"
- **Confiança:** 15 anos, Mestrado Mackenzie, OAB/SP nº 26.314
- Evitar: verde excessivo, jargões, promessas de resultado garantido

## Princípios de UX

- Touch targets mínimos: 52px de altura
- Texto body mínimo: 16px
- Hierarquia de CTA: WhatsApp (primário) → Formulário (secundário)
- WhatsApp float: aparece com fade após scroll sair da seção `#inicio`
- Foco exclusivo: BPC e Aposentadoria
