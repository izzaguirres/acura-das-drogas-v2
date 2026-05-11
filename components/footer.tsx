import Link from "next/link"
import Image from "next/image"
import { contacts } from "@/content/data"

const navItems = [
  { name: "Início", href: "/" },
  { name: "O Livro", href: "/o-livro" },
  { name: "O Projeto", href: "/o-projeto" },
  { name: "Doar", href: "/doar" },
  { name: "Contato", href: "/contato" },
]

export function Footer() {
  return (
    <footer className="bg-ocean text-white relative overflow-hidden pb-24 md:pb-12">
      <div
        aria-hidden
        className="absolute -top-40 left-1/4 w-[420px] h-[420px] rounded-full blur-[100px]"
        style={{ background: "rgba(74, 159, 212, 0.16)" }}
      />

      <div className="container relative pt-20 pb-12 lg:pt-24 lg:pb-12">
        <div className="grid gap-12 lg:grid-cols-12 mb-16">
          <div className="flex flex-col gap-5 lg:col-span-5 max-w-[400px]">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="bg-white rounded-lg p-1.5">
                <Image
                  src="/images/logo.png"
                  alt="A Cura das Drogas"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-medium tracking-tight text-white">
                A Cura das Drogas
              </span>
            </Link>
            <p className="text-[15px] text-sky-100/80 leading-relaxed">
              Projeto social de Isaac Amar — desde 1994 levando esperança a
              quem está atrás das grades, no Brasil e na Espanha.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-3">
            <p className="tracking-[0.14em] text-[10px] font-medium text-white/40 tracking-[0.14em] uppercase">
              Site
            </p>
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-sky-100 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-4">
            <p className="tracking-[0.14em] text-[10px] font-medium text-white/40 tracking-[0.14em] uppercase">
              Contato
            </p>
            <ul className="flex flex-col gap-3 text-[15px] text-sky-100">
              <li>
                <a
                  href={`https://wa.me/${contacts.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp +34 673 01 75 00
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contacts.email}`}
                  className="hover:text-white transition-colors"
                >
                  {contacts.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://${contacts.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @acuradasdrogas
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-[11px] text-white/40">
            © {new Date().getFullYear()} A Cura das Drogas · Todos os direitos
            reservados
          </p>
          <p className="text-[11px] text-white/40">
            Site por{" "}
            <a
              href="https://serotiva.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Serotiva Std.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
