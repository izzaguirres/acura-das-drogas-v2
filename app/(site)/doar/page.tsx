import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DonationMethods } from "@/components/donation-methods"
import { printCosts } from "@/content/data"
import { Reveal } from "@/components/reveal"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  WhatsappIcon,
  Tick02Icon,
} from "@hugeicons/core-free-icons"
import { WaLink } from "@/components/wa-link"

export const metadata: Metadata = {
  title: "Doar | Sua doação vira livro na cela",
  description:
    "Cerca de R$ 30 imprime e entrega 1 livro dentro de uma cela. Veja exatamente pra onde vai sua doação.",
  keywords: [
    "doar a cura das drogas",
    "doação projeto evangelização presídios",
    "PIX doação",
    "transparência ONG",
  ],
  openGraph: {
    title: "Sua doação imprime esperança",
    description:
      "100% das doações viram livro impresso e entregue em presídios.",
  },
}

const faqItems = [
  {
    q: "Como sei que minha doação foi bem usada?",
    a: "Disponibilizamos relatórios periódicos de impressão e distribuição. Acompanhe também no Instagram @acuradasdrogas, onde postamos as entregas em presídios.",
  },
  {
    q: "Posso doar livros físicos em vez de dinheiro?",
    a: "Sim. Se você tem acesso a uma gráfica ou já tem exemplares, fala com a gente pelo WhatsApp e a gente alinha a logística.",
  },
  {
    q: "Vocês emitem recibo?",
    a: "Sim. Após a transferência, envia o comprovante pelo WhatsApp e a gente emite o recibo oficial.",
  },
  {
    q: "Tem doação recorrente?",
    a: "Ainda não automatizamos. Por enquanto, o caminho é PIX manual no valor e frequência que fizer sentido pra você.",
  },
]

export default function DonatePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* === HERO === */}
      <section className="relative w-full -mt-[76px] lg:-mt-[88px] bg-ocean text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: "rgba(217, 74, 42, 0.18)" }}
        />
        <div
          aria-hidden
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: "rgba(74, 159, 212, 0.22)" }}
        />

        <div className="relative container pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20 lg:pb-24">
          <div className="max-w-[820px] flex flex-col gap-5 md:gap-7 animate-fade-up">
            <div className="inline-flex self-start items-center gap-2 rounded-full px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-consejero" />
              <span className="text-[11px] font-medium text-white tracking-[0.14em] uppercase">
                Doar
              </span>
            </div>

            <h1 className="type-display text-white">
              Sua doação imprime
              <br />
              <span className="font-light text-sky-100">
                esperança em papel.
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-[600px]">
              100% das doações viram tinta, papel e entrega presencial dentro
              de presídios no Brasil e na Espanha. Sem intermediário, sem
              estrutura inflada.
            </p>
          </div>
        </div>
      </section>

      {/* === Custo unitário (Cross-Modality Numerica) === */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <Reveal className="rounded-[28px] bg-consejero-soft p-8 md:p-12 lg:p-16 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 flex flex-col gap-3">
              <span className="text-[11px] font-medium text-consejero-deep tracking-[0.14em] uppercase">
                Custo unitário
              </span>
              <div className="text-[64px] md:text-[88px] lg:text-[112px] font-light text-consejero leading-[0.95] tracking-[-0.04em]">
                R$ 30
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col gap-4">
              <h2 className="type-h3 text-foreground">
                Imprime e entrega <strong className="font-medium">1 livro</strong>{" "}
                dentro de uma cela.
              </h2>
              <p className="text-[15px] md:text-[16px] text-muted-foreground leading-relaxed">
                Esse é o custo médio combinando impressão (gráfica parceira),
                logística e entrega presencial. Não tem taxa administrativa.
                Não tem intermediário. Vai 100% pro chão.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* === Métodos === */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container">
          <div className="flex flex-col gap-8 md:gap-12">
            <Reveal className="flex flex-col gap-4 max-w-[640px]">
              <span className="inline-flex self-start items-center gap-2 rounded-full px-3.5 py-2 bg-background border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-medium text-muted-foreground tracking-[0.14em] uppercase">
                  Como doar
                </span>
              </span>
              <h2 className="type-h2 text-foreground">
                Escolha o caminho mais cômodo.
              </h2>
            </Reveal>

            <Reveal>
              <DonationMethods />
            </Reveal>
          </div>
        </div>
      </section>

      {/* === Transparência de custos === */}
      <section className="py-16 md:py-24 bg-sky-50">
        <div className="container">
          <div className="flex flex-col gap-8 md:gap-12">
            <Reveal className="flex flex-col gap-4 max-w-[640px]">
              <span className="inline-flex self-start items-center gap-2 rounded-full px-3.5 py-2 bg-white border border-sky-100">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-medium text-primary-800 tracking-[0.14em] uppercase">
                  Transparência
                </span>
              </span>
              <h2 className="type-h2 text-foreground">
                Pra onde vai cada centavo.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-[640px]">
                Trabalhamos com gráficas parceiras nos dois países. Os valores
                abaixo são os custos reais de impressão — quanto mais
                exemplares por lote, mais barato fica por unidade.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              <Reveal className="flex flex-col rounded-[28px] overflow-hidden bg-card border border-border">
                <div className="px-7 py-6 bg-ocean text-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇪🇸</span>
                    <h3 className="text-[18px] font-medium tracking-tight">
                      Espanha
                    </h3>
                  </div>
                  <span className="text-[11px] font-medium text-sky-100 tracking-[0.14em] uppercase">
                    Euro
                  </span>
                </div>
                <div className="flex flex-col">
                  {printCosts.spain.map((c, i) => (
                    <div
                      key={c.quantity}
                      className={`flex items-center justify-between px-7 py-5 ${
                        i < printCosts.spain.length - 1
                          ? "border-b border-border"
                          : ""
                      }`}
                    >
                      <div className="flex flex-col gap-0.5">
                        <p className="text-[16px] font-medium text-foreground">
                          {c.quantity} livros
                        </p>
                        <p className="text-[11px] text-muted-foreground tracking-[0.06em] uppercase">
                          {c.size}
                        </p>
                      </div>
                      <p className="text-[20px] font-medium text-primary tracking-tight">
                        {c.price}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1} className="flex flex-col rounded-[28px] overflow-hidden bg-card border border-border">
                <div className="px-7 py-6 bg-ocean text-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇧🇷</span>
                    <h3 className="text-[18px] font-medium tracking-tight">
                      Brasil
                    </h3>
                  </div>
                  <span className="text-[11px] font-medium text-sky-100 tracking-[0.14em] uppercase">
                    Real
                  </span>
                </div>
                <div className="flex flex-col">
                  {printCosts.brazil.map((c, i) => (
                    <div
                      key={c.quantity}
                      className={`flex items-center justify-between px-7 py-5 ${
                        i < printCosts.brazil.length - 1
                          ? "border-b border-border"
                          : ""
                      }`}
                    >
                      <div className="flex flex-col gap-0.5">
                        <p className="text-[16px] font-medium text-foreground">
                          {c.quantity} livros
                        </p>
                        <p className="text-[11px] text-muted-foreground tracking-[0.06em] uppercase">
                          {c.size}
                        </p>
                      </div>
                      <p className="text-[20px] font-medium text-primary tracking-tight">
                        {c.price}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <p className="text-[12px] text-muted-foreground italic">
              * Valores estimados, sujeitos à cotação do dia e ao fornecedor.
            </p>
          </div>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <Reveal className="lg:col-span-4 flex flex-col gap-4">
              <span className="inline-flex self-start items-center gap-2 rounded-full px-3.5 py-2 bg-background border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-medium text-muted-foreground tracking-[0.14em] uppercase">
                  Dúvidas comuns
                </span>
              </span>
              <h2 className="type-h2 text-foreground">
                O que você precisa saber.
              </h2>
            </Reveal>

            <div className="lg:col-span-8 flex flex-col gap-3">
              {faqItems.map((item, i) => (
                <Reveal
                  key={item.q}
                  delay={i * 0.05}
                  className="flex flex-col gap-2 p-6 md:p-7 rounded-[20px] bg-card border border-border"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-primary-50 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <HugeiconsIcon icon={Tick02Icon} size={14} strokeWidth={2.4} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-[16px] md:text-[17px] font-medium text-foreground tracking-tight">
                        {item.q}
                      </h3>
                      <p className="text-[14px] md:text-[15px] text-muted-foreground leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === Comprovante CTA === */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="rounded-[28px] bg-ocean text-white p-8 md:p-12 lg:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-32 -right-32 w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none"
              style={{ background: "rgba(74, 159, 212, 0.32)" }}
            />
            <div className="relative flex flex-col gap-2 max-w-[560px]">
              <h3 className="type-h3 text-white">
                Já doou? Manda o comprovante.
              </h3>
              <p className="text-[15px] text-sky-100/85 leading-relaxed">
                A gente agradece pessoalmente, emite recibo e te coloca no
                relatório de impressão. Sem newsletter chata.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="relative self-start rounded-full h-14 px-7 bg-consejero hover:bg-consejero/90 text-consejero-foreground shadow-consejero gap-2 font-medium shrink-0"
            >
              <WaLink
                href="https://wa.me/+34673017500?text=Ol%C3%A1,%20fiz%20uma%20doa%C3%A7%C3%A3o%20e%20vou%20enviar%20o%20comprovante."
                source="doar"
                intent="comprovante"
              >
                <HugeiconsIcon icon={WhatsappIcon} size={18} strokeWidth={2} />
                Enviar comprovante
              </WaLink>
            </Button>
          </div>
        </div>
      </section>

      {/* === Link pra projeto === */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="flex flex-col items-center text-center gap-4 max-w-[560px] mx-auto">
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Quer ver mais sobre como o livro chega à cela?
            </p>
            <Link
              href="/o-projeto"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-primary hover:text-primary-800"
            >
              Conhecer o projeto
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
