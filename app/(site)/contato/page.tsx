import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { contacts } from "@/content/data"
import { Reveal } from "@/components/reveal"
import { WaLink } from "@/components/wa-link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  WhatsappIcon,
  Mail01Icon,
  Location01Icon,
  Clock01Icon,
} from "@hugeicons/core-free-icons"

export const metadata: Metadata = {
  title: "Fale Conosco | A Cura das Drogas",
  description:
    "WhatsApp direto com Isaac Amar, email e formulário. Sem nome, sem julgamento — só conversa.",
  keywords: [
    "contato a cura das drogas",
    "whatsapp projeto cura das drogas",
    "email cura das drogas",
    "falar com Isaac Amar",
  ],
  openGraph: {
    title: "Estamos aqui pra ouvir você",
    description:
      "Pedido de ajuda, doação ou parceria — fale conosco direto.",
  },
}

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    description: "Página de contato oficial do projeto A Cura das Drogas",
    mainEntity: {
      "@type": "Organization",
      name: "A Cura das Drogas",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+34-673-01-75-00",
        contactType: "customer service",
        email: "colaboracao@acuradasdrogas.com.br",
        availableLanguage: ["Portuguese", "Spanish"],
      },
    },
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
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: "rgba(74, 159, 212, 0.22)" }}
        />
        <div
          aria-hidden
          className="absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full blur-[100px] pointer-events-none"
          style={{ background: "rgba(217, 74, 42, 0.12)" }}
        />

        <div className="relative container min-h-[420px] md:min-h-[500px] flex flex-col justify-end pb-12 md:pb-16 pt-32 md:pt-40 lg:pt-48">
          <div className="max-w-[760px] flex flex-col gap-5 md:gap-6 animate-fade-up">
            <div className="inline-flex self-start items-center gap-2 rounded-full px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
              <span className="text-[11px] font-medium text-white tracking-[0.14em] uppercase">
                Contato
              </span>
            </div>

            <h1 className="type-display text-white">
              Fala direto.
              <br />
              <span className="font-light text-sky-100">Sem rodeio.</span>
            </h1>

            <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-[560px]">
              Pedido de ajuda, dúvida sobre o projeto, parceria ou doação — o
              caminho é o mesmo. Escolha o canal que for mais cômodo pra você.
            </p>
          </div>
        </div>
      </section>

      {/* === Canais de contato + Form === */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Channels */}
            <div className="lg:col-span-5 flex flex-col gap-5 md:gap-6">
              <Reveal className="flex flex-col gap-5 p-7 md:p-8 rounded-[28px] bg-consejero-soft">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-consejero">
                  <HugeiconsIcon icon={WhatsappIcon} size={22} strokeWidth={1.8} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[20px] md:text-[22px] font-medium text-foreground tracking-tight">
                    WhatsApp direto com Isaac
                  </h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    Sem nome, sem julgamento, sem custo. Resposta dele mesmo.
                  </p>
                </div>
                <Button
                  asChild
                  className="self-start rounded-full h-12 px-6 bg-consejero hover:bg-consejero/90 text-consejero-foreground shadow-consejero gap-2 font-medium"
                >
                  <WaLink
                    href={`https://wa.me/${contacts.whatsapp}?text=Ol%C3%A1,%20vim%20do%20site!`}
                    source="contato"
                    intent="ajuda"
                  >
                    <HugeiconsIcon icon={WhatsappIcon} size={18} strokeWidth={2} />
                    Conversar agora
                  </WaLink>
                </Button>
              </Reveal>

              <Reveal delay={0.1} className="flex flex-col gap-5 p-7 md:p-8 rounded-[28px] bg-primary-50">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary">
                  <HugeiconsIcon icon={Mail01Icon} size={22} strokeWidth={1.8} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[20px] md:text-[22px] font-medium text-foreground tracking-tight">
                    Email
                  </h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    Parcerias institucionais, capelania, imprensa.
                  </p>
                </div>
                <a
                  href={`mailto:${contacts.email}`}
                  className="text-[15px] font-medium text-primary-800 hover:text-primary break-all"
                >
                  {contacts.email}
                </a>
              </Reveal>

              <Reveal delay={0.2} className="flex flex-col gap-4 p-7 rounded-[28px] bg-ocean text-white">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <HugeiconsIcon icon={Location01Icon} size={18} strokeWidth={1.8} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[15px] font-medium text-white">Onde estamos</p>
                    <p className="text-sm text-sky-100/80 leading-relaxed">
                      Florianópolis (Brasil) &amp; Espanha
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <HugeiconsIcon icon={Clock01Icon} size={18} strokeWidth={1.8} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[15px] font-medium text-white">Atendimento</p>
                    <p className="text-sm text-sky-100/80 leading-relaxed">
                      Segunda a sexta, 9h–18h (horário de Brasília)
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal className="lg:col-span-7 flex flex-col gap-6 p-7 md:p-10 rounded-[28px] bg-card border border-border">
              <div className="flex flex-col gap-2">
                <h2 className="type-h3 text-foreground">Prefere escrever?</h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  Preenche o formulário e a gente responde em até 48h.
                </p>
              </div>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* === CTA fechamento === */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="rounded-[28px] bg-sky-50 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-[560px]">
              <h3 className="type-h3 text-foreground">
                Quer ver mais antes de falar?
              </h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                Conheça o projeto e como sua doação vira livro na cela.
              </p>
            </div>
            <Button
              asChild
              className="self-start rounded-full h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-brand gap-2 font-medium shrink-0"
            >
              <Link href="/o-projeto">
                Conhecer o projeto
                <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
