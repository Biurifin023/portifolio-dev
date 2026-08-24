# Vitor Luiz.dev — Portfólio

Portfólio pessoal de **Vitor Luiz**, desenvolvedor Full Stack focado em Front-end. O site apresenta projetos, stack, trajetória e um formulário de contato integrado ao WhatsApp.

---

## Sobre o projeto

Aplicação construída com **Next.js (App Router)** e conteúdo gerenciado via **Prismic CMS**. Os textos, cards de projetos, detalhes por slug e stack vêm do CMS, com fallbacks locais caso a API falhe.

O design segue tema escuro próprio, tipografia de display e layout responsivo para mobile, tablet e desktop.

---

## Funcionalidades

- **Home** — hero, seção sobre mim, stack atual e projetos em destaque
- **Sobre** — descrição dinâmica, trajetória e objetivos
- **Projetos** — grid com filtro por tipo (Todos / Frontend / Backend / FullStack)
- **Detalhe do projeto** — breadcrumb, resumo, imagem, sobre, funcionalidades e link para o GitHub
- **Contato** — formulário validado (Zod + React Hook Form) que abre o WhatsApp com a mensagem preenchida
- **CMS (Prismic)** — conteúdo editável sem redeploy (documento `port` com groups `card`, `about` e `slug_project`)
- **Skeletons + Suspense** — loading states nas seções dinâmicas
- **SEO** — metadata global e por página, Open Graph, Twitter cards e `generateMetadata` nos slugs
- **Layout responsivo** — adaptação para telas pequenas, médias e grandes
- **404** — página customizada de não encontrado

---

## Tecnologias

| Camada | Tecnologias |
|--------|-------------|
| Framework | Next.js 16, React 19, TypeScript |
| Estilo | Tailwind CSS 4 |
| CMS | Prismic (`@prismicio/client`, `@prismicio/next`, `@prismicio/react`) |
| Formulários | React Hook Form, Zod, `@hookform/resolvers` |
| Ícones | React Icons |
| Tooling | ESLint, React Compiler |

---

## Como rodar

### Pré-requisitos

- Node.js 20+
- Conta/repositório Prismic (opcional para desenvolvimento — há fallbacks)

### Instalação

```bash
npm install
```

### Variáveis de ambiente

Crie `.env.local` na raiz:

```env
NEXT_PUBLIC_PRISMIC_ENVIRONMENT=seu-repositorio-prismic
```

### Scripts

```bash
npm run dev      # desenvolvimento (http://localhost:3000)
npm run build    # build de produção
npm run start    # sobe o build
npm run lint     # ESLint
```

---
## Licença

Projeto pessoal — uso e referência sob autorização do autor.
