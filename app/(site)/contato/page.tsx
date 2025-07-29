import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, User } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { contacts } from "@/content/data"

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com o projeto A Cura das Drogas. Converse com o autor e tire suas dúvidas.",
}

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="container">
        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Entre em Contato</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tem dúvidas sobre o livro ou o projeto? Quer participar da missão? Estamos aqui para conversar com você.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Converse com o Autor</h2>

              <div className="space-y-4">
                <Card className="p-6 rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">WhatsApp</h3>
                      <p className="text-muted-foreground">+34 673 01 75 00</p>
                    </div>
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <a href="https://wa.me/+34673017500?text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20livro%20A%20Cura%20das%20Drogas!" target="_blank" rel="noopener noreferrer">
                        Conversar
                      </a>
                    </Button>
                  </div>
                </Card>

                <Card className="p-6 rounded-2xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground break-all">{contacts.email}</p>
                    </div>
                  </div>
                </Card>


              </div>
            </div>

            <Card className="p-6 rounded-2xl bg-primary/5 border-primary/20">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold">Sobre o Autor</h3>
                </div>
                <p className="text-muted-foreground">
                  Dedicado à missão de levar esperança e transformação para pessoas encarceradas através da mensagem de
                  cura espiritual e renovação de vida.
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
