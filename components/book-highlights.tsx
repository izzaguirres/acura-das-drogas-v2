import { Card } from "@/components/ui/card"
import { Heart, Shield, Sun, Compass, BookOpen, Sparkles, Anchor, Lightbulb } from "lucide-react"

export function BookHighlights() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-100",
      title: "Defesa Contra o Vício",
      description: "Estratégias espirituais e práticas para blindar a mente e o coração contra recaídas."
    },
    {
      icon: <Compass className="w-6 h-6 text-indigo-600" />,
      bg: "bg-indigo-100",
      title: "Um Novo Caminho",
      description: "Não é apenas sobre parar, é sobre encontrar uma nova direção de vida com propósito."
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-600" />,
      bg: "bg-rose-100",
      title: "Cura Interior",
      description: "Abordagem profunda que trata as feridas emocionais que muitas vezes levam ao uso de drogas."
    },
    {
      icon: <Sun className="w-6 h-6 text-amber-600" />,
      bg: "bg-amber-100",
      title: "Renovação da Esperança",
      description: "Testemunhos e princípios que devolvem a luz para quem está na escuridão do cárcere."
    }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
       {/* Background decorations */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-slate-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
       </div>

      <div className="container relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm">
            <Sparkles className="mr-2 h-3 w-3 fill-yellow-400 text-yellow-400" />
            Conteúdo Transformador
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Muito mais que um livro,<br />um guia de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">libertação</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Cada capítulo foi desenhado com cuidado para tocar a alma e oferecer ferramentas práticas de mudança definitiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-500 bg-white hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-50 to-transparent rounded-bl-[50%] -mr-8 -mt-8 transition-all group-hover:scale-150 group-hover:from-blue-50" />
              
              <div className="flex flex-col sm:flex-row gap-6 items-start relative z-10">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner`}>
                  {feature.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed group-hover:text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}