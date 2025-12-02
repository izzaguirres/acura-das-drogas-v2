"use client"

import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, Play, Pause, CheckCircle2, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function VideoIntro() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  // Update video state listeners
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updatePlaying = () => setIsPlaying(!video.paused)
    const updateMuted = () => setIsMuted(video.muted)

    video.addEventListener('play', updatePlaying)
    video.addEventListener('pause', updatePlaying)
    video.addEventListener('volumechange', updateMuted)

    return () => {
      video.removeEventListener('play', updatePlaying)
      video.removeEventListener('pause', updatePlaying)
      video.removeEventListener('volumechange', updateMuted)
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlaying(true)
      setHasInteracted(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
       {/* Decorative Background Elements */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[100px] opacity-60 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/60 rounded-full blur-[80px] opacity-50 -translate-x-1/3" />
       </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-6">
               <div className="inline-flex items-center rounded-full border border-blue-200 bg-white px-3 py-1 text-sm font-medium text-blue-600 shadow-sm">
                <Sparkles className="mr-2 h-3 w-3 fill-blue-400 text-blue-400" />
                Assista ao Trailer
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Uma mensagem de <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Esperança Real</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Veja como a metodologia do livro "A Cura das Drogas" tem impactado vidas. Não é apenas teoria, é vivência transformadora documentada.
              </p>
            </div>

            <div className="space-y-4 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              {[
                "O poder da decisão pessoal na recuperação",
                "Como a fé atua como catalisador de mudança",
                "Histórias reais de superação e liberdade",
                "Um guia prático para familiares e amigos"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="mt-0.5 rounded-full bg-blue-50 p-1 group-hover:bg-blue-100 transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-2 border-l-4 border-blue-200 pl-6">
               <p className="text-base text-slate-500 italic">
                 "Conhecereis a verdade, e a verdade vos libertará." <br/>
                 <span className="text-sm font-semibold not-italic text-slate-900">— João 8:32</span>
               </p>
            </div>
          </div>

          {/* Video Player Column */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Decorative Glow & Blobs behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Phone Frame Container */}
              <div 
                ref={containerRef}
                className="relative z-10 w-[280px] sm:w-[320px] aspect-[9/16] bg-slate-950 rounded-[2.5rem] shadow-2xl overflow-hidden border-[8px] border-slate-900 ring-1 ring-white/10 cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-900/20"
                onClick={togglePlay}
              >
                {/* Screen Reflection Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-20 rounded-[2rem]" />

                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="/images/video-poster.jpg"
                  playsInline
                  loop
                  muted={false} 
                >
                  <source src="/videos/apresentacao.mp4" type="video/mp4" />
                  <div className="w-full h-full flex items-center justify-center bg-slate-900 text-white p-4 text-center">
                    Vídeo indisponível
                  </div>
                </video>

                {/* Play Overlay */}
                <div className={cn(
                  "absolute inset-0 bg-black/30 flex items-center justify-center transition-all duration-500 backdrop-blur-[2px]",
                  isPlaying ? "opacity-0 pointer-events-none backdrop-blur-0" : "opacity-100"
                )}>
                  <div className="relative group/btn">
                    <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-75 duration-1000" />
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-md transform transition-all group-hover/btn:scale-110 group-hover/btn:bg-white">
                      <Play className="w-8 h-8 text-blue-600 ml-1 fill-current" />
                    </div>
                  </div>
                </div>

                {/* Minimalist Controls */}
                <div className={cn(
                  "absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 flex justify-between items-end z-30",
                  !isPlaying && !hasInteracted ? "opacity-0" : "opacity-100"
                )}>
                  <div className="text-white">
                    <p className="text-xs font-medium text-blue-200 mb-0.5">Trailer Oficial</p>
                    <p className="text-sm font-bold">A Cura das Drogas</p>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-white hover:bg-white/20 rounded-full h-10 w-10"
                    onClick={toggleMute}
                  >
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}