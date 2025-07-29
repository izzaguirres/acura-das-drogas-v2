import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Users, Heart, PlayIcon as Pray, HandHeart } from "lucide-react"
import { actionPlan } from "@/content/data"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "O Projeto",
  description:
    "Conheça nossa missão de evangelizar pessoas encarceradas e oferecer suporte espiritual através do livro A Cura das Drogas.",
}

export default function ProjectPage() {
  const engagementCards = [
    {
      icon: HandHeart,
      title: "Colabore",
      description: "Faça uma doação para impressão e distribuição dos livros",
      action: "Doar Agora",
      href: "/doar",
    },
    {
      icon: Pray,
      title: "Ore",
      description: "Interceda pelas pessoas encarceradas e pelo sucesso do projeto",
      action: "Saiba Como",
      href: "/contato",
    },
    {
      icon: Users,
      title: "Engaje-se",
      description: "Participe ativamente da distribuição e acompanhamento",
      action: "Entre em Contato",
      href: "/contato",
    },
  ]

  return (
    <div className="py-16">
      <div className="container">
        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-6">O Projeto A Cura das Drogas</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma missão de transformação e esperança para alcançar pessoas encarceradas com uma mensagem de cura
            espiritual e renovação de vida.
          </p>
        </section>

        {/* Objective & Goal */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold">Nosso Objetivo</h2>
                <p className="text-muted-foreground">
                  Evangelizar pessoas encarceradas, oferecendo suporte espiritual e uma mensagem prática de superação de
                  vícios através da fé e da transformação pessoal.
                </p>
              </div>
            </Card>

            <Card className="p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold">Nossa Meta</h2>
                <p className="text-muted-foreground">
                  Distribuir milhares de exemplares do livro "A Cura das Drogas" em presídios, alcançando pessoas que
                  mais precisam de uma mensagem de esperança e renovação.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Action Plan */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Plano de Ação</h2>
            <p className="text-lg text-muted-foreground">
              Três passos para gerar impacto real: Levantamento, Edição, Evangelização
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {actionPlan.map((step, index) => (
              <Card key={index} className="p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Why It Matters */}
        <section className="mb-16 bg-muted/30 -mx-4 px-4 py-16 rounded-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Por que isso importa</h2>
            </div>

            <div className="space-y-8">
              <Card className="p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">O Desafio Atual</h3>
                <p className="text-muted-foreground">
                  Os métodos tradicionais de tratamento de dependência química, embora importantes, nem sempre abordam a
                  dimensão espiritual da pessoa. Muitas vezes, o vazio interior e a falta de propósito permanecem sem
                  resposta.
                </p>
              </Card>

              <Card className="p-8 rounded-2xl bg-primary/5 border-primary/20">
                <h3 className="text-xl font-semibold mb-4">Nossa Proposta</h3>
                <p className="text-muted-foreground">
                  Oferecemos uma abordagem complementar que enfatiza a transformação espiritual e a escolha pessoal como
                  fundamentos para uma vida livre das drogas. É uma mensagem de esperança baseada na fé e no amor de
                  Deus.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Human Stories */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Histórias Reais de Transformação</h2>
              <p className="text-lg text-muted-foreground">
                Cada pessoa alcançada representa uma família restaurada e uma comunidade mais forte
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold text-lg">R</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">A Segunda Chance de Roberto</h3>
                    <p className="text-sm text-muted-foreground">
                      "Depois de 8 anos preso, encontrei neste livro a força que precisava para recomeçar. Hoje sou um
                      homem livre, não apenas fisicamente, mas espiritualmente."
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold text-lg">A</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">O Reencontro de Ana</h3>
                    <p className="text-sm text-muted-foreground">
                      "Meu filho estava perdido nas drogas. Este livro chegou até ele na prisão e mudou nossa história.
                      Hoje somos uma família unida novamente."
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Como Você Pode Participar</h2>
            <p className="text-lg text-muted-foreground">Junte-se a nós nesta missão de transformação e esperança</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engagementCards.map((card, index) => (
              <Card key={index} className="p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <card.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="text-muted-foreground">{card.description}</p>
                  <Button asChild className="w-full">
                    <Link href={card.href}>{card.action}</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Data Source */}
        <section className="text-center">
          <p className="text-sm text-muted-foreground">Dados de população carcerária: World Prison Brief</p>
        </section>
      </div>
    </div>
  )
}
