import Link from "next/link"
import { MessageCircle, Instagram, Mail } from "lucide-react"
import { contacts } from "@/content/data"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container py-12">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/images/logo.png"
                alt="A Cura das Drogas"
                className="h-8 w-auto"
              />
              <span className="font-bold">A Cura das Drogas</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Uma mensagem de transformação e esperança para quem busca liberdade das drogas.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/o-livro" className="text-muted-foreground hover:text-primary">
                  O Livro
                </Link>
              </li>
              <li>
                <Link href="/o-projeto" className="text-muted-foreground hover:text-primary">
                  O Projeto
                </Link>
              </li>
              <li>
                <Link href="/doar" className="text-muted-foreground hover:text-primary">
                  Doar
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-muted-foreground hover:text-primary">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">{contacts.email}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Redes Sociais</h3>
            <div className="flex space-x-2">
              <a
                href="https://wa.me/+34673017500?text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20livro%20A%20Cura%20das%20Drogas!"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/acuradasdrogas"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} A Cura das Drogas. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link href="/termos" className="text-muted-foreground hover:text-primary">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="text-muted-foreground hover:text-primary">
              Privacidade
            </Link>
          </div>
        </div>

        <div className="mt-4 text-xs text-muted-foreground text-center">
          <p>Dados de população carcerária: World Prison Brief</p>
        </div>
      </div>
    </footer>
  )
}
