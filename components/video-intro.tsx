"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef } from "react"

export function VideoIntro() {
  const videoRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            // Adiciona autoplay=1 quando o vídeo entra na viewport
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
  }, [])

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

          <Card className="overflow-hidden rounded-2xl">
            <div className="aspect-video bg-muted">
              <iframe
                ref={videoRef}
                src="https://www.youtube.com/embed/l1YcjnY3goQ?start=5&autoplay=0&rel=0&modestbranding=1&mute=1"
                title="A Cura das Drogas - Vídeo de Apresentação"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
