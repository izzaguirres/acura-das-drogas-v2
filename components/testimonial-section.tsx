import { Card } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function TestimonialSection() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Ex-detento, hoje líder comunitário",
      quote: "Eu achava que meu destino estava selado pelas grades. Este livro não me deu apenas palavras, me deu uma chave para abrir a prisão que existia dentro da minha mente. Hoje sou livre de verdade.",
    },
    {
      name: "Maria Santos",
      role: "Mãe de pessoa em recuperação",
      quote: "Ver meu filho ler este livro e chorar de arrependimento foi o maior presente que recebi. A linguagem é simples, direta e toca na ferida com amor. É um manual de sobrevivência.",
    },
    {
      name: "João Oliveira",
      role: "Capelão prisional",
      quote: "Em 15 anos de ministério, nunca vi um material conectar tão rápido com a realidade deles. Não é teologia distante, é vida prática. Cada exemplar doado vale ouro lá dentro.",
    },
    {
      name: "Pedro Mendes",
      role: "Recuperado há 5 anos",
      quote: "A leitura deste livro foi o ponto de virada na minha vida. As histórias e os ensinamentos me deram forças para acreditar que a mudança era possível para mim também.",
    },
    {
      name: "Ana Paula",
      role: "Assistente Social",
      quote: "Utilizo este material nos grupos de apoio e vejo transformações incríveis. É uma ferramenta poderosa que aborda a dependência com a profundidade e o respeito necessários.",
    },
  ]

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
       {/* Decorative background */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-60 mix-blend-multiply" />
       </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
           <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            <Star className="mr-2 h-3 w-3 fill-primary" />
            Histórias Reais
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Vidas transformadas pela <br /><span className="text-primary">mensagem da cura</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Não são apenas leitores, são testemunhas de que a recuperação é possível.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-6">
                  <div className="h-full py-2">
                    <Card className="relative p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      {/* Watermark Quote */}
                      <Quote className="absolute top-4 right-6 w-12 h-12 text-slate-100 -z-0 rotate-180" />
                      
                      <div className="flex gap-1 mb-6 relative z-10">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>

                      <blockquote className="text-slate-600 text-lg leading-relaxed mb-8 flex-grow relative z-10">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="flex items-center space-x-4 relative z-10 pt-6 border-t border-slate-50">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white shadow-md shrink-0">
                          <span className="font-bold text-lg">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{testimonial.name}</p>
                          <p className="text-sm text-slate-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
