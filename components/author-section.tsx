import Image from "next/image"
import { Reveal } from "@/components/reveal"

export function AuthorSection() {
  return (
    <>
      {/* === MOBILE === foto limpa em cima + content em fundo dark embaixo */}
      <section className="md:hidden flex flex-col bg-ocean text-white">
        {/* Foto com gradient fade pra ocean no rodapé — sem quebra visual */}
        <div className="relative w-full aspect-[3/4]">
          <Image
            src="/images/people/isaac.webp"
            alt="Isaac Amar"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={false}
          />
          <div
            aria-hidden
            className="absolute left-0 right-0 bottom-0 h-[55%] pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(15, 39, 72, 0) 0%, rgba(15, 39, 72, 0.45) 45%, rgba(15, 39, 72, 0.9) 80%, hsl(215 65% 17%) 100%)",
            }}
          />
        </div>

        {/* Content em fundo dark navy — continua direto sem quebra */}
        <div className="relative px-5 pt-2 pb-12 -mt-px">
          <Reveal className="flex flex-col gap-6">
            <div className="inline-flex self-start items-center gap-2 rounded-full px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
              <span className="text-[11px] font-medium text-white tracking-[0.14em] uppercase">
                30 anos de missão
              </span>
            </div>

            <blockquote className="type-h2 text-white">
              &ldquo;Acredito que não existe poço tão fundo onde a graça de Deus
              não possa alcançar. Minha missão não é apenas entregar um livro,
              mas uma ferramenta que pode serrar as grades da alma.&rdquo;
            </blockquote>

            <p className="text-base text-white/85 leading-relaxed">
              Antes do livro existir, foram 30 anos de campo. Joelhos no chão e
              olhos nos olhos — em comunidades, presídios e casas onde a
              clínica não chega e a teologia não fala.
            </p>

            <div className="flex flex-col gap-1 pt-2">
              <p className="text-[18px] font-medium text-white tracking-tight">
                Isaac Amar
              </p>
              <p className="text-sm text-white/70">
                Autor de A Cura das Drogas
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* === DESKTOP === full-bleed cinematográfico com text overlay à esquerda */}
      <section className="hidden md:block relative w-full overflow-hidden bg-ocean text-white">
        <Image
          src="/images/people/isaac2.webp"
          alt="Isaac Amar"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(15, 39, 72, 0.85) 0%, rgba(15, 39, 72, 0.5) 30%, rgba(15, 39, 72, 0.05) 55%, rgba(15, 39, 72, 0) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: "rgba(74, 159, 212, 0.18)" }}
        />

        <div className="relative container py-24 lg:py-32 min-h-[600px] lg:min-h-[720px] flex items-end">
          <Reveal className="max-w-[640px] flex flex-col gap-7 lg:gap-9">
            <div className="inline-flex self-start items-center gap-2 rounded-full px-3.5 py-2 bg-white/10 backdrop-blur-md border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
              <span className="text-[11px] font-medium text-white tracking-[0.14em] uppercase">
                30 anos de missão
              </span>
            </div>

            <blockquote className="type-h2 text-white">
              &ldquo;Acredito que não existe poço tão fundo onde a graça de Deus
              não possa alcançar. Minha missão não é apenas entregar um livro,
              mas uma ferramenta que pode serrar as grades da alma.&rdquo;
            </blockquote>

            <p className="text-base lg:text-lg text-white/85 leading-relaxed max-w-[560px]">
              Antes do livro existir, foram 30 anos de campo. Joelhos no chão e
              olhos nos olhos — em comunidades, presídios e casas onde a
              clínica não chega e a teologia não fala.
            </p>

            <div className="flex flex-col gap-1 pt-2">
              <p className="text-[18px] font-medium text-white tracking-tight">
                Isaac Amar
              </p>
              <p className="text-sm text-white/70">
                Autor de A Cura das Drogas
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
