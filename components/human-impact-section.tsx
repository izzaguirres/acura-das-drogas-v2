import { Card } from "@/components/ui/card"
import { Heart, Users, BookOpen } from "lucide-react"
import Image from "next/image"

export function HumanImpactSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Cada Pessoa Importa</h2>
              <p className="text-lg text-muted-foreground">
                Por trás de cada estatística existe uma pessoa com sonhos, família e potencial para transformação. Nossa
                missão é alcançar cada coração com uma mensagem de esperança.
              </p>
            </div>

            <div className="grid gap-4">
              <Card className="p-4 rounded-2xl flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Restauração de Vidas</h3>
                  <p className="text-sm text-muted-foreground">
                    Cada livro distribuído é uma oportunidade de transformação
                  </p>
                </div>
              </Card>

              <Card className="p-4 rounded-2xl flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Impacto Familiar</h3>
                  <p className="text-sm text-muted-foreground">Famílias inteiras são beneficiadas pela transformação</p>
                </div>
              </Card>

              <Card className="p-4 rounded-2xl flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Educação Espiritual</h3>
                  <p className="text-sm text-muted-foreground">Conhecimento que liberta e transforma corações</p>
                </div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="flex justify-center">
              <Image
                src="/images/grupo.png"
                alt="Grupo de pessoas"
                width={500}
                height={375}
                className="rounded-2xl object-cover w-full max-w-lg lg:max-w-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
