import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FinalCta } from "@/components/final-cta"
import { Reveal } from "@/components/reveal"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, WhatsappIcon } from "@hugeicons/core-free-icons"
import { WaLink } from "@/components/wa-link"

export const metadata: Metadata = {
  title: "O Livro | A Cura das Drogas — Manual de transformação",
  description:
    "Sete etapas, sem recaídas, sem remédios. Um manual de cabeceira escrito por quem viveu 30 anos no campo.",
  keywords: [
    "livro a cura das drogas",
    "manual recuperação espiritual",
    "leitura para presídios",
    "livro Isaac Amar",
    "comprar livro a cura das drogas",
  ],
  openGraph: {
    title: "Livro: A Cura das Drogas",
    description:
      "Sete etapas para uma transformação. Sem recaídas. Sem remédios.",
    type: "book",
    images: [
      {
        url: "/images/livro.png",
        width: 600,
        height: 800,
        alt: "Capa do Livro A Cura das Drogas",
      },
    ],
  },
}

// TODO: pegar com Isaac Amar os títulos reais das 7 etapas. Estes são temas provisórios derivados do conteúdo do PDF oficial.
const themes = [
  {
    num: "01",
    title: "O chamado à transformação",
    body: "Reconhecer que a mudança começa com uma decisão interna, não com uma circunstância externa.",
  },
  {
    num: "02",
    title: "A raiz espiritual do vazio",
    body: "Por que tratamento sem espiritualidade quase sempre falha — e o que muda quando você nomeia o vazio.",
  },
  {
    num: "03",
    title: "Quebrar o rótulo",
    body: "Vício como desordem espiritual curável, não como doença sem cura. A diferença entre culpa e responsabilidade.",
  },
  {
    num: "04",
    title: "Disciplina sem sofrimento",
    body: "Como construir hábitos espirituais que sustentam a recuperação no dia a dia — sem virar moralismo.",
  },
  {
    num: "05",
    title: "Reconstruir relacionamentos",
    body: "Família, amigos, igreja. Como restaurar o que o vício quebrou — e o que precisa ser deixado pra trás.",
  },
  {
    num: "06",
    title: "Servir como cura",
    body: "Por que ajudar outro a sair acelera sua própria recuperação. O princípio do alcance.",
  },
  {
    num: "07",
    title: "Permanência",
    body: "O que muda em quem segue o caminho até o fim. Permanecer livre é uma decisão diária.",
  },
]

// 3 colunas comparação — "Por que esse livro funciona"
const whyItWorks = [
  {
    eyebrow: "A maioria diz",
    title: "Vício é doença sem cura.",
    body: "A medicina rotulou. A culpa virou cárcere. Recaída vira prova de fraqueza.",
    tone: "muted",
  },
  {
    eyebrow: "Esse livro propõe",
    title: "É desordem espiritual curável.",
    body: "Combate o estigma sem ignorar a clínica. Trata a raiz que o tratamento médico não toca.",
    tone: "primary",
  },
  {
    eyebrow: "O que muda",
    title: "Decisão > diagnóstico.",
    body: "O leitor sai com agência. Recaída deixa de ser sentença e vira ponto de retomada.",
    tone: "consejero",
  },
]

// Testemunhos novos — perfis diferentes da home
const readerTestimonials = [
  {
    initials: "MS",
    name: "Maria Santos",
    role: "Mãe de pessoa em recuperação",
    quote:
      "Comprei pra meu filho que tava na clínica. Ele leu duas vezes em uma semana e me chamou pra conversar de um jeito que não acontecia há anos.",
  },
  {
    initials: "RA",
    name: "Pe. Renato A.",
    role: "Capelão prisional · São Paulo",
    quote:
      "Em 12 anos de capelania, é o primeiro material que os internos pedem emprestado entre eles. Não fica parado na estante.",
  },
  {
    initials: "PM",
    name: "Pedro M.",
    role: "Recuperado há 5 anos",
    quote:
      "Tinha tentado tudo — clínica, AA, igreja. O que faltava tava na etapa 3 desse livro. Ali eu vi que não era doença minha, era vazio.",
  },
]

// Specs físicas
const bookSpecs = [
  { label: "Páginas", value: "208" },
  { label: "Formato", value: "16 × 23 cm" },
  { label: "Idiomas (já editados)", value: "Português · Espanhol · Inglês" },
  { label: "Em produção", value: "Italiano · Francês" },
]

export default function BookPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "A Cura das Drogas",
    author: { "@type": "Person", name: "Isaac Amar" },
    url: "https://acuradasdrogas.com/o-livro",
    description:
      "Manual prático e espiritual para vencer o vício. Sete etapas para uma transformação — sem recaídas, sem remédios.",
    inLanguage: "pt-BR",
    genre: "Espiritualidade / Recuperação",
    image: "https://acuradasdrogas.com/images/livro.png",
    numberOfPages: 208,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "30.00",
      priceCurrency: "BRL",
      url: "https://wa.me/+34673017500",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* === HERO === livro à direita, conteúdo à esquerda */}
      <section className="relative w-full -mt-[76px] lg:-mt-[88px] bg-ocean text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: "rgba(74, 159, 212, 0.28)" }}
        />
        <div
          aria-hidden
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: "rgba(74, 159, 212, 0.18)" }}
        />

        <div className="relative container pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-5 md:gap-7 animate-fade-up order-2 lg:order-1">
              <div className="inline-flex self-start items-center gap-2 rounded-full px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                <span className="text-[11px] font-medium text-white tracking-[0.14em] uppercase">
                  O Livro
                </span>
              </div>

              <h1 className="type-display text-white">
                Sete etapas.
                <br />
                <span className="font-light text-sky-100">Sem recaídas.</span>
              </h1>

              <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-[520px]">
                Não é teoria de gabinete nem retórica religiosa. É um manual
                de cabeceira escrito por quem viveu 30 anos no campo — e viu
                acontecer.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full h-14 px-7 bg-consejero hover:bg-consejero/90 text-consejero-foreground shadow-consejero font-medium gap-2.5 transition-all hover:-translate-y-0.5"
                >
                  <WaLink
                    href="https://wa.me/+34673017500?text=Ol%C3%A1,%20gostaria%20de%20adquirir%20o%20livro%20A%20Cura%20das%20Drogas."
                    source="o_livro"
                    intent="comprar"
                  >
                    <HugeiconsIcon icon={WhatsappIcon} size={18} strokeWidth={2} />
                    Adquirir o livro
                  </WaLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-full h-14 px-7 bg-white hover:bg-white/95 text-ocean shadow-lifted font-medium gap-2.5"
                >
                  <Link href="#temas">
                    Ver as etapas
                    <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-[260px] sm:w-[320px] lg:w-[420px] aspect-[3/4] animate-float">
                <div
                  aria-hidden
                  className="absolute -inset-8 rounded-full"
                  style={{ background: "rgba(74, 159, 212, 0.18)", filter: "blur(40px)" }}
                />
                <Image
                  src="/images/livro.png"
                  alt="Livro A Cura das Drogas"
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, 320px"
                  className="object-contain drop-shadow-2xl relative"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Trecho do livro === */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-4 flex flex-col gap-5">
              <span className="inline-flex self-start items-center gap-2 rounded-full px-3.5 py-2 bg-background border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-medium text-muted-foreground tracking-[0.14em] uppercase">
                  Trecho
                </span>
              </span>
              <h2 className="type-h2 text-foreground">
                Como o livro fala.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-[360px]">
                Linguagem direta, sem jargão religioso. Pra quem nunca abriu
                bíblia entender, e pra quem leu a vida toda enxergar de novo.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-8 relative p-8 md:p-12 lg:p-14 rounded-[28px] bg-sky-50 border border-sky-100">
              <span className="absolute -top-4 left-8 text-[64px] md:text-[88px] font-light text-primary/20 leading-none select-none">
                &ldquo;
              </span>
              <div className="relative flex flex-col gap-5 text-[18px] md:text-[20px] text-foreground leading-[1.6]">
                <p>
                  Muitas abordagens tratam o vício como uma doença sem cura. A
                  pessoa recebe um diagnóstico, um rótulo, e passa o resto da
                  vida administrando uma sentença. Não é assim que enxergamos.
                </p>
                <p>
                  O que chamamos aqui de <em>cura</em> não é negação da química,
                  da família, da clínica. É o reconhecimento de que existe um
                  vazio espiritual por trás do uso — e que esse vazio pode ser
                  preenchido por uma decisão pessoal sustentada por fé. Não é
                  fácil. É possível.
                </p>
              </div>
              <p className="relative mt-6 text-[13px] text-muted-foreground italic">
                — Trecho da introdução · Isaac Amar
              </p>
              <p className="relative mt-3 text-[12px] text-muted-foreground italic">
                * Trecho provisório a confirmar com Isaac.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* === As 7 etapas === */}
      <section id="temas" className="py-16 md:py-24 lg:py-32 bg-sky-50">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-14">
            <Reveal className="flex flex-col gap-5 max-w-[760px]">
              <span className="inline-flex self-start items-center gap-2 rounded-full px-3.5 py-2 bg-white border border-sky-100">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-medium text-primary-800 tracking-[0.14em] uppercase">
                  Conteúdo
                </span>
              </span>
              <h2 className="type-h2 text-foreground">
                Sete etapas para uma transformação.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-[640px]">
                Cada etapa constrói sobre a anterior. Não é programa de 7
                semanas — é uma sequência de descobertas que acontece no ritmo
                de quem lê.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {themes.map((t, i) => (
                <Reveal
                  key={t.num}
                  delay={(i % 3) * 0.1}
                  className="flex flex-col gap-5 p-7 lg:p-8 rounded-[24px] bg-card border border-border"
                >
                  <span className="text-[36px] md:text-[40px] font-light text-primary leading-none tracking-[-0.04em]">
                    {t.num}
                  </span>
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-[18px] md:text-[20px] font-medium text-foreground tracking-tight leading-[1.3]">
                      {t.title}
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-muted-foreground leading-relaxed">
                      {t.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="text-[12px] text-muted-foreground italic">
              * Títulos provisórios baseados no conteúdo público do projeto. A
              versão final dos nomes está sendo confirmada com o autor.
            </p>
          </div>
        </div>
      </section>

      {/* === Por que esse livro funciona quando outros falham === */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-14">
            <Reveal className="flex flex-col gap-5 max-w-[720px]">
              <span className="inline-flex self-start items-center gap-2 rounded-full px-3.5 py-2 bg-background border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-medium text-muted-foreground tracking-[0.14em] uppercase">
                  Diferencial
                </span>
              </span>
              <h2 className="type-h2 text-foreground">
                Por que funciona quando outros falham.
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {whyItWorks.map((w, i) => (
                <Reveal
                  key={w.title}
                  delay={i * 0.1}
                  className={
                    w.tone === "primary"
                      ? "flex flex-col gap-5 p-7 lg:p-8 rounded-[24px] bg-primary-50 border border-sky-100"
                      : w.tone === "consejero"
                        ? "flex flex-col gap-5 p-7 lg:p-8 rounded-[24px] bg-consejero-soft border border-consejero-border"
                        : "flex flex-col gap-5 p-7 lg:p-8 rounded-[24px] bg-card border border-border"
                  }
                >
                  <span
                    className={
                      w.tone === "primary"
                        ? "text-[11px] font-medium text-primary-800 tracking-[0.14em] uppercase"
                        : w.tone === "consejero"
                          ? "text-[11px] font-medium text-consejero-deep tracking-[0.14em] uppercase"
                          : "text-[11px] font-medium text-muted-foreground tracking-[0.14em] uppercase"
                    }
                  >
                    {w.eyebrow}
                  </span>
                  <h3 className="text-[20px] md:text-[22px] font-medium text-foreground tracking-tight leading-[1.3]">
                    {w.title}
                  </h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    {w.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === Testemunhos de leitores (perfis diferentes da home) === */}
      <section className="py-16 md:py-24 lg:py-32 bg-sky-50">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-14">
            <Reveal className="flex flex-col gap-5 max-w-[640px]">
              <span className="inline-flex self-start items-center gap-2 rounded-full px-3.5 py-2 bg-white border border-sky-100">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-medium text-primary-800 tracking-[0.14em] uppercase">
                  Quem leu
                </span>
              </span>
              <h2 className="type-h2 text-foreground">
                Três leitores. Três caminhos diferentes.
              </h2>
            </Reveal>

            <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-6 overflow-x-auto overflow-y-hidden md:overflow-visible snap-x snap-mandatory md:snap-none scroll-pl-5 md:scroll-pl-0 touch-pan-x md:touch-auto -mx-5 md:mx-0 px-5 md:px-0 pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden" style={{ overscrollBehaviorX: "contain" }}>
              {readerTestimonials.map((t) => (
                <article
                  key={t.name}
                  className="shrink-0 md:shrink-0 w-[85%] sm:w-[55%] md:w-auto snap-start flex flex-col gap-6 p-8 lg:p-10 rounded-[24px] bg-card border border-border"
                >
                  <blockquote className="text-[17px] md:text-[18px] font-light text-foreground leading-[1.55] flex-grow">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 pt-5 border-t border-border">
                    <div className="w-11 h-11 rounded-full bg-primary-50 flex items-center justify-center text-sm font-medium text-primary-800 shrink-0">
                      {t.initials}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-[15px] font-medium text-foreground tracking-tight">
                        {t.name}
                      </p>
                      <p className="text-[13px] text-muted-foreground">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === Specs físicas === */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <Reveal className="lg:col-span-5 relative">
              <div className="relative w-full max-w-[320px] mx-auto lg:mx-0 aspect-[3/4]">
                <Image
                  src="/images/livro.png"
                  alt="Livro A Cura das Drogas"
                  fill
                  sizes="320px"
                  className="object-contain"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7 flex flex-col gap-6">
              <span className="inline-flex self-start items-center gap-2 rounded-full px-3.5 py-2 bg-background border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-medium text-muted-foreground tracking-[0.14em] uppercase">
                  Specs
                </span>
              </span>
              <h2 className="type-h2 text-foreground">
                Como o livro chega na sua mão.
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {bookSpecs.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col gap-1 py-3 border-t border-border"
                  >
                    <span className="text-[11px] text-muted-foreground tracking-[0.12em] uppercase">
                      {s.label}
                    </span>
                    <span className="text-[16px] md:text-[17px] font-medium text-foreground">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* === Bifurcação dual CTA === */}
      <FinalCta />
    </>
  )
}
