# Documentação Técnica - A Cura das Drogas

## 📋 Índice

1. [Arquitetura do Projeto](#arquitetura-do-projeto)
2. [Stack Tecnológico](#stack-tecnológico)
3. [Estrutura de Dados](#estrutura-de-dados)
4. [Componentes](#componentes)
5. [Roteamento](#roteamento)
6. [Estilização](#estilização)
7. [Formulários](#formulários)
8. [Performance](#performance)
9. [SEO](#seo)
10. [Deploy](#deploy)
11. [Manutenção](#manutenção)

## 🏗️ Arquitetura do Projeto

### Next.js 15 App Router

O projeto utiliza a arquitetura mais recente do Next.js com App Router:

```
app/
├── layout.tsx              # Layout raiz com providers
├── globals.css             # Estilos globais
├── (site)/                 # Route group para páginas do site
│   ├── layout.tsx          # Layout específico do site
│   ├── page.tsx            # Homepage
│   ├── o-livro/
│   ├── o-projeto/
│   ├── doar/
│   └── contato/
└── api/                    # API Routes
    └── contact/
        └── route.ts        # Endpoint de contato
```

### Padrões de Desenvolvimento

- **Server Components**: Por padrão, todos os componentes são Server Components
- **Client Components**: Marcados com `"use client"` quando necessário
- **TypeScript**: Tipagem estática em todo o projeto
- **ESLint**: Configuração padrão do Next.js

## 🛠️ Stack Tecnológico

### Core
- **Next.js 15.2.4**: Framework React com App Router
- **React 19**: Biblioteca de UI
- **TypeScript 5**: Tipagem estática

### UI/UX
- **Tailwind CSS 3.4.17**: Framework CSS utilitário
- **Radix UI**: Componentes acessíveis
- **shadcn/ui**: Sistema de design
- **Lucide React**: Ícones
- **next-themes**: Suporte a temas

### Formulários e Validação
- **React Hook Form**: Gerenciamento de formulários
- **Zod**: Validação de esquemas
- **@hookform/resolvers**: Integração React Hook Form + Zod

### Utilitários
- **clsx**: Composição de classes CSS
- **tailwind-merge**: Merge inteligente de classes Tailwind
- **class-variance-authority**: Variantes de componentes

## 📊 Estrutura de Dados

### content/data.ts

```typescript
// Estatísticas de população carcerária
export const prisonStats = [
  { country: "Mundo", population: "~10,77 milhões", source: "World Prison Brief" },
  { country: "Brasil", population: "~839 mil" },
  // ...
]

// Custos de impressão por país
export const printCosts = {
  spain: [
    { quantity: 500, price: "€2.085", size: "16×23,5cm, 208 págs" },
    // ...
  ],
  brazil: [
    { quantity: 500, price: "R$ 12.033,90", size: "16×23cm, 208 págs" },
    // ...
  ],
}

// Informações de contato
export const contacts = {
  phone: "+34 673 01 75 11",
  email: "contact@acuradasdrogas.com",
  website: "acuradasdrogas.com",
  whatsapp: "34673017511",
}

// Citações bíblicas
export const scriptures = [
  {
    text: "Lembrai-vos dos encarcerados...",
    reference: "Hebreus 13:3",
  },
  // ...
]
```

## 🧩 Componentes

### Estrutura de Componentes

```
components/
├── ui/                     # Componentes base (shadcn/ui)
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── ...
├── hero-book.tsx           # Seção hero da homepage
├── video-intro.tsx         # Seção de vídeo introdutório
├── stats-strip.tsx         # Faixa de estatísticas
├── book-highlights.tsx     # Destaques do livro
├── human-impact-section.tsx # Seção de impacto humano
├── testimonial-section.tsx # Seção de depoimentos
├── donation-banner.tsx     # Banner de doação
├── author-section.tsx      # Seção do autor
├── scripture-quote.tsx     # Citações bíblicas
├── header.tsx              # Cabeçalho
├── footer.tsx              # Rodapé
├── contact-form.tsx        # Formulário de contato
├── donation-methods.tsx    # Métodos de doação
└── theme-provider.tsx      # Provider de tema
```

### Padrões de Componentes

#### Server Components (Padrão)
```typescript
// components/hero-book.tsx
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroBook() {
  return (
    <section className="relative py-20 lg:py-32 wave-pattern">
      {/* Conteúdo do componente */}
    </section>
  )
}
```

#### Client Components (Quando necessário)
```typescript
// components/donation-methods.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function DonationMethods() {
  const [copied, setCopied] = useState(false)
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    // JSX do componente
  )
}
```

## 🛣️ Roteamento

### App Router Structure

```typescript
// app/(site)/layout.tsx
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
```

### Páginas Principais

1. **Home** (`/`): Página inicial com todas as seções
2. **O Livro** (`/o-livro`): Detalhes sobre o livro
3. **O Projeto** (`/o-projeto`): Sobre a missão
4. **Doar** (`/doar`): Página de doações
5. **Contato** (`/contato`): Formulário de contato

### Metadata

```typescript
// app/(site)/o-projeto/page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "O Projeto",
  description: "Conheça nossa missão de evangelizar pessoas encarceradas...",
}
```

## 🎨 Estilização

### Tailwind CSS

#### Configuração
```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores customizadas do projeto
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
```

#### Classes Utilitárias

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Customizações */
.wave-pattern {
  background-image: url("data:image/svg+xml,...");
}

.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
```

### Design System

#### Cores
- **Primary**: Azul principal (#3B82F6)
- **Secondary**: Verde para ações (#10B981)
- **Muted**: Tons neutros para texto secundário
- **Background**: Fundos claros e escuros

#### Tipografia
- **Headings**: Font-weight 700, tracking-tight
- **Body**: Font-weight 400, line-height 1.6
- **Small**: Text-sm para informações secundárias

## 📝 Formulários

### React Hook Form + Zod

```typescript
// lib/validations.ts
import * as z from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
})

export type ContactFormData = z.infer<typeof contactSchema>
```

```typescript
// components/contact-form.tsx
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema, type ContactFormData } from "@/lib/validations"

export function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // Lógica de envio
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Campos do formulário */}
      </form>
    </Form>
  )
}
```

### API Route

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server"
import { contactSchema } from "@/lib/validations"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = contactSchema.parse(body)
    
    // Lógica de processamento
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: "Dados inválidos" },
      { status: 400 }
    )
  }
}
```

## ⚡ Performance

### Otimizações Implementadas

1. **Server Components**: Redução do bundle do cliente
2. **Image Optimization**: Next.js Image component
3. **Code Splitting**: Automático com App Router
4. **Static Generation**: Páginas estáticas quando possível

### Métricas de Performance

```bash
# Build para produção
pnpm build

# Análise de bundle
pnpm build --analyze
```

### Lazy Loading

```typescript
// Carregamento lazy de componentes pesados
import dynamic from "next/dynamic"

const VideoIntro = dynamic(() => import("@/components/video-intro"), {
  loading: () => <div>Carregando...</div>,
})
```

## 🔍 SEO

### Metadata Dinâmica

```typescript
// app/(site)/o-livro/page.tsx
export const metadata: Metadata = {
  title: "O Livro | A Cura das Drogas",
  description: "Conheça A Cura das Drogas - uma mensagem de transformação...",
  keywords: ["livro", "cura", "drogas", "transformação", "fé"],
  openGraph: {
    title: "O Livro | A Cura das Drogas",
    description: "Conheça A Cura das Drogas...",
    images: ["/og-image.jpg"],
  },
}
```

### Structured Data

```typescript
// Adicionar dados estruturados para melhor SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "A Cura das Drogas",
  "description": "Projeto social de evangelização...",
  "url": "https://acuradasdrogas.com",
}
```

## 🚀 Deploy

### Vercel (Recomendado)

1. **Configuração**
```bash
# .vercelignore
node_modules
.next
.env.local
```

2. **Variáveis de Ambiente**
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://acuradasdrogas.com
CONTACT_EMAIL=contact@acuradasdrogas.com
```

3. **Build Settings**
- Framework Preset: Next.js
- Build Command: `pnpm build`
- Output Directory: `.next`

### Outras Plataformas

#### Netlify
```toml
# netlify.toml
[build]
  command = "pnpm build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Railway
- Conecte o repositório
- Configure as variáveis de ambiente
- Deploy automático

## 🔧 Manutenção

### Atualizações de Dependências

```bash
# Verificar atualizações
pnpm outdated

# Atualizar dependências
pnpm update

# Atualizar para versões mais recentes
pnpm update --latest
```

### Monitoramento

1. **Performance**: Vercel Analytics
2. **Erros**: Sentry ou similar
3. **SEO**: Google Search Console
4. **Acessibilidade**: Lighthouse CI

### Backup e Versionamento

```bash
# Backup dos dados
cp content/data.ts content/data.backup.ts

# Commit regular
git add .
git commit -m "feat: atualização de conteúdo"
git push origin main
```

### Checklist de Deploy

- [ ] Testes passando
- [ ] Build sem erros
- [ ] Variáveis de ambiente configuradas
- [ ] SEO otimizado
- [ ] Performance adequada
- [ ] Acessibilidade verificada

---

**Última atualização**: Dezembro 2024  
**Versão**: 2.0.0  
**Mantenedor**: Equipe A Cura das Drogas 