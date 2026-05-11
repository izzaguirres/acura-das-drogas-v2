import { Reveal } from "@/components/reveal"

const stats = [
  {
    value: "10,77M",
    label: "Pessoas em instituições penais no mundo",
  },
  {
    value: "839 mil",
    label: "Encarcerados no Brasil — 3ª maior do mundo",
  },
  {
    value: "60 mil",
    label: "Encarcerados na Espanha",
  },
  {
    value: "30 anos",
    label: "Isaac no campo — antes do livro existir",
  },
]

export function StatsStrip() {
  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-5 max-w-[680px]">
            <span className="inline-flex self-start items-center gap-2 rounded-full px-3.5 py-2 bg-background border border-border">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-medium text-muted-foreground tracking-[0.14em] uppercase">
                Campo de missão
              </span>
            </span>
          </div>

          <Reveal className="relative rounded-[28px] overflow-hidden bg-ocean text-white p-10 lg:p-14">
            <div
              aria-hidden
              className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full blur-[80px]"
              style={{ background: "rgba(74, 159, 212, 0.20)" }}
            />
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 items-start">
              {stats.map((s, i) => (
                <div
                  key={s.value}
                  className={`flex flex-col gap-3 px-0 lg:px-8 ${
                    i > 0 ? "lg:border-l lg:border-white/10" : ""
                  }`}
                >
                  <div className="text-[40px] sm:text-[48px] lg:text-[58px] font-light text-white leading-[1] tracking-[-0.03em] whitespace-nowrap">
                    {s.value}
                  </div>
                  <p className="text-sm text-sky-100/90 leading-[1.45] max-w-[220px] min-h-[42px]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <p className="text-[11px] text-muted-foreground tracking-wide">
            Fonte: World Prison Brief — prisonstudies.org
          </p>
        </div>
      </div>
    </section>
  )
}
