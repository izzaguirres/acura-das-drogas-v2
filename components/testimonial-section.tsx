import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialSection() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Ex-detento, hoje líder comunitário",
      quote: "Este livro mudou minha perspectiva sobre a vida. Encontrei esperança onde só havia desespero.",
    },
    {
      name: "Maria Santos",
      role: "Mãe de pessoa em recuperação",
      quote: "Finalmente encontrei uma abordagem que fala ao coração. Meu filho está se transformando.",
    },
    {
      name: "João Oliveira",
      role: "Capelão prisional",
      quote: "Uso este livro em meu ministério. É incrível ver vidas sendo restauradas através desta mensagem.",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Vidas Transformadas</h2>
          <p className="text-lg text-muted-foreground">
            Conheça algumas pessoas que encontraram esperança através desta mensagem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-primary" />
                <blockquote className="text-muted-foreground italic">"{testimonial.quote}"</blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
