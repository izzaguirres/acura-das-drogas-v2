import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Printer, BookOpen } from "lucide-react"
import { DonationMethods } from "@/components/donation-methods"
import { printCosts, contacts } from "@/content/data"

export const metadata: Metadata = {
  title: "Doar",
  description: "Faça uma doação para a produção e distribuição de livros físicos do projeto A Cura das Drogas.",
}

export default function DonatePage() {
  const usageList = [
    "Impressão de novas cópias do livro",
    "Distribuição gratuita para comunidades carentes",
    "Entrega em centros de reabilitação e presídios",
    "Materiais educativos complementares",
    "Logística de distribuição",
  ]

  const faqItems = [
    {
      question: "Como posso ter certeza de que minha doação será bem utilizada?",
      answer:
        "Mantemos total transparência sobre o uso dos recursos. Em breve, disponibilizaremos relatórios periódicos sobre as ações realizadas.",
    },
    {
      question: "Posso doar livros físicos ao invés de dinheiro?",
      answer: "Sim! Entre em contato conosco pelo WhatsApp para combinarmos a doação de exemplares físicos.",
    },
    {
      question: "Vocês emitem recibo de doação?",
      answer:
        "Sim, emitimos comprovante para todas as doações. Envie seu comprovante pelo WhatsApp que retornaremos com o recibo.",
    },
    {
      question: "Qual o valor mínimo para doação?",
      answer: "Não há valor mínimo. Qualquer quantia é bem-vinda e fará diferença na vida de alguém.",
    },
  ]

  return (
    <div className="py-16">
      <div className="container">
        {/* Hero */}
        <section className="text-center mb-16 wave-pattern -mx-4 px-4 py-16 rounded-2xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Faça uma Doação para a Produção dos Livros Físicos</h1>
            <p className="text-xl text-muted-foreground">
              Sua contribuição possibilita que levemos uma mensagem de esperança e transformação para pessoas que mais
              precisam.
            </p>
          </div>
        </section>

        {/* How Donation Will Be Used */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Como sua doação será utilizada</h2>
              <p className="text-lg text-muted-foreground">
                Cada real doado é investido diretamente na missão de transformar vidas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {usageList.map((item, index) => (
                <Card key={index} className="p-6 rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Table */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Custos Estimados de Impressão</h2>
              <p className="text-lg text-muted-foreground">Valores informativos sujeitos a orçamento e fornecedor</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Spain */}
              <Card className="p-6 rounded-2xl">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center space-x-2">
                    <Printer className="w-5 h-5" />
                    <span>Espanha</span>
                  </h3>
                  <div className="space-y-3">
                    {printCosts.spain.map((cost, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">{cost.quantity} cópias</p>
                          <p className="text-sm text-muted-foreground">{cost.size}</p>
                        </div>
                        <p className="font-bold text-primary">{cost.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Brazil */}
              <Card className="p-6 rounded-2xl">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center space-x-2">
                    <Printer className="w-5 h-5" />
                    <span>Brasil</span>
                  </h3>
                  <div className="space-y-3">
                    {printCosts.brazil.map((cost, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">{cost.quantity} cópias</p>
                          <p className="text-sm text-muted-foreground">{cost.size}</p>
                        </div>
                        <p className="font-bold text-primary">{cost.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                * Valores sujeitos a alteração conforme orçamento e fornecedor
              </p>
            </div>
          </div>
        </section>

        {/* Donation Methods */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Formas de Doação</h2>
              <p className="text-lg text-muted-foreground">Escolha a forma mais conveniente para você</p>
            </div>

            <DonationMethods />
          </div>
        </section>

        {/* Send Receipt CTA */}
        <section className="mb-16">
          <Card className="max-w-2xl mx-auto p-8 text-center rounded-2xl bg-green-50 border-green-200">
            <div className="space-y-4">
              <MessageCircle className="w-12 h-12 text-green-600 mx-auto" />
              <h3 className="text-2xl font-bold">Envie seu Comprovante</h3>
              <p className="text-muted-foreground">
                Após fazer sua doação, envie o comprovante pelo WhatsApp para recebermos e emitirmos seu recibo oficial.
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8" asChild>
                <a
                  href="https://wa.me/+34673017500?text=Ol%C3%A1,%20vim%20do%20site%20%20e%20quero%20enviar%20o%20comprovante%20da%20transfer%C3%AAncia%20que%20fiz%20para%20ajudar%20no%20projeto!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar Comprovante
                </a>
              </Button>
            </div>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Card key={index} className="p-6 rounded-2xl">
                  <div className="space-y-3">
                    <h3 className="font-semibold">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section>
          <Card className="max-w-4xl mx-auto p-8 text-center rounded-2xl bg-primary/5 border-primary/20">
            <div className="space-y-4">
              <BookOpen className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-2xl font-bold">Transparência Total</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Acreditamos na importância da transparência. Em breve, disponibilizaremos relatórios periódicos sobre
                como os recursos estão sendo utilizados e o impacto gerado pelo projeto.
              </p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
