import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Users, Heart, PlayIcon as Pray, HandHeart, ArrowRight, CheckCircle, Globe, ShieldCheck } from "lucide-react"
import { actionPlan } from "@/content/data"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "O Projeto | Missão de Evangelização Carcerária",
  description:
    "Conheça nossa missão de evangelizar pessoas encarceradas na Espanha e no Brasil através do livro A Cura das Drogas. Reabilitação com propósito.",
  keywords: [
    "missão em presídios",
    "projeto cura das drogas",
    "evangelização prisional",
    "ong reabilitação",
    "voluntariado prisões",
    "impacto social drogas"
  ],
  openGraph: {
    title: "Projeto A Cura das Drogas: Missão Global",
    description: "Nosso objetivo é alcançar vidas esquecidas pelo sistema, levando dignidade e cura espiritual.",
    images: [
      {
        url: "/images/grupo.png",
        width: 1200,
        height: 630,
        alt: "Equipe do projeto A Cura das Drogas",
      },
    ],
  }
}

export default function ProjectPage() {
  const engagementCards = [
    {
      icon: HandHeart,
      title: "Colabore",
      description: "Faça uma doação para impressão e distribuição dos livros",
      action: "Doar Agora",
      href: "/doar",
      color: "text-rose-600",
      bg: "bg-rose-100",
    },
    {
      icon: Pray,
      title: "Ore",
      description: "Interceda pelas pessoas encarceradas e pelo sucesso do projeto",
      action: "Saiba Como",
      href: "/contato",
      color: "text-indigo-600",
      bg: "bg-indigo-100",
    },
    {
      icon: Users,
      title: "Engaje-se",
      description: "Participe ativamente da distribuição e acompanhamento",
      action: "Entre em Contato",
      href: "/contato",
      color: "text-amber-600",
      bg: "bg-amber-100",
    },
  ]

  // JSON-LD para o Projeto (Organization/NGO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Projeto A Cura das Drogas",
    "url": "https://acuradasdrogas.com/o-projeto",
    "logo": "https://acuradasdrogas.com/images/logo.png",
    "description": "Organização dedicada à evangelização e reabilitação espiritual de detentos.",
    "areaServed": ["BR", "ES"],
    "knowsAbout": ["Reabilitação de Drogas", "Capelania Prisional", "Apoio Familiar"]
  }

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-20">
            <Image 
                src="/images/grupo.png" 
                alt="Grupo de voluntários e pessoas impactadas" 
                fill 
                className="object-cover object-center"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900" />
        
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 mb-6 backdrop-blur-sm">
            <Globe className="mr-2 h-4 w-4" />
            Missão Global
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
            Levando cura e esperança para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">além das grades</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Uma missão de transformação espiritual para alcançar pessoas encarceradas com uma mensagem prática de superação e fé.
          </p>
        </div>
      </section>

      {/* Objective & Goal */}
      <section className="py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Nossa Visão</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Acreditamos que a verdadeira reabilitação começa de dentro para fora. Nosso foco não é apenas o combate às drogas, mas a restauração da identidade e dignidade humana.
                    </p>
                </div>
                
                <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                            <Target className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Nosso Objetivo</h3>
                            <p className="text-slate-600">Evangelizar pessoas encarceradas, oferecendo suporte espiritual e uma mensagem prática de superação de vícios.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                         <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center shrink-0">
                            <Heart className="w-6 h-6 text-rose-600" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Nossa Meta</h3>
                             <p className="text-slate-600">Distribuir milhares de exemplares do livro "A Cura das Drogas" em presídios, onde a esperança é mais necessária.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative lg:h-[600px] w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                    src="/images/bookhand.png"
                    alt="Mãos segurando o livro A Cura das Drogas"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white font-medium text-lg">"Eu estava preso, e fostes ver-me." — Mateus 25:36</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Plan */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Plano de Ação</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Três passos estratégicos para garantir que a mensagem chegue com eficácia e gere frutos duradouros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 border-t-2 border-dashed border-slate-300 -z-0" />

            {actionPlan.map((step, index) => (
              <div key={index} className="relative z-10 group">
                <Card className="p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 border-slate-100 bg-white h-full hover:-translate-y-1">
                  <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:border-primary/20 group-hover:scale-110 transition-all">
                    <span className="text-4xl font-bold text-primary">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20">
        <div className="container">
           <div className="bg-slate-900 rounded-3xl overflow-hidden text-white relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-rose-500/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                
                <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-16 relative z-10 items-center">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Por que isso importa?</h2>
                        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                            Muitos métodos de tratamento ignoram a dimensão espiritual do ser humano. O vazio existencial muitas vezes permanece. Nossa abordagem preenche essa lacuna.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-slate-200">
                                <ShieldCheck className="w-5 h-5 text-green-400" />
                                <span>Abordagem complementar ao tratamento clínico</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-200">
                                <ShieldCheck className="w-5 h-5 text-green-400" />
                                <span>Foco na dignidade e escolha pessoal</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-200">
                                <ShieldCheck className="w-5 h-5 text-green-400" />
                                <span>Fundamentado em valores cristãos de amor</span>
                            </div>
                        </div>
                    </div>
                     <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                        <h3 className="text-xl font-bold mb-4 text-white">O Impacto Real</h3>
                         <p className="text-slate-300 mb-6">
                            "Quando li o livro na prisão, entendi que poderia estar preso fisicamente, mas minha mente poderia ser livre. Foi o início da minha recuperação."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">R</div>
                            <div>
                                <p className="font-bold text-white">Roberto M.</p>
                                <p className="text-sm text-blue-200">Ex-interno</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Como Você Pode Participar</h2>
            <p className="text-lg text-slate-600">Escolha como você quer fazer a diferença hoje</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementCards.map((card, index) => (
              <Card key={index} className="p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 border-none shadow-md flex flex-col items-center">
                <div className={`w-16 h-16 ${card.bg} rounded-2xl flex items-center justify-center mb-6 transform rotate-3 hover:rotate-6 transition-transform`}>
                  <card.icon className={`w-8 h-8 ${card.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{card.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">{card.description}</p>
                <Button asChild className="w-full mt-auto" variant={index === 0 ? "default" : "outline"}>
                  <Link href={card.href}>
                    {card.action} 
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
           <div className="mt-16 text-center border-t border-slate-200 pt-8">
             <p className="text-sm text-slate-500">Baseado em dados de população carcerária do World Prison Brief e estatísticas locais.</p>
           </div>
        </div>
      </section>
    </div>
  )
}
