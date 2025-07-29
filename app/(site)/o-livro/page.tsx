import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Heart, Users, Star } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "O Livro",
  description: "Conheça A Cura das Drogas - uma mensagem de transformação baseada na fé e na escolha pessoal.",
}

export default function BookPage() {
  const chapters = [
    { title: "O Chamado à Transformação", description: "Descobrindo o poder da escolha pessoal" },
    { title: "Fundamentos da Fé", description: "A base espiritual para a cura" },
    { title: "Rompendo as Correntes", description: "Estratégias práticas para a liberdade" },
    { title: "Uma Nova Vida", description: "Mantendo-se livre e ajudando outros" },
  ]

  return (
    <div className="py-16">
      <div className="container">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight">Sobre o Livro</h1>
              <p className="text-xl text-muted-foreground">
                "A Cura das Drogas" é mais que um livro - é uma mensagem de esperança e transformação destinada
                especialmente às pessoas encarceradas que buscam uma nova vida.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/header.png"
                alt="Capa do livro A Cura das Drogas"
                width={450}
                height={600}
                className="rounded-lg shadow-2xl w-full max-w-md lg:max-w-lg"
              />
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-16">
          <Card className="p-8 rounded-2xl bg-primary/5 border-primary/20">
            <div className="text-center space-y-4">
              <Heart className="w-12 h-12 text-primary mx-auto" />
              <h2 className="text-2xl font-bold">Nossa Missão</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Alcançar pessoas encarceradas com uma mensagem de cura e transformação por meio da fé e da decisão
                pessoal, oferecendo esperança e um caminho prático para a liberdade das drogas.
              </p>
            </div>
          </Card>
        </section>

        {/* What You'll Find */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="mb-8">
              <Image
                src="/images/livro.png"
                alt="Capa do livro A Cura das Drogas"
                width={300}
                height={400}
                className="rounded-lg shadow-2xl mx-auto"
              />
            </div>
            <h2 className="text-3xl font-bold mb-4">O que você encontrará</h2>
            <p className="text-lg text-muted-foreground">
              Conteúdo estruturado para guiar sua jornada de transformação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chapters.map((chapter, index) => (
              <Card key={index} className="p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">{chapter.title}</h3>
                    <p className="text-muted-foreground text-sm">{chapter.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16 bg-muted/30 -mx-4 px-4 py-16 rounded-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por que este livro é diferente</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">Abordagem Espiritual</h3>
              <p className="text-muted-foreground text-sm">
                Baseado na fé e na transformação interior como fundamento para a cura
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">Foco em Encarcerados</h3>
              <p className="text-muted-foreground text-sm">
                Especialmente direcionado para pessoas privadas de liberdade
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">Escolha Pessoal</h3>
              <p className="text-muted-foreground text-sm">
                Enfatiza a importância da decisão individual na jornada de cura
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Adquira seu exemplar</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Inicie sua jornada de transformação ou ajude alguém a encontrar o caminho da liberdade
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://wa.me/+34673017500?text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20livro%20A%20Cura%20das%20Drogas!" target="_blank" rel="noopener noreferrer">
                Comprar Livro
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
