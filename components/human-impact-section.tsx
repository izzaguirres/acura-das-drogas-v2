import Image from "next/image"
import { Reveal } from "@/components/reveal"

type Audience = {
  title: string
  body: string
  src: string
}

const audiences: Audience[] = [
  {
    title: "Encarcerados",
    body:
      "Você não é o crime que cometeu. Esse livro chega na cela porque alguém acreditou que ainda existe chão por baixo dos seus pés.",
    src: "/images/people/encarcerados.jpg",
  },
  {
    title: "Familiares",
    body:
      "Você fez tudo que sabia fazer. Já não sabe mais o que dizer. Esse livro é o que dar quando as palavras acabaram.",
    src: "/images/people/familiares.webp",
  },
  {
    title: "Líderes & Capelães",
    body:
      "Você precisa de material que conecta na primeira página. Não teologia distante — vida prática que cabe na rotina da unidade.",
    src: "/images/people/lideres.webp",
  },
]

export function HumanImpactSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-16">
          <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
            <div className="flex flex-col gap-5 max-w-[640px]">
              <span className="inline-flex self-start items-center gap-2 rounded-full px-3.5 py-2 bg-background border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-medium text-muted-foreground tracking-[0.14em] uppercase">
                  Pra quem o livro é
                </span>
              </span>

              <h2 className="type-h2 text-foreground">
                Os esquecidos
                <br className="hidden md:block" />
                <span className="text-primary"> têm endereço.</span>
              </h2>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed max-w-[360px]">
              Por trás de cada estatística, uma história. E em cada história,
              o endereço onde esse livro precisa chegar.
            </p>
          </Reveal>

          <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-6 overflow-x-auto overflow-y-hidden md:overflow-visible snap-x snap-mandatory md:snap-none scroll-pl-5 md:scroll-pl-0 touch-pan-x md:touch-auto -mx-5 md:mx-0 px-5 md:px-0 pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden" style={{ overscrollBehaviorX: "contain" }}>
            {audiences.map((a) => (
              <article
                key={a.title}
                className="shrink-0 md:shrink-0 w-[85%] sm:w-[55%] md:w-auto snap-start group h-full flex flex-col bg-card rounded-[28px] border border-border overflow-hidden transition-shadow hover:shadow-lifted"
              >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={a.src}
                      alt={a.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7 lg:p-8 flex flex-col gap-2.5">
                    <h3 className="text-[22px] font-medium text-foreground tracking-tight">
                      {a.title}
                    </h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">
                      {a.body}
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
