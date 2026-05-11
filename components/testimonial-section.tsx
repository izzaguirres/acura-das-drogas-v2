import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import { StarIcon } from "@hugeicons/core-free-icons"
import { Reveal } from "@/components/reveal"

const featured = {
  src: "/images/people/capelao.jpg",
  name: "João Oliveira",
  role: "Capelão prisional",
  quote:
    "Em 15 anos de ministério, nunca vi um material conectar tão rápido com a realidade deles. Não é teologia distante — é vida prática. Cada exemplar doado vale ouro lá dentro.",
}

const compact = {
  initials: "CS",
  name: "Carlos Silva",
  role: "Ex-detento, líder comunitário",
  quote:
    "Eu achava que meu destino estava selado pelas grades. Este livro me deu uma chave para abrir a prisão que existia dentro da minha mente.",
}

export function TestimonialSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-sky-50">
      <div className="container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <Reveal className="flex flex-col gap-5 max-w-[640px]">
            <span className="inline-flex self-start items-center gap-2 rounded-full px-3.5 py-2 bg-white border border-sky-100">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-medium text-primary-800 tracking-[0.14em] uppercase">
                Testemunhos reais
              </span>
            </span>
            <h2 className="type-h2 text-foreground">
              Vidas que o livro alcançou.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Mais de 500 vidas em 30 anos.{" "}
              <span className="text-foreground">Duas delas falam aqui.</span>
            </p>
          </Reveal>

          <div className="flex lg:grid lg:grid-cols-5 gap-5 lg:gap-6 items-stretch overflow-x-auto overflow-y-hidden lg:overflow-visible snap-x snap-mandatory lg:snap-none scroll-pl-5 lg:scroll-pl-0 touch-pan-x lg:touch-auto -mx-5 lg:mx-0 px-5 lg:px-0 pb-2 lg:pb-0 [&::-webkit-scrollbar]:hidden" style={{ overscrollBehaviorX: "contain" }}>
            {/* Featured testimonial — 60% width */}
            <article className="shrink-0 lg:shrink-0 w-[88%] sm:w-[65%] lg:w-auto snap-start lg:col-span-3 flex flex-col rounded-[28px] bg-card border border-border p-10 lg:p-12">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden className="mb-8">
                <path
                  d="M9.5 7.5c-1.6 0-2.9.7-3.9 2.1S4 12.6 4 14.4c0 1.4.4 2.5 1.2 3.3.8.8 1.8 1.2 3 1.2 1.1 0 2-.4 2.7-1.1.7-.7 1.1-1.7 1.1-2.9 0-1.1-.3-2-.9-2.7-.6-.7-1.4-1-2.4-1-.4 0-.7.1-.9.2-.2.1-.3.1-.4.1.1-.7.4-1.4.8-2 .5-.7 1-1.1 1.7-1.4l-.4-.6zm10 0c-1.6 0-2.9.7-3.9 2.1S14 12.6 14 14.4c0 1.4.4 2.5 1.2 3.3.8.8 1.8 1.2 3 1.2 1.1 0 2-.4 2.7-1.1.7-.7 1.1-1.7 1.1-2.9 0-1.1-.3-2-.9-2.7-.6-.7-1.4-1-2.4-1-.4 0-.7.1-.9.2-.2.1-.3.1-.4.1.1-.7.4-1.4.8-2 .5-.7 1-1.1 1.7-1.4l-.4-.6z"
                  fill="hsl(var(--primary))"
                  fillOpacity="0.18"
                />
              </svg>
              <blockquote className="text-[24px] sm:text-[28px] font-light text-foreground leading-[1.4] tracking-[-0.02em] mb-8 flex-grow">
                {featured.quote}
              </blockquote>
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={featured.src}
                    alt={featured.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-base font-medium text-foreground tracking-tight">
                    {featured.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {featured.role}
                  </p>
                </div>
              </div>
            </article>

            {/* Compact testimonial — 40% width, with stars */}
            <article className="shrink-0 lg:shrink-0 w-[88%] sm:w-[65%] lg:w-auto snap-start lg:col-span-2 flex flex-col rounded-[28px] bg-card border border-border p-10 lg:p-10">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <HugeiconsIcon
                    key={i}
                    icon={StarIcon}
                    size={16}
                    strokeWidth={2}
                    className="text-amber-400"
                    style={{ fill: "currentColor" }}
                  />
                ))}
              </div>
              <blockquote className="text-[17px] text-foreground leading-[1.65] mb-8 flex-grow">
                &ldquo;{compact.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-sm font-medium text-primary-800 shrink-0">
                  {compact.initials}
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-medium text-foreground tracking-tight">
                    {compact.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{compact.role}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
