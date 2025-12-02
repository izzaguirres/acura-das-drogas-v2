import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Heart, Users, Star, Check, ShoppingCart, BookMarked, Feather } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "O Livro - A Cura das Drogas | Guia de Recuperação",
  description: "O livro A Cura das Drogas é um manual prático e espiritual para vencer o vício. Best-seller em presídios, com linguagem acessível e transformadora.",
  keywords: [
    "livro cura das drogas",
    "livro sobre vício em drogas",
    "leitura para presidiários",
    "livro cristão recuperação",
    "manual de sobrevivência espiritual",
    "comprar livro a cura das drogas"
  ],
  openGraph: {
    title: "Livro: A Cura das Drogas | Transformação Pessoal",
    description: "Descubra o livro que está libertando mentes aprisionadas. Uma abordagem de fé, amor e disciplina para vencer a dependência química.",
    type: "book",
    isbn: "978-65-00-00000-0", // Placeholder ISBN
    images: [
      {
        url: "/images/livro.png",
        width: 600,
        height: 800,
        alt: "Capa do Livro A Cura das Drogas",
      },
    ],
  }
}

export default function BookPage() {
  const chapters = [
    { 
        title: "O Chamado à Transformação", 
        subtitle: "Capítulo 1",
        description: "Descobrindo que a mudança começa com uma decisão interna e pessoal.",
        color: "bg-blue-100 text-blue-600"
    },
    { 
        title: "Fundamentos da Fé", 
        subtitle: "Capítulo 2",
        description: "Construindo uma base espiritual sólida para suportar as tempestades da recuperação.",
        color: "bg-indigo-100 text-indigo-600"
    },
    { 
        title: "Rompendo as Correntes", 
        subtitle: "Capítulo 3",
        description: "Estratégias práticas para identificar gatilhos e vencer o vício um dia de cada vez.",
        color: "bg-rose-100 text-rose-600"
    },
    { 
        title: "Uma Nova Vida", 
        subtitle: "Capítulo 4",
        description: "Como se reintegrar à sociedade, restaurar relacionamentos e ajudar outros.",
        color: "bg-amber-100 text-amber-600"
    },
  ]

  const features = [
      {
          icon: BookOpen,
          title: "Leitura Acessível",
          text: "Linguagem simples e direta, conectando com quem tem pouca escolaridade ou hábito de leitura."
      },
      {
          icon: Heart,
          title: "Abordagem Empática",
          text: "Escrito com amor e sem julgamentos, entendendo a dor de quem sofre com o vício."
      },
       {
          icon: Star,
          title: "Foco Prático",
          text: "Não é apenas teoria. O livro oferece passos concretos para a mudança de vida diária."
      },
  ]

  // JSON-LD específico para Livro (Produto)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "A Cura das Drogas",
    "author": {
      "@type": "Person",
      "name": "Isac Gilberto Ricardo"
    },
    "url": "https://acuradasdrogas.com/o-livro",
    "description": "Um manual de sobrevivência espiritual e prática para quem deseja vencer o vício das drogas e transformar sua vida.",
    "inLanguage": "pt-BR",
    "genre": "Autoajuda / Religioso",
    "image": "https://acuradasdrogas.com/images/livro.png",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "35.00", // Preço fictício/exemplo, ideal confirmar
      "priceCurrency": "BRL",
      "url": "https://wa.me/+34673017500"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  }

  return (
    <div className="bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-[70%] bg-slate-900 rounded-b-[3rem] lg:rounded-b-[5rem]" />
         
         <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 text-center lg:text-left">
                    <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                        <Star className="mr-2 h-3 w-3 fill-yellow-400 text-yellow-400" />
                        Best-seller em presídios
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                        Um manual de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">sobrevivência espiritual</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        "A Cura das Drogas" não promete mágica, promete um caminho. Um guia prático para quem busca liberdade através da fé.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20" asChild>
                            <a href="https://wa.me/+34673017500?text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20livro%20A%20Cura%20das%20Drogas!" target="_blank" rel="noopener noreferrer">
                                <ShoppingCart className="mr-2 h-5 w-5" />
                                Adquirir Livro
                            </a>
                        </Button>
                         <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm" asChild>
                             <Link href="#capitulos">
                                <BookMarked className="mr-2 h-5 w-5" />
                                Ver Capítulos
                             </Link>
                        </Button>
                    </div>
                </div>

                <div className="relative flex justify-center lg:justify-end">
                     <div className="relative w-[280px] md:w-[350px] lg:w-[400px] aspect-[3/4] rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
                        {/* Glow effect behind book */}
                        <div className="absolute inset-0 bg-blue-500/30 blur-[60px] rounded-full" />
                        <Image
                            src="/images/livro.png"
                            alt="Capa do livro A Cura das Drogas"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                     </div>
                </div>
            </div>
         </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-20 -mt-20 pb-20">
          <div className="container">
              <div className="grid md:grid-cols-3 gap-6">
                  {features.map((feature, idx) => (
                      <Card key={idx} className="p-8 rounded-2xl shadow-xl border-none bg-white">
                          <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                              <feature.icon className="w-6 h-6 text-slate-900" />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                          <p className="text-slate-500">{feature.text}</p>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

      {/* Content Preview (Chapters) */}
      <section id="capitulos" className="py-20">
          <div className="container">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">O que você vai encontrar</h2>
                  <p className="text-lg text-slate-500">Uma jornada estruturada em quatro pilares fundamentais</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {chapters.map((chapter, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 group">
                          <div className="flex items-start gap-6">
                              <div className={`w-14 h-14 ${chapter.color} rounded-2xl flex items-center justify-center text-xl font-bold shrink-0 group-hover:scale-110 transition-transform`}>
                                  {idx + 1}
                              </div>
                              <div>
                                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1 block">{chapter.subtitle}</span>
                                  <h3 className="text-xl font-bold text-slate-900 mb-3">{chapter.title}</h3>
                                  <p className="text-slate-500 leading-relaxed">{chapter.description}</p>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Audience Section */}
      <section className="py-20 bg-white border-t border-slate-100">
          <div className="container">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                   <div className="order-2 lg:order-1 flex justify-center items-center">
                       <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                           <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply z-10 pointer-events-none" />
                           <Image 
                                src="/images/grupo.png" 
                                alt="Grupo de pessoas impactadas pelo projeto" 
                                width={600}
                                height={450}
                                className="object-cover w-full h-auto" 
                           />
                       </div>
                   </div>
                   
                   <div className="order-1 lg:order-2">
                       <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Para quem é este livro?</h2>
                       <div className="space-y-6">
                           <div className="flex gap-4">
                               <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                   <Check className="w-5 h-5 text-green-600" />
                               </div>
                               <div>
                                   <h3 className="font-bold text-slate-900 text-lg">Pessoas Encarceradas</h3>
                                   <p className="text-slate-500">Que buscam esperança e uma nova perspectiva de vida atrás das grades.</p>
                               </div>
                           </div>
                           <div className="flex gap-4">
                               <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                   <Check className="w-5 h-5 text-green-600" />
                               </div>
                               <div>
                                   <h3 className="font-bold text-slate-900 text-lg">Familiares</h3>
                                   <p className="text-slate-500">Que desejam entender melhor o processo de recuperação e como apoiar seus entes queridos.</p>
                               </div>
                           </div>
                           <div className="flex gap-4">
                               <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                   <Check className="w-5 h-5 text-green-600" />
                               </div>
                               <div>
                                   <h3 className="font-bold text-slate-900 text-lg">Líderes e Capelães</h3>
                                   <p className="text-slate-500">Que precisam de material de apoio eficaz para trabalhos de evangelização e ressocialização.</p>
                               </div>
                           </div>
                       </div>
                   </div>
              </div>
          </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-center">
          <div className="container">
              <div className="max-w-3xl mx-auto space-y-8">
                  <Feather className="w-12 h-12 text-white/20 mx-auto" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Comece a mudança hoje</h2>
                  <p className="text-xl text-slate-400">
                      Seja para você ou para presentear alguém que precisa, este livro é uma semente de liberdade.
                  </p>
                  <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-slate-900 hover:bg-slate-100" asChild>
                    <a href="https://wa.me/+34673017500?text=Ol%C3%A1,%20vim%20do%20site%20e%20quero%20comprar%20o%20livro!" target="_blank" rel="noopener noreferrer">
                        Comprar Agora
                    </a>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  )
}
