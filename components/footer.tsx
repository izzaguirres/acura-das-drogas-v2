import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Instagram, Mail, MapPin, ArrowUpRight, Facebook, Youtube } from "lucide-react"
import { contacts } from "@/content/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-800 pt-16 pb-8 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-1.5 rounded-xl shadow-lg shadow-blue-900/20">
                 <Image
                  src="/images/logo.png"
                  alt="A Cura das Drogas Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">A Cura das Drogas</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Levando esperança aos cárceres e liberdade às almas. Um projeto dedicado à transformação através da fé e do conhecimento.
            </p>
            <div className="flex space-x-3">
              {[
                  { icon: MessageCircle, href: `https://wa.me/${contacts.whatsapp}`, label: "WhatsApp", color: "hover:text-green-400 hover:border-green-400" },
                  { icon: Instagram, href: "https://instagram.com/acuradasdrogas", label: "Instagram", color: "hover:text-pink-500 hover:border-pink-500" },
                  { icon: Facebook, href: "https://facebook.com/acuradasdrogas", label: "Facebook", color: "hover:text-blue-500 hover:border-blue-500" },
                  { icon: Mail, href: `mailto:${contacts.email}`, label: "Email", color: "hover:text-white hover:border-white" },
              ].map((social, idx) => (
                  <Button 
                    key={idx}
                    size="icon" 
                    variant="outline" 
                    className={`rounded-full w-10 h-10 border-slate-800 bg-slate-900/50 text-slate-400 hover:bg-slate-800 transition-all duration-300 ${social.color}`} 
                    asChild
                  >
                    <a href={social.href} target="_blank" aria-label={social.label}>
                    <social.icon className="w-4 h-4" />
                    </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="font-bold text-white text-lg">Navegação</h3>
            <ul className="space-y-3 text-sm">
              {['Início', 'O Livro', 'O Projeto', 'Doar', 'Contato'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Início' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group w-fit"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-3 group-hover:bg-blue-500 transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Mockup */}
          <div className="space-y-6">
            <h3 className="font-bold text-white text-lg">Fique por dentro</h3>
            <p className="text-sm text-slate-400">
                Receba novidades sobre o impacto do projeto e novas distribuições.
            </p>
            <div className="space-y-3">
                <div className="flex gap-2">
                    <Input 
                        placeholder="Seu melhor e-mail" 
                        className="bg-slate-900 border-slate-800 text-slate-200 placeholder:text-slate-600 focus-visible:ring-blue-600" 
                    />
                    <Button size="icon" className="bg-blue-600 hover:bg-blue-700 shrink-0">
                        <ArrowUpRight className="w-4 h-4" />
                    </Button>
                </div>
                <p className="text-xs text-slate-600">
                    * Não enviamos spam. Apenas boas notícias.
                </p>
            </div>
          </div>

          {/* CTA Column */}
          <div className="space-y-6">
             <h3 className="font-bold text-white text-lg">Apoie a Missão</h3>
             <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl space-y-4">
                 <div className="flex items-start gap-3">
                     <div className="p-2 bg-green-500/10 rounded-lg shrink-0">
                         <MapPin className="w-5 h-5 text-green-500" />
                     </div>
                     <div>
                         <h4 className="font-semibold text-white text-sm">Alcance Global</h4>
                         <p className="text-xs text-slate-400 mt-1">Atuando em presídios do Brasil e Espanha.</p>
                     </div>
                 </div>
                 <Button className="w-full bg-white hover:bg-slate-100 text-slate-900 font-bold" asChild>
                <Link href="/doar" className="flex items-center justify-center gap-2">
                    Fazer uma Doação
                </Link>
                </Button>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} A Cura das Drogas. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
             <Link href="#" className="hover:text-slate-300 transition-colors">Termos</Link>
             <Link href="#" className="hover:text-slate-300 transition-colors">Privacidade</Link>
             <Link href="#" className="hover:text-slate-300 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}