import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HeartHandshake, PlayCircle } from "lucide-react";

export function HeroBook() {
  return (
    <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-white">
      {/* Ambient Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[80px] opacity-50 -translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full animate-pulse" />
      <div className="absolute bottom-40 right-20 w-3 h-3 bg-indigo-400 rounded-full animate-pulse delay-700" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-8 max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 shadow-sm mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Projeto Social & Evangelístico
              </div>
              
              <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1]">
                A Cura das <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Drogas</span>
              </h1>
              
              <p className="text-lg text-slate-600 sm:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                Transforme vidas através da fé. Uma jornada de liberdade, esperança e renovação espiritual para quem mais precisa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="h-14 px-8 text-base font-semibold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5" asChild>
                <a 
                  href="https://wa.me/+34673017500?text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20livro%20A%20Cura%20das%20Drogas!" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Comprar Livro
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-14 px-8 text-base font-semibold border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              >
                <Link href="/doar">
                  <HeartHandshake className="mr-2 h-5 w-5 text-rose-500" />
                  Fazer Doação
                </Link>
              </Button>
            </div>
            
            <div className="pt-6 flex items-center gap-4 text-sm text-slate-500 justify-center lg:justify-start border-t border-slate-100 lg:border-none mt-4 lg:mt-0">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white border-2 border-white flex items-center justify-center overflow-hidden shadow-sm">
                     <Image src={`/images/people/${i}.jpg`} alt="User" width={40} height={40} className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900">500+ Vidas</p>
                <p className="text-xs">Impactadas pelo projeto</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Decorative Circle behind book */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/50 to-transparent rounded-full blur-3xl -z-10" />
            
            <div className="relative w-full max-w-[450px] lg:max-w-[500px] aspect-[4/5] animate-float">
               {/* Book Shadow */}
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-blue-900/20 blur-2xl rounded-[100%]" />
               
               <Image
                src="/images/bookhand.png"
                alt="Livro A Cura das Drogas em destaque"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
              
              {/* Floating Badge */}
              <div className="absolute -right-4 top-20 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/50 animate-pulse delay-1000 hidden md:block">
                  <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <PlayCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                          <p className="text-xs text-slate-500 font-semibold uppercase">Assista</p>
                          <p className="text-sm font-bold text-slate-900">O Trailer</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}