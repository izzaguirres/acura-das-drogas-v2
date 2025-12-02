"use client"

import { useEffect, useState, useRef } from "react"
import { Globe2, Lock, MapPin, Users } from "lucide-react"

// Helper for number animation
function AnimatedNumber({ value }: { value: string }) {
  // We simply return the value as is for now to avoid hydration mismatches or complex hook logic 
  // without external libraries. The visual impact comes from the layout.
  return (
    <span className="block">
      {value}
    </span>
  )
}

export function StatsStrip() {
  const stats = [
    { 
        label: "População Prisional Mundial", 
        value: "10.77M+", 
        highlight: true,
        icon: Globe2,
        desc: "Pessoas privadas de liberdade ao redor do globo"
    },
    { 
        label: "Presos no Brasil", 
        value: "839 Mil", 
        highlight: true,
        icon: Lock,
        desc: "3ª maior população carcerária do mundo"
    },
    { 
        label: "Presos na Espanha", 
        value: "60 Mil", 
        highlight: false,
        icon: MapPin,
        desc: "Onde nosso projeto iniciou sua jornada"
    },
    { 
        label: "Vidas Impactadas", 
        value: "500+", 
        highlight: false,
        icon: Users,
        desc: "Histórias reais de transformação e fé"
    },
  ]

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(30deg,#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-end mb-20 border-b border-slate-800 pb-12">
          <div className="space-y-6 flex-1">
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse" />
                Contexto Global
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              O Campo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Missão</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Os números revelam a urgência. Por trás de cada estatística existe uma alma que precisa ouvir sobre liberdade e cura.
            </p>
          </div>
          <div className="w-full lg:w-auto">
             <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 text-sm text-slate-400 max-w-xs">
                <p>Dados baseados no relatório mais recente do World Prison Brief (WPB).</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-3xl border transition-all duration-300 group hover:-translate-y-1 ${stat.highlight ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800' : 'bg-transparent border-slate-800 hover:border-slate-600'}`}
            >
              <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-colors ${stat.highlight ? 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white' : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-200'}`}>
                  <stat.icon className="w-6 h-6" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
                {stat.value}
              </div>
              
              <p className="text-base font-semibold text-slate-200 mb-2">
                {stat.label}
              </p>
              
              <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
                  {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}