import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, WhatsappIcon } from "@hugeicons/core-free-icons"
import { WaLink } from "@/components/wa-link"

export function HeroBook() {
  return (
    <section className="relative w-full overflow-hidden -mt-[76px] lg:-mt-[88px]">
      {/* Photo */}
      <Image
        src="/images/people/hero.webp"
        alt="A Cura das Drogas — transformação"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center] md:object-center -z-20"
      />
      {/* Dark gradient overlay — vertical em mobile, horizontal em desktop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(15, 39, 72, 0.35) 0%, rgba(15, 39, 72, 0.7) 60%, rgba(15, 39, 72, 0.92) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(15, 39, 72, 0.78) 0%, rgba(15, 39, 72, 0.5) 35%, rgba(15, 39, 72, 0.15) 60%, rgba(15, 39, 72, 0) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute left-0 right-0 bottom-0 h-72 -z-10"
        style={{
          background: "linear-gradient(180deg, rgba(15, 39, 72, 0) 0%, rgba(15, 39, 72, 0.55) 100%)",
        }}
      />

      <div className="relative container min-h-[640px] md:min-h-[720px] lg:min-h-[820px] flex flex-col justify-end pb-12 md:pb-16 lg:pb-24 pt-32 md:pt-40 lg:pt-52">
        <div className="max-w-[640px] flex flex-col gap-5 md:gap-7 lg:gap-9 animate-fade-up">
          <div className="inline-flex self-start items-center gap-2 rounded-full px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            <span className="text-[11px] font-medium text-white tracking-[0.14em] uppercase">
              Desde 1994
            </span>
          </div>

          <h1 className="type-display text-white">
            A cura existe
            <br />
            e é <span className="font-light text-sky-100">para todos.</span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-[560px]">
            Para quem está perdido no vício. E para quem ama alguém preso por
            ele. Há 30 anos, Isaac Amar alcança vidas onde a clínica não chega
            — atrás das grades e dentro de casa.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Button
              asChild
              size="lg"
              className="rounded-full h-14 px-7 bg-consejero hover:bg-consejero/90 text-consejero-foreground shadow-consejero font-medium gap-2.5 transition-all hover:-translate-y-0.5"
            >
              <WaLink
                href="https://wa.me/+34673017500?text=Ol%C3%A1,%20preciso%20de%20ajuda%20com%20uso%20de%20drogas."
                source="hero"
                intent="ajuda"
              >
                <HugeiconsIcon icon={WhatsappIcon} size={18} strokeWidth={2} />
                Preciso de ajuda
              </WaLink>
            </Button>

            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full h-14 px-7 bg-white hover:bg-white/95 text-ocean shadow-lifted font-medium gap-2.5 transition-all hover:-translate-y-0.5"
            >
              <Link href="/o-projeto">
                Quero ajudar
                <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-4 md:gap-6 pt-5 md:pt-6 border-t border-white/15 mt-2">
            <div className="flex flex-col gap-0.5">
              <div className="text-xl md:text-2xl font-medium text-white tracking-tight">500+</div>
              <div className="text-[11px] md:text-xs text-white/70">Vidas impactadas</div>
            </div>
            <div className="w-px h-9 md:h-10 bg-white/15" />
            <div className="flex flex-col gap-0.5">
              <div className="text-xl md:text-2xl font-medium text-white tracking-tight">2 países</div>
              <div className="text-[11px] md:text-xs text-white/70">Brasil + Espanha</div>
            </div>
            <div className="w-px h-9 md:h-10 bg-white/15" />
            <div className="flex flex-col gap-0.5">
              <div className="text-xl md:text-2xl font-medium text-white tracking-tight">100%</div>
              <div className="text-[11px] md:text-xs text-white/70">Gratuita</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
