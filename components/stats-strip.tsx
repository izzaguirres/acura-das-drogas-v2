import { Card } from "@/components/ui/card"
import { prisonStats } from "@/content/data"

export function StatsStrip() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">O Alcance da Necessidade</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Milhões de pessoas em instituições penais ao redor do mundo precisam de uma mensagem de esperança e
            transformação
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {prisonStats.map((stat, index) => (
            <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow rounded-2xl">
              <div className="space-y-2">
                <h3 className="font-semibold text-sm">{stat.country}</h3>
                <p className="text-lg font-bold text-primary">{stat.population}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">Fonte: World Prison Brief</p>
        </div>
      </div>
    </section>
  )
}
