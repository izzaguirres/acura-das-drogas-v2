import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, ShoppingBag, ArrowRight } from "lucide-react"
import Link from "next/link"

export function FinalCta() {
  return (
    <section id="comprar-livro" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Escolha como você quer <br />
            <span className="text-primary">fazer a diferença</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Você pode transformar sua própria realidade ou ser o instrumento de mudança na vida de outra pessoa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Option 1: Buy for Self */}
          <Card className="relative overflow-hidden group border-slate-200 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="p-8 h-full flex flex-col">
              <div className="mb-6 w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ShoppingBag className="w-6 h-6 text-slate-900" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Para Você ou Familiares</h3>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed">
                Adquira o livro físico para sua leitura pessoal ou para presentear alguém próximo que precisa desta mensagem de liberdade.
              </p>
              
              <Button size="lg" variant="outline" className="w-full h-14 text-base font-semibold border-slate-200 hover:bg-slate-50 hover:text-primary" asChild>
                <a href="https://wa.me/+34673017500?text=Ol%C3%A1,%20gostaria%20de%20comprar%20um%20exemplar%20do%20livro%20A%20Cura%20das%20Drogas." target="_blank" rel="noopener noreferrer">
                  Comprar Exemplar
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </Card>

          {/* Option 2: Donate (Highlight) */}
          <Card className="relative overflow-hidden border-primary bg-primary text-white shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            {/* Shine effect */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            
            <div className="p-8 h-full flex flex-col relative z-10">
              <div className="mb-6 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-current" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">Para o Próximo</h3>
              <p className="text-blue-100 mb-8 flex-grow leading-relaxed">
                Sua doação financia a impressão e distribuição gratuita de livros dentro dos presídios. Seja um agente de esperança.
              </p>
              
              <Button size="lg" className="w-full h-14 text-base font-bold bg-white text-primary hover:bg-blue-50 hover:scale-[1.02] transition-all shadow-lg" asChild>
                <Link href="/doar">
                  Fazer uma Doação
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </Card>

        </div>
      </div>
    </section>
  )
}