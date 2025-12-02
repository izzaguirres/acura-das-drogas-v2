import { HeroBook } from "@/components/hero-book"
import { VideoIntro } from "@/components/video-intro"
import { StatsStrip } from "@/components/stats-strip"
import { BookHighlights } from "@/components/book-highlights"
import { HumanImpactSection } from "@/components/human-impact-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { AuthorSection } from "@/components/author-section"
import { FinalCta } from "@/components/final-cta"
import { ScriptureQuote } from "@/components/scripture-quote"
import { scriptures } from "@/content/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Início | A Cura das Drogas",
  description: "Projeto social e evangelístico que leva o livro 'A Cura das Drogas' para presídios. Uma mensagem de libertação, fé e reconstrução de vidas.",
  openGraph: {
    title: "A Cura das Drogas - Transformando Vidas nos Presídios",
    description: "Conheça o projeto que já impactou mais de 500 vidas. Distribuição gratuita de livros, apoio espiritual e reintegração social.",
    images: [
      {
        url: "/images/bookhand.png",
        width: 800,
        height: 600,
        alt: "Mão segurando o livro A Cura das Drogas",
      },
    ],
  }
}

export default function HomePage() {
  // JSON-LD para Organização e Website
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://acuradasdrogas.com/#organization",
        "name": "A Cura das Drogas",
        "url": "https://acuradasdrogas.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://acuradasdrogas.com/images/logo.png",
          "width": 112,
          "height": 112
        },
        "sameAs": [
          "https://instagram.com/acuradasdrogas",
          "https://facebook.com/acuradasdrogas"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+34-673-01-75-00",
          "contactType": "customer service",
          "areaServed": ["BR", "ES"],
          "availableLanguage": ["Portuguese", "Spanish"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://acuradasdrogas.com/#website",
        "url": "https://acuradasdrogas.com",
        "name": "A Cura das Drogas",
        "description": "Projeto de evangelização em presídios e recuperação de dependentes químicos.",
        "publisher": {
          "@id": "https://acuradasdrogas.com/#organization"
        },
        "inLanguage": "pt-BR"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroBook />
      <VideoIntro />
      <BookHighlights />
      <HumanImpactSection />
      <StatsStrip />
      <TestimonialSection />

      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {scriptures.map((scripture, index) => (
                <ScriptureQuote key={index} text={scripture.text} reference={scripture.reference} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <AuthorSection />
      <FinalCta />
    </>
  )
}