import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, WhatsappIcon } from "@hugeicons/core-free-icons"
import { Reveal } from "@/components/reveal"
import { WaLink } from "@/components/wa-link"

export function FinalCta() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-14">
          <Reveal className="flex flex-col items-center text-center gap-5 max-w-[720px]">
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 bg-background border border-border">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-medium text-muted-foreground tracking-[0.14em] uppercase">
                Como participar
              </span>
            </span>
            <h2 className="type-h2 text-foreground">
              Dois caminhos. Um propósito.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="w-full max-w-[920px] grid md:grid-cols-2 gap-4 p-4 rounded-[32px] border border-border bg-card">
            {/* Preciso de ajuda */}
            <div className="flex flex-col gap-6 p-8 rounded-[20px] bg-consejero-soft min-h-[280px]">
              <span className="inline-flex self-start items-center gap-2 rounded-full px-3 py-1.5 bg-white border border-consejero-border">
                <span className="w-1.5 h-1.5 rounded-full bg-consejero" />
                <span className="text-[11px] font-medium text-consejero-deep tracking-[0.14em] uppercase">
                  Para você ou alguém
                </span>
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[28px] font-medium text-foreground tracking-[-0.02em] leading-[1.18]">
                  Preciso de ajuda
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  Você ou alguém que você ama. Fale direto com Isaac no
                  WhatsApp. Sem nome, sem julgamento, sem custo. Só conversa.
                </p>
              </div>
              <Button
                asChild
                className="mt-auto self-start rounded-full h-12 px-6 bg-consejero hover:bg-consejero/90 text-consejero-foreground shadow-consejero gap-2 font-medium"
              >
                <WaLink
                  href="https://wa.me/+34673017500?text=Ol%C3%A1,%20preciso%20de%20ajuda%20com%20uso%20de%20drogas."
                  source="final_cta"
                  intent="ajuda"
                >
                  <HugeiconsIcon icon={WhatsappIcon} size={18} strokeWidth={2} />
                  Conversar agora
                </WaLink>
              </Button>
            </div>

            {/* Quero ajudar */}
            <div className="flex flex-col gap-6 p-8 rounded-[20px] bg-primary-50 min-h-[280px]">
              <span className="inline-flex self-start items-center gap-2 rounded-full px-3 py-1.5 bg-white border border-sky-100">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-medium text-primary-800 tracking-[0.14em] uppercase">
                  Para o próximo
                </span>
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[28px] font-medium text-foreground tracking-[-0.02em] leading-[1.18]">
                  Quero ajudar
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  Cerca de R$ 30 imprime e entrega 1 livro dentro de uma cela.
                  Sua doação não some — vira tinta, papel e mensagem que serra
                  grades.
                </p>
              </div>
              <Button
                asChild
                className="mt-auto self-start rounded-full h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-brand gap-2 font-medium"
              >
                <Link href="/o-projeto">
                  Conhecer o projeto
                  <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
