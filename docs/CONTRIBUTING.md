# Guia de Contribuição - A Cura das Drogas

## 🤝 Como Contribuir

Obrigado por considerar contribuir com o projeto **A Cura das Drogas**! Este guia irá ajudá-lo a entender como participar do desenvolvimento.

## 📋 Índice

1. [Antes de Começar](#antes-de-começar)
2. [Configuração do Ambiente](#configuração-do-ambiente)
3. [Fluxo de Trabalho](#fluxo-de-trabalho)
4. [Padrões de Código](#padrões-de-código)
5. [Testes](#testes)
6. [Pull Request](#pull-request)
7. [Reportando Bugs](#reportando-bugs)
8. [Sugerindo Melhorias](#sugerindo-melhorias)

## 🚀 Antes de Começar

### Pré-requisitos

- **Node.js 18+** - [Download](https://nodejs.org/)
- **pnpm** (recomendado) ou **npm**
- **Git** - [Download](https://git-scm.com/)
- **Editor de código** - VS Code recomendado

### Conhecimentos Necessários

- React 19
- TypeScript
- Next.js 15
- Tailwind CSS
- Git básico

## ⚙️ Configuração do Ambiente

### 1. Fork e Clone

```bash
# 1. Faça fork do repositório no GitHub
# 2. Clone seu fork
git clone https://github.com/seu-usuario/acura-das-drogas-v2.git
cd acura-das-drogas-v2

# 3. Adicione o repositório original como upstream
git remote add upstream https://github.com/original/acura-das-drogas-v2.git
```

### 2. Instalação

```bash
# Instale as dependências
pnpm install

# Verifique se tudo está funcionando
pnpm dev
```

### 3. Configuração do VS Code (Opcional)

Crie `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.preferences.importModuleSpecifier": "relative",
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

## 🔄 Fluxo de Trabalho

### 1. Sincronize com o Repositório Principal

```bash
# Antes de começar um novo trabalho
git fetch upstream
git checkout main
git merge upstream/main
```

### 2. Crie uma Branch

```bash
# Crie uma branch para sua feature/fix
git checkout -b feature/nome-da-feature
# ou
git checkout -b fix/nome-do-fix
```

### 3. Desenvolva

```bash
# Faça suas alterações
# Teste localmente
pnpm dev

# Commit suas mudanças
git add .
git commit -m "feat: adiciona nova funcionalidade"
```

### 4. Push e Pull Request

```bash
# Push para seu fork
git push origin feature/nome-da-feature

# Crie um Pull Request no GitHub
```

## 📝 Padrões de Código

### TypeScript

```typescript
// ✅ Bom
interface User {
  id: string
  name: string
  email: string
}

const getUser = async (id: string): Promise<User | null> => {
  // implementação
}

// ❌ Evite
const getUser = async (id) => {
  // sem tipagem
}
```

### Componentes React

```typescript
// ✅ Server Component (padrão)
import { Button } from "@/components/ui/button"

export function MyComponent() {
  return (
    <div className="container">
      <Button>Clique aqui</Button>
    </div>
  )
}

// ✅ Client Component (quando necessário)
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function InteractiveComponent() {
  const [count, setCount] = useState(0)
  
  return (
    <Button onClick={() => setCount(count + 1)}>
      Contador: {count}
    </Button>
  )
}
```

### Estilização

```typescript
// ✅ Use Tailwind CSS
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">

// ✅ Use clsx para classes condicionais
import { clsx } from "clsx"

<div className={clsx(
  "p-4 rounded-lg",
  isActive && "bg-primary text-white",
  isDisabled && "opacity-50 cursor-not-allowed"
)}>

// ❌ Evite CSS inline
<div style={{ padding: "16px", backgroundColor: "white" }}>
```

### Nomenclatura

```typescript
// ✅ Componentes: PascalCase
export function HeroSection() { }
export function ContactForm() { }

// ✅ Funções: camelCase
const handleSubmit = () => { }
const validateEmail = (email: string) => { }

// ✅ Variáveis: camelCase
const userData = { }
const isFormValid = true

// ✅ Constantes: UPPER_SNAKE_CASE
const API_BASE_URL = "https://api.example.com"
const MAX_FILE_SIZE = 1024 * 1024
```

### Imports

```typescript
// ✅ Ordem de imports
// 1. React e Next.js
import React from "react"
import Link from "next/link"

// 2. Bibliotecas externas
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

// 3. Componentes internos
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"

// 4. Utilitários e tipos
import { cn } from "@/lib/utils"
import type { ContactData } from "@/lib/validations"

// 5. Estilos
import "./styles.css"
```

## 🧪 Testes

### Executando Testes

```bash
# Testes unitários
pnpm test

# Testes com coverage
pnpm test:coverage

# Testes em modo watch
pnpm test:watch
```

### Escrevendo Testes

```typescript
// __tests__/components/ContactForm.test.tsx
import { render, screen, fireEvent } from "@testing-library/react"
import { ContactForm } from "@/components/contact-form"

describe("ContactForm", () => {
  it("should render form fields", () => {
    render(<ContactForm />)
    
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/mensagem/i)).toBeInTheDocument()
  })

  it("should validate required fields", async () => {
    render(<ContactForm />)
    
    const submitButton = screen.getByRole("button", { name: /enviar/i })
    fireEvent.click(submitButton)
    
    expect(await screen.findByText(/nome é obrigatório/i)).toBeInTheDocument()
  })
})
```

## 🔄 Pull Request

### Checklist do PR

- [ ] Código segue os padrões estabelecidos
- [ ] Testes passam
- [ ] Documentação atualizada (se necessário)
- [ ] Commit messages seguem convenção
- [ ] Branch está atualizada com main

### Template do PR

```markdown
## 📝 Descrição
Breve descrição das mudanças realizadas.

## 🎯 Tipo de Mudança
- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Documentação

## 🧪 Testes
- [ ] Testes unitários adicionados/atualizados
- [ ] Testes manuais realizados
- [ ] Build sem erros

## 📸 Screenshots (se aplicável)
Adicione screenshots das mudanças visuais.

## 🔗 Issue Relacionada
Closes #123

## ✅ Checklist
- [ ] Código revisado
- [ ] Self-review realizado
- [ ] Comentários desnecessários removidos
```

### Commit Messages

```bash
# Convenção: tipo(escopo): descrição

# ✅ Exemplos
feat(contact): adiciona validação de email
fix(header): corrige navegação mobile
docs(readme): atualiza instruções de instalação
refactor(components): simplifica lógica do formulário
test(contact): adiciona testes para validação

# ❌ Evite
added email validation
fixed header
updated readme
```

## 🐛 Reportando Bugs

### Template de Bug Report

```markdown
## 🐛 Descrição do Bug
Descrição clara e concisa do bug.

## 🔄 Passos para Reproduzir
1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja o erro

## ✅ Comportamento Esperado
O que deveria acontecer.

## 📱 Informações do Sistema
- OS: [ex: macOS, Windows, Linux]
- Navegador: [ex: Chrome, Safari, Firefox]
- Versão: [ex: 22]

## 📸 Screenshots
Se aplicável, adicione screenshots.

## 🔧 Contexto Adicional
Qualquer outra informação relevante.
```

## 💡 Sugerindo Melhorias

### Template de Feature Request

```markdown
## 💡 Descrição da Melhoria
Descrição clara da funcionalidade desejada.

## 🎯 Problema que Resolve
Explicação do problema que esta melhoria resolveria.

## 💭 Solução Proposta
Descrição da solução desejada.

## 🔄 Alternativas Consideradas
Outras soluções que foram consideradas.

## 📱 Contexto Adicional
Qualquer contexto adicional.
```

## 🎨 Design e UX

### Princípios de Design

1. **Acessibilidade**: Sempre considere usuários com necessidades especiais
2. **Responsividade**: Design mobile-first
3. **Performance**: Otimize para velocidade
4. **Consistência**: Mantenha padrões visuais

### Componentes de UI

```typescript
// ✅ Use componentes do shadcn/ui
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// ✅ Crie variantes quando necessário
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

## 🔒 Segurança

### Boas Práticas

1. **Validação**: Sempre valide dados de entrada
2. **Sanitização**: Sanitize dados antes de exibir
3. **HTTPS**: Use sempre HTTPS em produção
4. **Dependências**: Mantenha dependências atualizadas

```typescript
// ✅ Validação com Zod
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
})

// ✅ Sanitização
import DOMPurify from "dompurify"

const sanitizedMessage = DOMPurify.sanitize(userMessage)
```

## 📚 Recursos Úteis

### Documentação
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### Ferramentas
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)

### Comunidade
- [Discord Next.js](https://discord.gg/nextjs)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

## 🙏 Agradecimentos

Obrigado por contribuir com o projeto **A Cura das Drogas**! Sua ajuda é fundamental para transformar vidas através da tecnologia.

---

**Precisa de ajuda?** Abra uma issue ou entre em contato conosco! 