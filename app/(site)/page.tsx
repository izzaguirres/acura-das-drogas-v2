import { HeroBook } from "@/components/hero-book"
import { VideoIntro } from "@/components/video-intro"
import { StatsStrip } from "@/components/stats-strip"
import { BookHighlights } from "@/components/book-highlights"
import { HumanImpactSection } from "@/components/human-impact-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { DonationBanner } from "@/components/donation-banner"
import { AuthorSection } from "@/components/author-section"
import { ScriptureQuote } from "@/components/scripture-quote"
import { scriptures } from "@/content/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <HeroBook />
      <VideoIntro />
      <BookHighlights />
      <HumanImpactSection />
      <StatsStrip />
      <TestimonialSection />

      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {scriptures.map((scripture, index) => (
                <ScriptureQuote key={index} text={scripture.text} reference={scripture.reference} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <AuthorSection />
      <DonationBanner />

      <section id="comprar-livro" className="py-16 wave-pattern">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Adquira seu exemplar</h2>
              <p className="text-lg text-muted-foreground">
                Transforme sua vida ou ajude alguém a encontrar o caminho da liberdade
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/+34673017500?text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20livro%20A%20Cura%20das%20Drogas!" target="_blank" rel="noopener noreferrer">
                  Comprar Livro
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                <Link href="/doar">Fazer uma Doação</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
