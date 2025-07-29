import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export function HeroBook() {
  return (
    <section className="relative py-20 lg:py-32 wave-pattern">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Mobile: Image first, Desktop: Text first */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                A Cura das Drogas
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Transforme sua vida e encontre liberdade. Conheça os princípios
                e o caminho para uma vida duradoura longe das drogas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-lg px-8">
                <a href="https://wa.me/+34673017500?text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20livro%20A%20Cura%20das%20Drogas!" target="_blank" rel="noopener noreferrer">
                  Comprar Livro
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 bg-transparent"
              >
                <Link href="/doar">Fazer uma Doação</Link>
              </Button>
            </div>
          </div>

          {/* Mobile: Image first, Desktop: Image second */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="overflow-hidden bg-white shadow-2xl rounded-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <Image
                src="/images/bookhand.png"
                alt="Imagem do header"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
