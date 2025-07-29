import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Heart, BookOpen } from "lucide-react"
import { contacts } from "@/content/data"
import Image from "next/image"
import Link from "next/link"

export function AuthorSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1 text-center">
                <div className="relative inline-block">
                  <Image
                    src="/images/autor.png"
                    alt="Foto do autor"
                    width={200}
                    height={200}
                    className="rounded-full object-cover mx-auto shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Conheça o Autor</h2>
                  <p className="text-muted-foreground">
                    Movido pela compaixão e chamado divino, dedico minha vida a levar esperança para aqueles que mais
                    precisam. Acredito que cada pessoa tem potencial para transformação, independentemente de seu
                    passado.
                  </p>
                  <p className="text-muted-foreground">
                    Este livro nasceu de anos de oração, estudo e experiência no ministério com pessoas em situação de
                    vulnerabilidade. É minha contribuição para um mundo com mais amor e menos sofrimento.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <a
                      href="https://wa.me/+34673017500?text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20livro%20A%20Cura%20das%20Drogas!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Conversar no WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/doar">
                      <Heart className="w-4 h-4 mr-2" />
                      Apoiar o Projeto
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
