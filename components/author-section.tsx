import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Quote } from "lucide-react"

export function AuthorSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="relative aspect-[4/5] w-full max-w-[320px] mx-auto lg:mx-0">
                {/* Decorative elements */}
                <div className="absolute top-0 -left-4 w-24 h-24 bg-primary/10 rounded-tl-[3rem] -z-10" />
                <div className="absolute bottom-0 -right-4 w-32 h-32 bg-slate-100 rounded-br-[3rem] -z-10" />
                
                <Image
                  src="/images/autor.png"
                  alt="Foto do autor"
                  fill
                  className="object-cover rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-8 text-center lg:text-left">
              <div className="space-y-2">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm">Sobre o Autor</span>
                <h2 className="text-4xl font-bold text-slate-900 font-display">
                  Uma vida dedicada à <br className="hidden lg:block" />transformação de vidas
                </h2>
              </div>

              <div className="relative">
                <Quote className="absolute -top-4 -left-6 w-8 h-8 text-primary/20 rotate-180" />
                <p className="text-lg text-slate-600 leading-relaxed italic">
                  "Acredito que não existe poço tão fundo onde a graça de Deus não possa alcançar. Minha missão não é apenas entregar um livro, mas entregar uma ferramenta que pode serrar as grades da alma."
                </p>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Movido por um chamado divino inegociável, dediquei os últimos anos a entender a dor daqueles que muitos preferem ignorar. O sistema prisional está cheio de histórias interrompidas, mas também de futuros potenciais.
                </p>
                <p>
                  "A Cura das Drogas" nasce não de teorias de gabinete, mas de joelhos no chão e olhos nos olhos. É um convite para que cada leitor, seja dentro de uma cela ou no conforto de casa, encontre a verdadeira liberdade que só existe através da fé e da decisão pessoal.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-bold text-slate-900 text-lg">Isac Gilberto Ricardo</p>
                <p className="text-slate-500 text-sm">Autor & Fundador do Projeto</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
