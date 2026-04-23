# Viagens — Portal de Destinos

Projeto desenvolvido como parte do curso de **Front-end da EBAC** (Escola Britânica de Artes Criativas).

## Sobre o projeto

Portal de viagens que lista destinos turísticos e exibe informações detalhadas sobre cada um em páginas individuais. O objetivo foi aplicar na prática os principais conceitos do Next.js com App Router.

## Tecnologias utilizadas

- [Next.js 15](https://nextjs.org/) com App Router
- [TypeScript](https://www.typescriptlang.org/)
- CSS Modules
- Google Fonts (Playfair Display + Lora)
- Next.js Image e Link

## Conceitos aplicados

- Rotas baseadas em arquivos com App Router
- Rotas dinâmicas com `[id]` e `generateStaticParams`
- Componentes reutilizáveis (`Layout`, `CardDestino`)
- Tipagem com `interface` TypeScript
- Estilização com CSS Modules
- Navegação com `next/link`
- Otimização de imagens com `next/image`

## Estrutura de pastas

src/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│   ├── page.module.css
│   └── destinos/
│       ├── page.tsx
│       ├── page.module.css
│       └── [id]/
│           ├── page.tsx
│           └── page.module.css
├── components/
│   ├── Layout/
│   │   ├── Layout.tsx
│   │   └── Layout.module.css
│   └── CardDestino/
│       ├── CardDestino.tsx
│       └── CardDestino.module.css
├── data/
│   └── destinos.ts
└── types/
└── destino.ts


## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Página inicial com hero e apresentação do portal |
| `/destinos` | Listagem de todos os destinos em grid |
| `/destinos/[id]` | Página individual de cada destino |

## Como rodar o projeto

**Pré-requisitos:** Node.js 18+

```bash
# Clonar o repositório
git clone https://github.com/zzfariaszz/portal-de-viagens.git

# Entrar na pasta
cd atividade15

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` no navegador.

## Destinos incluídos

- Kyoto — Japão
- Patagônia — Argentina / Chile
- Marrakech — Marrocos
- Santorini — Grécia
- Hanói — Vietnã
- Islândia

---

Desenvolvido por **Felipe** · aluno EBAC
