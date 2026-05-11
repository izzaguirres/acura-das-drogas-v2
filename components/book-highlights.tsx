import { Reveal } from "@/components/reveal"

export function BookHighlights() {
  const pillars = [
    {
      num: "01",
      title: "Você não é o que disseram que você é.",
      body:
        "A medicina rotulou o vício como doença sem cura. A culpa virou cárcere. Esse livro existe pra quebrar esse rótulo — antes de qualquer outra coisa.",
    },
    {
      num: "02",
      title: "Anos de tratamento. Mais recaídas.",
      body:
        "Já tentou clínica, AA, igreja, conselho de família. Talvez tudo. Esse livro propõe o que esses caminhos quase nunca tocam: a raiz espiritual do vazio.",
    },
    {
      num: "03",
      title: "Sete etapas. Sem recaídas. Sem remédios.",
      body:
        "Não é teoria de gabinete nem retórica religiosa. É um manual de cabeceira escrito por quem viveu 30 anos no campo — e viu acontecer.",
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-20">
          {/* Header centralizado */}
          <Reveal className="flex flex-col items-center text-center gap-5 max-w-[820px] mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 bg-background border border-border">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-medium text-muted-foreground tracking-[0.14em] uppercase">
                Por que esse livro existe
              </span>
            </span>

            <h2 className="type-h2 text-foreground">
              Vício não é doença incurável.{" "}
              <br className="hidden md:block" />
              <span className="text-primary">É desordem espiritual curável.</span>
            </h2>
          </Reveal>

          {/* 3 pillars como cards numerados, full container width */}
          <div className="flex md:grid md:grid-cols-3 gap-5 lg:gap-6 overflow-x-auto overflow-y-hidden md:overflow-visible snap-x snap-mandatory md:snap-none scroll-pl-5 md:scroll-pl-0 touch-pan-x md:touch-auto -mx-5 md:mx-0 px-5 md:px-0 pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden" style={{ overscrollBehaviorX: "contain" }}>
            {pillars.map((p) => (
              <article
                key={p.num}
                className="shrink-0 md:shrink-0 w-[85%] sm:w-[55%] md:w-auto snap-start group h-full flex flex-col gap-7 p-8 lg:p-10 rounded-[28px] bg-card border border-border transition-all duration-500 hover:border-primary/30 hover:shadow-lifted"
              >
                  <span className="text-[40px] lg:text-[48px] font-light text-primary leading-none tracking-[-0.04em]">
                    {p.num}
                  </span>
                  <div className="flex flex-col gap-3 mt-auto">
                    <h3 className="text-[20px] lg:text-[22px] font-medium text-foreground tracking-tight leading-[1.3]">
                      {p.title}
                    </h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">
                      {p.body}
                    </p>
                  </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
