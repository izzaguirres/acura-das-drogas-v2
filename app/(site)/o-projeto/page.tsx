import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FinalCta } from "@/components/final-cta"
import { Reveal } from "@/components/reveal"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, WhatsappIcon } from "@hugeicons/core-free-icons"
import { WaLink } from "@/components/wa-link"

export const metadata: Metadata = {
  title: "O Projeto | Missão de Evangelização Carcerária",
  description:
    "Há 30 anos levando o livro A Cura das Drogas para presídios no Brasil e na Espanha. Conheça a missão, o plano de ação e como participar.",
  keywords: [
    "missão em presídios",
    "projeto cura das drogas",
    "evangelização prisional",
    "voluntariado prisões",
    "Isaac Amar",
  ],
  openGraph: {
    title: "Projeto A Cura das Drogas — desde 1994",
    description:
      "Levando uma mensagem de transformação para quem o sistema esqueceu.",
    images: [
      {
        url: "/images/people/evangelizacao.webp",
        width: 1200,
        height: 630,
        alt: "Projeto A Cura das Drogas",
      },
    ],
  },
}

// TODO: substituir pelos dados reais que o Isaac tiver — provisório baseado no PDF.
const impactStats = [
  { value: "500+", label: "Livros já entregues em presídios" },
  { value: "2", label: "Países atendidos" },
  { value: "30 anos", label: "Atuando no campo" },
  { value: "100%", label: "Distribuição gratuita" },
]

// TODO: confirmar lista real de cidades/unidades com Isaac
const reachLocations = {
  brasil: ["Florianópolis", "São Paulo", "Rio de Janeiro", "Porto Alegre"],
  espanha: ["Madrid", "Ibiza", "Barcelona"],
}

const partnerPresses = [
  {
    name: "Punto Rojo Libros",
    country: "Espanha",
    flag: "🇪🇸",
    role: "Gráfica oficial das edições em espanhol — Madrid",
  },
  {
    name: "Maistype Gráfica",
    country: "Brasil",
    flag: "🇧🇷",
    role: "Gráfica oficial das edições em português — São Paulo",
  },
]

const ways = [
  {
    title: "Colabore",
    body: "Sua doação imprime e leva o livro pra dentro de presídios. Cerca de R$ 30 financia 1 exemplar entregue.",
    cta: "Doar agora",
    href: "/doar",
    primary: true,
  },
  {
    title: "Ore",
    body: "A oração é parte da missão. Interceda pelas pessoas encarceradas e pelo Isaac que vai até onde a clínica não chega.",
    cta: "Acompanhar no Instagram",
    href: "https://www.instagram.com/acuradasdrogas",
    primary: false,
  },
  {
    title: "Engaje-se",
    body: "Capelão, líder de igreja, voluntário. Se você tem acesso a um presídio que precisa receber, fala com a gente.",
    cta: "Falar no WhatsApp",
    href: "https://wa.me/+34673017500?text=Ol%C3%A1,%20gostaria%20de%20engajar%20com%20o%20projeto.",
    primary: false,
  },
]

const journey = [
  {
    num: "01",
    title: "Identificar",
    body: "Mapeamos a unidade prisional certa — não a maior, a que mais precisa. Buscamos quem vai receber o livro com peso.",
    src: "/images/people/levantamento.webp",
  },
  {
    num: "02",
    title: "Imprimir",
    body: "Trabalho com gráficas parceiras na Espanha (Punto Rojo) e no Brasil (Maistype). Edições idênticas, custo unitário transparente.",
    src: "/images/people/edicao.webp",
  },
  {
    num: "03",
    title: "Entregar pessoalmente",
    body: "O livro chega na mão de quem precisa, não no portão da unidade. Sem caixa anônima, sem despacho frio. Olho no olho, livro na mão.",
    src: "/images/people/evangelizacao.webp",
  },
]

export default function ProjectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "A Cura das Drogas",
    url: "https://acuradasdrogas.com/o-projeto",
    logo: "https://acuradasdrogas.com/images/logo.png",
    description:
      "Projeto social do Isaac Amar — desde 1994 levando esperança a quem está atrás das grades, no Brasil e na Espanha.",
    foundingDate: "1994",
    areaServed: ["BR", "ES"],
    knowsAbout: ["Reabilitação de Drogas", "Capelania Prisional", "Apoio Familiar"],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* === HERO === */}
      <section className="relative w-full overflow-hidden -mt-[76px] lg:-mt-[88px] bg-ocean">
        <Image
          src="/images/people/evangelizacao.webp"
          alt="Distribuição do livro em presídios"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center -z-20"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(15, 39, 72, 0.55) 0%, rgba(15, 39, 72, 0.7) 60%, rgba(15, 39, 72, 0.95) 100%)",
          }}
        />

        <div className="relative container min-h-[520px] md:min-h-[620px] lg:min-h-[680px] flex flex-col justify-end pb-12 md:pb-16 lg:pb-20 pt-32 md:pt-40 lg:pt-48">
          <div className="max-w-[760px] flex flex-col gap-5 md:gap-7 animate-fade-up">
            <div className="inline-flex self-start items-center gap-2 rounded-full px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
              <span className="text-[11px] font-medium text-white tracking-[0.14em] uppercase">
                O Projeto
              </span>
            </div>

            <h1 className="type-display text-white">
              Onde a clínica não chega,
              <br />
              <span className="font-light text-sky-100">esse livro chega.</span>
            </h1>

            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-[600px]">
              Há 30 anos, Isaac Amar leva uma mensagem de transformação para
              dentro de presídios, comunidades e casas onde a sociedade prefere
              não olhar. O livro é a ferramenta — o projeto é o caminho até
              quem precisa.
            </p>
          </div>
        </div>
      </section>

      {/* === Como nasceu === */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-5 flex flex-col gap-5">
              <span className="inline-flex self-start items-center gap-2 rounded-full px-3.5 py-2 bg-background border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-medium text-muted-foreground tracking-[0.14em] uppercase">
                  Como nasceu
                </span>
              </span>
              <h2 className="type-h2 text-foreground">
                30 anos antes do livro existir.
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7 flex flex-col gap-5 text-[16px] md:text-[17px] text-muted-foreground leading-relaxed">
              <p>
                Em meados de <strong className="text-foreground">1994</strong>,
                começamos a acolher pessoas em situação de vulnerabilidade
                social e vício em drogas. Eram joelhos no chão, olhos nos
                olhos, em comunidades, presídios e casas de família.
              </p>
              <p>
                Ao longo de duas décadas, ouvindo histórias, perdendo pessoas,
                vendo outras se erguerem, ficou claro o que faltava: um caminho
                que não tratasse o vício como sentença, nem como doença sem
                cura. Algo que reconhecesse a{" "}
                <strong className="text-foreground">
                  raiz espiritual do vazio
                </strong>{" "}
                que alimenta o uso.
              </p>
              <p>
                Desse acúmulo nasceu o livro <em>A Cura das Drogas</em>. Não é
                teoria de gabinete — é manual de cabeceira escrito por quem
                viveu o campo. Hoje o projeto entrega esses livros, gratuita e
                presencialmente, dentro de unidades prisionais no Brasil e na
                Espanha.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* === Como o livro chega à cela (narrativa) === */}
      <section className="py-16 md:py-24 lg:py-32 bg-sky-50">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-14">
            <Reveal className="flex flex-col gap-5 max-w-[640px]">
              <span className="inline-flex self-start items-center gap-2 rounded-full px-3.5 py-2 bg-white border border-sky-100">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-medium text-primary-800 tracking-[0.14em] uppercase">
                  O caminho
                </span>
              </span>
              <h2 className="type-h2 text-foreground">
                Como o livro chega à cela.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Três etapas executadas na mão. Sem terceirização da última milha
                — quem manda imprimir é quem vai entregar.
              </p>
            </Reveal>

            <div className="flex flex-col gap-12 md:gap-16">
              {journey.map((step, i) => (
                <Reveal
                  key={step.num}
                  delay={0.05}
                  className={`grid md:grid-cols-12 gap-6 md:gap-12 items-center ${
                    i % 2 === 1 ? "md:[direction:rtl]" : ""
                  }`}
                >
                  <div className="md:col-span-6 [direction:ltr]">
                    <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden">
                      <Image
                        src={step.src}
                        alt={step.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 [direction:ltr] flex flex-col gap-4">
                    <span className="text-[40px] md:text-[48px] font-light text-primary leading-none tracking-[-0.04em]">
                      {step.num}
                    </span>
                    <h3 className="text-[24px] md:text-[28px] font-medium text-foreground tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[16px] text-muted-foreground leading-relaxed max-w-[480px]">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === Onde já chegamos === */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-5 flex flex-col gap-5">
              <span className="inline-flex self-start items-center gap-2 rounded-full px-3.5 py-2 bg-background border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-medium text-muted-foreground tracking-[0.14em] uppercase">
                  Alcance
                </span>
              </span>
              <h2 className="type-h2 text-foreground">Onde já chegamos.</h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-[440px]">
                Cada cidade abaixo tem unidades prisionais que receberam o livro
                — fisicamente, na mão de quem precisava.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col gap-5 p-7 md:p-8 rounded-[24px] bg-card border border-border">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇧🇷</span>
                  <h3 className="text-[18px] font-medium text-foreground tracking-tight">
                    Brasil
                  </h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {reachLocations.brasil.map((c) => (
                    <li
                      key={c}
                      className="text-[15px] text-muted-foreground py-1.5 px-3 rounded-full bg-sky-50 inline-block"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-5 p-7 md:p-8 rounded-[24px] bg-card border border-border">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇪🇸</span>
                  <h3 className="text-[18px] font-medium text-foreground tracking-tight">
                    Espanha
                  </h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {reachLocations.espanha.map((c) => (
                    <li
                      key={c}
                      className="text-[15px] text-muted-foreground py-1.5 px-3 rounded-full bg-sky-50 inline-block"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-[12px] text-muted-foreground italic">
                * Lista em consolidação com Isaac. Em breve com unidades nominais
                e datas de entrega.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* === Impacto (stats próprios do projeto) === */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container">
          <Reveal className="relative rounded-[28px] overflow-hidden bg-ocean text-white p-10 lg:p-14">
            <div
              aria-hidden
              className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full blur-[80px]"
              style={{ background: "rgba(74, 159, 212, 0.20)" }}
            />
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 items-start">
              {impactStats.map((s, i) => (
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
        </div>
      </section>

      {/* === Gráficas parceiras === */}
      <section className="py-16 md:py-24 bg-sky-50">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-12">
            <Reveal className="flex flex-col gap-5 max-w-[640px]">
              <span className="inline-flex self-start items-center gap-2 rounded-full px-3.5 py-2 bg-white border border-sky-100">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-medium text-primary-800 tracking-[0.14em] uppercase">
                  Quem imprime
                </span>
              </span>
              <h2 className="type-h2 text-foreground">
                Gráficas parceiras nominais.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Não usamos serviço genérico. Cada exemplar sai de uma das duas
                gráficas abaixo — com nome, com responsável, com número.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {partnerPresses.map((p, i) => (
                <Reveal
                  key={p.name}
                  delay={i * 0.1}
                  className="flex flex-col gap-5 p-8 md:p-10 rounded-[24px] bg-card border border-border"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{p.flag}</span>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-medium text-muted-foreground tracking-[0.14em] uppercase">
                        {p.country}
                      </span>
                      <h3 className="text-[20px] md:text-[22px] font-medium text-foreground tracking-tight leading-tight">
                        {p.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    {p.role}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === 3 formas de participar === */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-14">
            <Reveal className="flex flex-col gap-5 max-w-[640px]">
              <span className="inline-flex self-start items-center gap-2 rounded-full px-3.5 py-2 bg-background border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-medium text-muted-foreground tracking-[0.14em] uppercase">
                  Como participar
                </span>
              </span>
              <h2 className="type-h2 text-foreground">
                Três formas de fazer parte.
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {ways.map((w, i) => (
                <Reveal
                  key={w.title}
                  delay={i * 0.12}
                  className="flex flex-col gap-6 p-8 lg:p-10 rounded-[28px] bg-card border border-border"
                >
                  <h3 className="text-[24px] md:text-[28px] font-medium text-foreground tracking-[-0.02em] leading-[1.18]">
                    {w.title}
                  </h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed flex-grow">
                    {w.body}
                  </p>
                  <Button
                    asChild
                    className={
                      w.primary
                        ? "self-start rounded-full h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-brand gap-2 font-medium"
                        : "self-start rounded-full h-12 px-6 bg-foreground hover:bg-foreground/90 text-background gap-2 font-medium"
                    }
                  >
                    {w.href.startsWith("https://wa.me") ? (
                      <WaLink href={w.href} source="o_projeto" intent="engajar">
                        <HugeiconsIcon icon={WhatsappIcon} size={18} strokeWidth={2} />
                        {w.cta}
                      </WaLink>
                    ) : w.href.startsWith("http") ? (
                      <a href={w.href} target="_blank" rel="noopener noreferrer">
                        {w.cta}
                        <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
                      </a>
                    ) : (
                      <Link href={w.href}>
                        {w.cta}
                        <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
                      </Link>
                    )}
                  </Button>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === Bifurcação dual CTA === */}
      <FinalCta />
    </>
  )
}
