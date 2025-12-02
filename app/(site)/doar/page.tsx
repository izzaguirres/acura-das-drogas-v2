import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Printer, BookOpen, Truck, Users, Sparkles, Copy, Building2, Heart } from "lucide-react"
import { DonationMethods } from "@/components/donation-methods"
import { printCosts, contacts } from "@/content/data"

export const metadata: Metadata = {
  title: "Faça uma Doação | Ajude a Imprimir Livros",
  description: "Sua doação financia a impressão e distribuição gratuita de livros para presidiários. Transparência total nos custos e impacto direto.",
  keywords: [
    "doar para projeto social",
    "apoiar evangelização presídios",
    "doação livro cristão",
    "financiamento coletivo missionário",
    "como doar cura das drogas",
    "custo impressão livro",
    "ajuda humanitária prisões"
  ],
  openGraph: {
    title: "Sua doação leva cura para dentro das celas",
    description: "Veja exatamente para onde vai seu dinheiro: Impressão, logística e entrega de livros transformadores.",
    images: [
      {
        url: "/images/header.png",
        width: 1200,
        height: 630,
        alt: "Doe para o projeto A Cura das Drogas",
      },
    ],
  }
}

export default function DonatePage() {
  const impactMetrics = [
    {
      icon: <Printer className="w-8 h-8 text-primary" />,
      title: "Impressão",
      description: "Produção de alta qualidade do livro físico para leitura."
    },
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Logística",
      description: "Transporte seguro até presídios e comunidades distantes."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Alcance",
      description: "Distribuição gratuita em mãos para quem mais precisa."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Material Extra",
      description: "Guias de estudo e acompanhamento para reabilitação."
    }
  ]

  const faqItems = [
    {
      question: "Como posso ter certeza de que minha doação será bem utilizada?",
      answer: "Mantemos total transparência. Disponibilizamos relatórios periódicos e você pode acompanhar nossas ações no Instagram.",
    },
    {
      question: "Posso doar livros físicos ao invés de dinheiro?",
      answer: "Sim! Se você tem acesso a uma gráfica ou quer doar exemplares comprados, entre em contato pelo WhatsApp.",
    },
    {
      question: "Vocês emitem recibo?",
      answer: "Sim. Após a transferência, envie o comprovante pelo WhatsApp e emitiremos seu recibo oficial de doação.",
    },
  ]

  // JSON-LD para FAQ (Perguntas Frequentes)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/header.png')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container relative z-10 text-center text-white space-y-6">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
            <Heart className="w-6 h-6 text-white fill-current mr-2" />
            <span className="font-medium tracking-wide">Faça parte dessa missão</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
            Sua doação imprime esperança e liberta vidas
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-light">
            100% das doações são destinadas à produção e distribuição do livro "A Cura das Drogas" em presídios.
          </p>
        </div>
        
        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-slate-50 rounded-t-[50%]" />
      </section>

      <div className="container -mt-12 relative z-20">
        {/* Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {impactMetrics.map((item, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-none shadow-md group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <div className="group-hover:text-white transition-colors">
                  {item.icon}
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content (Left) */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Donation Methods */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-1 bg-primary rounded-full" />
                <h2 className="text-2xl font-bold text-slate-900">Faça sua Doação</h2>
              </div>
              <DonationMethods />
            </section>

            {/* Cost Transparency */}
            <section>
               <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-1 bg-slate-300 rounded-full" />
                <h2 className="text-2xl font-bold text-slate-900">Transparência de Custos</h2>
              </div>
              
              <div className="grid gap-6">
                <Card className="overflow-hidden border-none shadow-lg bg-white">
                  <div className="bg-slate-900 p-4 text-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🇪🇸</span>
                      <h3 className="font-bold">Custos Espanha</h3>
                    </div>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded">Euro (€)</span>
                  </div>
                  <div className="p-0">
                    {printCosts.spain.map((cost, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border-b last:border-0 hover:bg-slate-50 transition-colors">
                        <div>
                          <p className="font-bold text-lg text-slate-800">{cost.quantity} Livros</p>
                          <p className="text-xs text-slate-500 uppercase tracking-wider">{cost.size}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-xl text-primary">{cost.price}</p>
                          <p className="text-xs text-slate-400">Custo total</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="overflow-hidden border-none shadow-lg bg-white">
                  <div className="bg-green-700 p-4 text-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🇧🇷</span>
                      <h3 className="font-bold">Custos Brasil</h3>
                    </div>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded">Real (R$)</span>
                  </div>
                  <div className="p-0">
                    {printCosts.brazil.map((cost, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border-b last:border-0 hover:bg-slate-50 transition-colors">
                        <div>
                          <p className="font-bold text-lg text-slate-800">{cost.quantity} Livros</p>
                          <p className="text-xs text-slate-500 uppercase tracking-wider">{cost.size}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-xl text-primary">{cost.price}</p>
                          <p className="text-xs text-slate-400">Custo total</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
              <p className="text-center text-xs text-muted-foreground mt-4">* Valores estimados sujeitos a cotação do dia e fornecedor.</p>
            </section>
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-5 space-y-8">
             {/* Receipt CTA */}
            <Card className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              
              <MessageCircle className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-2">Já fez sua doação?</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Envie o comprovante para nossa equipe. Queremos agradecer e prestar contas de cada centavo recebido.
              </p>
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12 shadow-lg shadow-primary/20" asChild>
                <a
                  href="https://wa.me/+34673017500?text=Ol%C3%A1,%20vim%20do%20site%20e%20quero%20enviar%20o%20comprovante!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enviar Comprovante no WhatsApp
                </a>
              </Button>
            </Card>

            {/* FAQ Mini */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-yellow-400 rounded-full" />
                Dúvidas Comuns
              </h3>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="pb-4 border-b last:border-0 last:pb-0 border-slate-100">
                    <h4 className="font-medium text-slate-900 text-sm mb-1">{item.question}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}