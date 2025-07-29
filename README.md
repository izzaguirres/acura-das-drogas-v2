# A Cura das Drogas - Site Institucional

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

> Site institucional para o projeto social "A Cura das Drogas" - uma missão de transformação e esperança para pessoas encarceradas.

## 📖 Sobre o Projeto

**A Cura das Drogas** é um projeto social que visa evangelizar pessoas encarceradas, oferecendo suporte espiritual e uma mensagem prática de superação de vícios através da fé e transformação pessoal.

### 🎯 Missão
- Distribuir livros gratuitos em presídios
- Oferecer mensagem de esperança e renovação
- Apoiar a transformação espiritual de pessoas encarceradas
- Alcançar comunidades carentes com recursos de cura

### 🌍 Escopo
- **Espanha**: Distribuição em presídios espanhóis
- **Brasil**: Alcance em comunidades brasileiras
- **Internacional**: Expansão para outros países

## 🚀 Tecnologias

- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://reactjs.org/)** - Biblioteca para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis
- **[shadcn/ui](https://ui.shadcn.com/)** - Sistema de design
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Zod](https://zod.dev/)** - Validação de esquemas

## 📦 Instalação

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/acura-das-drogas-v2.git
cd acura-das-drogas-v2
```

2. **Instale as dependências**
```bash
pnpm install
# ou
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
pnpm dev
# ou
npm run dev
```

4. **Acesse o projeto**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🏗️ Estrutura do Projeto

```
acura-das-drogas-v2/
├── app/                    # App Router (Next.js 15)
│   ├── (site)/            # Páginas do site
│   │   ├── contato/       # Página de contato
│   │   ├── doar/          # Página de doações
│   │   ├── o-livro/       # Sobre o livro
│   │   ├── o-projeto/     # Sobre o projeto
│   │   ├── layout.tsx     # Layout do site
│   │   └── page.tsx       # Página inicial
│   ├── api/               # API Routes
│   │   └── contact/       # Endpoint de contato
│   ├── globals.css        # Estilos globais
│   └── layout.tsx         # Layout raiz
├── components/            # Componentes React
│   ├── ui/               # Componentes base (shadcn/ui)
│   ├── author-section.tsx
│   ├── book-highlights.tsx
│   ├── contact-form.tsx
│   ├── donation-banner.tsx
│   ├── donation-methods.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero-book.tsx
│   ├── human-impact-section.tsx
│   ├── scripture-quote.tsx
│   ├── stats-strip.tsx
│   ├── testimonial-section.tsx
│   ├── theme-provider.tsx
│   └── video-intro.tsx
├── content/              # Dados estáticos
│   └── data.ts          # Estatísticas, contatos, etc.
├── lib/                 # Utilitários
│   ├── utils.ts         # Funções utilitárias
│   └── validations.ts   # Esquemas de validação
├── public/              # Arquivos estáticos
└── styles/              # Estilos adicionais
```

## 🎨 Design System

O projeto utiliza um design system consistente baseado em:

- **Cores**: Paleta profissional com tons de azul, verde e neutros
- **Tipografia**: Hierarquia clara com fontes legíveis
- **Componentes**: Biblioteca reutilizável de UI
- **Responsividade**: Design mobile-first
- **Acessibilidade**: Componentes Radix UI com ARIA

## 📱 Páginas Principais

### 🏠 Home
- Apresentação do projeto
- Destaques do livro
- Estatísticas de impacto
- Call-to-action para doações

### 📚 O Livro
- Detalhes sobre o conteúdo
- Capítulos e estrutura
- Abordagem espiritual
- Informações de compra

### 🎯 O Projeto
- Missão e objetivos
- Plano de ação
- Histórias de transformação
- Como participar

### 💝 Doar
- Formas de contribuição
- Custos de impressão
- Transparência
- FAQ

### 📞 Contato
- Informações de contato
- Formulário de mensagem
- Redes sociais

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev          # Inicia servidor de desenvolvimento
pnpm build        # Build para produção
pnpm start        # Inicia servidor de produção
pnpm lint         # Executa linter

# Desenvolvimento
npm run dev       # Alternativa com npm
npm run build     # Alternativa com npm
npm run start     # Alternativa com npm
npm run lint      # Alternativa com npm
```

## 🌐 Deploy

### Vercel (Recomendado)

#### Passos para Deploy:

1. **Conecte o repositório ao Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Clique em "New Project"
   - Importe o repositório `acura-das-drogas-v2`

2. **Configure o projeto:**
   - Framework: Next.js (detectado automaticamente)
   - Build Command: `npm run build` (padrão)
   - Output Directory: `.next` (padrão)
   - Install Command: `npm install` (padrão)

3. **Variáveis de ambiente (se necessário):**
   - `NEXT_PUBLIC_SITE_URL`: `https://acuradasdrogas.com`

4. **Deploy:**
   - Clique em "Deploy"
   - O site estará disponível em alguns minutos

#### Configurações Automáticas:
- ✅ Deploy automático a cada push para `main`
- ✅ Preview deployments para branches
- ✅ SSL/HTTPS automático
- ✅ CDN global
- ✅ Analytics integrados

### Outras Plataformas
- **Netlify**: Compatível com Next.js
- **Railway**: Deploy simples
- **AWS Amplify**: Para projetos empresariais

## 📊 Dados e Conteúdo

O projeto utiliza dados estáticos gerenciados em `content/data.ts`:

- **Estatísticas carcerárias** por país
- **Custos de impressão** (Espanha e Brasil)
- **Informações de contato**
- **Citações bíblicas**
- **Destaques do livro**
- **Plano de ação**

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Website**: [acuradasdrogas.com](https://acuradasdrogas.com)
- **Email**: colaboracao@acuradasdrogas.com.br
- **WhatsApp**: +34 673 01 75 00
- **Instagram**: [@acuradasdrogas](https://instagram.com/acuradasdrogas)

## 🙏 Agradecimentos

- Comunidade Next.js
- Equipe do shadcn/ui
- Contribuidores do projeto
- Voluntários e doadores

---

**A Cura das Drogas** - Transformando vidas através da fé e esperança. 