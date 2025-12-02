import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, MapPin, ArrowRight, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { contacts } from "@/content/data"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Fale Conosco | A Cura das Drogas",
  description: "Canais de atendimento do projeto A Cura das Drogas. WhatsApp, Email e Formulário. Fale com o autor ou solicite ajuda espiritual.",
  keywords: [
    "contato a cura das drogas",
    "whatsapp projeto cura das drogas",
    "email cura das drogas",
    "falar com pastor isac",
    "ajuda para viciados whatsapp"
  ],
  openGraph: {
    title: "Estamos aqui para ouvir você",
    description: "Seja para pedir ajuda, fazer uma doação ou tirar dúvidas, nossa equipe está pronta para conversar.",
    images: [
      {
        url: "/images/header.png",
        width: 1200,
        height: 630,
        alt: "Fale com a equipe do projeto",
      },
    ],
  }
}

export default function ContactPage() {
  // JSON-LD para Página de Contato
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "description": "Página de contato oficial do projeto A Cura das Drogas",
    "mainEntity": {
      "@type": "Organization",
      "name": "A Cura das Drogas",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+34-673-01-75-00",
        "contactType": "customer service",
        "email": "colaboracao@acuradasdrogas.com.br",
        "availableLanguage": ["Portuguese", "Spanish"]
      }
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-900">
         <div className="absolute inset-0 opacity-30">
            <Image 
                src="/images/header.png" 
                alt="Background de contato" 
                fill 
                className="object-cover"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900" />
        
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Vamos conversar?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Seja para tirar dúvidas, pedir oração ou saber como apoiar o projeto, sua mensagem é muito importante para nós.
          </p>
        </div>
      </section>

      <div className="container -mt-10 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info (Left Column) */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 rounded-2xl shadow-lg border-none overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-bl-full -mr-4 -mt-4 opacity-50 transition-transform group-hover:scale-110" />
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 text-green-600">
                        <MessageCircle className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">WhatsApp</h3>
                    <p className="text-slate-500 text-sm mb-6">Fale diretamente com nossa equipe.</p>
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/20">
                      <a href="https://wa.me/+34673017500?text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais!" target="_blank" rel="noopener noreferrer">
                        Iniciar Conversa <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                </div>
            </Card>

            <Card className="p-6 rounded-2xl shadow-lg border-none overflow-hidden relative group">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full -mr-4 -mt-4 opacity-50 transition-transform group-hover:scale-110" />
                 <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                        <Mail className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-500 text-sm mb-6">Para parcerias e assuntos institucionais.</p>
                    <a href={`mailto:${contacts.email}`} className="text-blue-600 font-medium hover:underline break-all">
                        {contacts.email}
                    </a>
                </div>
            </Card>

            <Card className="p-6 rounded-2xl shadow-sm border-slate-200 bg-slate-900 text-white">
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-slate-400 mt-1" />
                        <div>
                            <h4 className="font-bold mb-1">Localização</h4>
                            <p className="text-slate-400 text-sm">Projeto com base na Espanha e no Brasil.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Clock className="w-5 h-5 text-slate-400 mt-1" />
                        <div>
                            <h4 className="font-bold mb-1">Atendimento</h4>
                            <p className="text-slate-400 text-sm">Segunda a Sexta: 9h às 18h</p>
                        </div>
                    </div>
                </div>
            </Card>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-2">
            <Card className="p-8 rounded-2xl shadow-xl border-none bg-white">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900">Envie uma Mensagem</h2>
                    <p className="text-slate-500">Preencha o formulário abaixo e responderemos o mais breve possível.</p>
                </div>
                <ContactForm />
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
