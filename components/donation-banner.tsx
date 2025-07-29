import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart } from "lucide-react"
import Link from "next/link"

export function DonationBanner() {
  return (
    <section className="py-16 wave-pattern">
      <div className="container">
        <Card className="max-w-4xl mx-auto p-8 lg:p-12 text-center rounded-2xl shadow-xl bg-white">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 text-green-600" />
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Ajude a levar este livro a quem mais precisa</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Com sua colaboração, podemos imprimir e distribuir exemplares para pessoas privadas de liberdade,
                oferecendo uma mensagem de esperança e transformação.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-lg px-8">
                <Link href="/doar">Fazer uma Doação</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                <Link href="/o-projeto">Saiba Mais</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
