import Image from "next/image"
import { Reveal } from "@/components/reveal"

type Step = {
  num: string
  title: string
  body: string
  src: string
  dark?: boolean
}

const steps: Step[] = [
  {
    num: "01",
    title: "Levantamento",
    body:
      "Identificamos a população encarcerada em cada comunidade e mapeamos as instituições que vão receber o livro.",
    src: "/images/people/levantamento.webp",
  },
  {
    num: "02",
    title: "Edição",
    body:
      "Imprimimos exemplares físicos com gráficas parceiras na Espanha e no Brasil — cada centavo prestado conta.",
    src: "/images/people/edicao.webp",
  },
  {
    num: "03",
    title: "Evangelização",
    body:
      "Distribuímos os livros em presídios e cadeias públicas, levando a mensagem de transformação a quem mais precisa.",
    src: "/images/people/evangelizacao.webp",
    dark: true,
  },
]

export function ActionPlan() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-16">
          <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
            <div className="flex flex-col gap-5 max-w-[680px]">
              <span className="inline-flex self-start items-center gap-2 rounded-full px-3.5 py-2 bg-background border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-medium text-muted-foreground tracking-[0.14em] uppercase">
                  Plano de Ação
                </span>
              </span>
              <h2 className="type-h2 text-foreground">
                Como o livro chega à cela.
              </h2>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed max-w-[360px]">
              Sua doação não some em estrutura. Vira tinta no papel — e papel
              na mão de quem precisa.
            </p>
          </Reveal>

          <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-6 overflow-x-auto overflow-y-hidden md:overflow-visible snap-x snap-mandatory md:snap-none scroll-pl-5 md:scroll-pl-0 touch-pan-x md:touch-auto -mx-5 md:mx-0 px-5 md:px-0 pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden" style={{ overscrollBehaviorX: "contain" }}>
            {steps.map((s) => (
              <article
                key={s.num}
                className={`shrink-0 md:shrink-0 w-[85%] sm:w-[55%] md:w-auto snap-start ${
                  s.dark
                    ? "group flex flex-col rounded-[28px] overflow-hidden bg-ocean text-white"
                    : "group flex flex-col rounded-[28px] overflow-hidden bg-card border border-border"
                }`}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={s.src}
                    alt={s.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col gap-6 flex-1">
                  <span
                    className={
                      s.dark
                        ? "text-[48px] font-light text-primary-400 leading-none tracking-[-0.04em]"
                        : "text-[48px] font-light text-primary leading-none tracking-[-0.04em]"
                    }
                  >
                    {s.num}
                  </span>
                  <div className="flex flex-col gap-2.5 mt-auto">
                    <h3
                      className={
                        s.dark
                          ? "text-[22px] font-medium text-white tracking-tight"
                          : "text-[22px] font-medium text-foreground tracking-tight"
                      }
                    >
                      {s.title}
                    </h3>
                    <p
                      className={
                        s.dark
                          ? "text-[15px] text-sky-100 leading-relaxed"
                          : "text-[15px] text-muted-foreground leading-relaxed"
                      }
                    >
                      {s.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
