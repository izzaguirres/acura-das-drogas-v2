import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { bookHighlights } from "@/content/data"

export function BookHighlights() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">O que você encontrará no livro</h2>
            <p className="text-lg text-muted-foreground">
              Uma abordagem única baseada na fé e na transformação pessoal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookHighlights.map((highlight, index) => (
              <Card key={index} className="p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                  <p className="text-muted-foreground">{highlight}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
