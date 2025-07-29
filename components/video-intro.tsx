"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function VideoIntro() {
  const videoRef = useRef<HTMLIFrameElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current && !hasInteracted) {
            // Adiciona autoplay=1 quando o vídeo entra na viewport (sem som inicialmente)
            const currentSrc = videoRef.current.src
            if (!currentSrc.includes('autoplay=1')) {
              videoRef.current.src = currentSrc.replace('autoplay=0', 'autoplay=1')
            }
          }
        })
      },
      { threshold: 0.5 } // Dispara quando 50% do vídeo está visível
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [hasInteracted])

  const toggleMute = () => {
    if (videoRef.current) {
      const currentSrc = videoRef.current.src
      if (isMuted) {
        // Ativa o som
        videoRef.current.src = currentSrc.replace('mute=1', 'mute=0')
        setIsMuted(false)
      } else {
        // Desativa o som
        videoRef.current.src = currentSrc.replace('mute=0', 'mute=1')
        setIsMuted(true)
      }
      setHasInteracted(true)
    }
  }

  const playWithSound = () => {
    if (videoRef.current) {
      const currentSrc = videoRef.current.src
      // Remove mute e adiciona autoplay
      videoRef.current.src = currentSrc
        .replace('mute=1', 'mute=0')
        .replace('autoplay=0', 'autoplay=1')
      setIsMuted(false)
      setHasInteracted(true)
    }
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Conheça a Mensagem</h2>
            <p className="text-lg text-muted-foreground">
              Assista ao vídeo e descubra como este livro pode transformar vidas
            </p>
          </div>

          <Card className="overflow-hidden rounded-2xl relative">
            <div className="aspect-video bg-muted relative">
              <iframe
                ref={videoRef}
                src="https://www.youtube.com/embed/l1YcjnY3goQ?start=5&autoplay=0&rel=0&modestbranding=1&mute=1"
                title="A Cura das Drogas - Vídeo de Apresentação"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              {/* Controles de som */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={toggleMute}
                  className="bg-black/70 hover:bg-black/80 text-white backdrop-blur-sm"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </Button>
                
                {isMuted && (
                  <Button
                    size="sm"
                    variant="default"
                    onClick={playWithSound}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Play className="w-4 h-4 mr-1" />
                    Com Som
                  </Button>
                )}
              </div>
            </div>
          </Card>
          
          {isMuted && (
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">
                💡 Clique em "Com Som" para ativar o áudio do vídeo
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
