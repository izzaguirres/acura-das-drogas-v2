"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, Play, Pause, Maximize2, RotateCcw } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function VideoIntro() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  // Formatar tempo em MM:SS
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  // Atualizar tempo do vídeo
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTime = () => setCurrentTime(video.currentTime)
    const updateDuration = () => setDuration(video.duration)

    video.addEventListener('timeupdate', updateTime)
    video.addEventListener('loadedmetadata', updateDuration)

    return () => {
      video.removeEventListener('timeupdate', updateTime)
      video.removeEventListener('loadedmetadata', updateDuration)
    }
  }, [])

  // Intersection Observer para autoplay
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current && !hasInteracted) {
            videoRef.current.play().catch(() => {
              // Fallback se autoplay falhar
              setIsPlaying(false)
            })
            setIsPlaying(true)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasInteracted])

  // Controles de mouse
  useEffect(() => {
    let timeout: NodeJS.Timeout
    const container = containerRef.current

    const hideControls = () => {
      if (isPlaying) {
        timeout = setTimeout(() => setShowControls(false), 3000)
      }
    }

    const showControls = () => {
      setShowControls(true)
      clearTimeout(timeout)
    }

    if (container) {
      container.addEventListener('mousemove', showControls)
      container.addEventListener('mouseleave', hideControls)
      container.addEventListener('mouseenter', showControls)
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', showControls)
        container.removeEventListener('mouseleave', hideControls)
        container.removeEventListener('mouseenter', showControls)
      }
      clearTimeout(timeout)
    }
  }, [isPlaying])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
      setIsPlaying(false)
    } else {
      video.play()
      setIsPlaying(true)
    }
    setHasInteracted(true)
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
    setHasInteracted(true)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current
    if (!video) return

    const time = (parseFloat(e.target.value) / 100) * duration
    video.currentTime = time
    setCurrentTime(time)
  }

  const toggleFullscreen = () => {
    const container = containerRef.current
    if (!container) return

    if (!isFullscreen) {
      if (container.requestFullscreen) {
        container.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  const restart = () => {
    const video = videoRef.current
    if (!video) return

    video.currentTime = 0
    setCurrentTime(0)
    video.play()
    setIsPlaying(true)
  }

  // Detectar mudanças no fullscreen
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
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
            <div 
              ref={containerRef}
              className="aspect-video bg-black relative group cursor-pointer"
              onClick={togglePlay}
            >
              {/* Vídeo */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/images/video-poster.jpg"
                preload="metadata"
                onError={() => {
                  // Fallback quando vídeo não carrega
                  console.log('Vídeo não encontrado, mostrando placeholder')
                }}
              >
                <source src="/videos/apresentacao.mp4" type="video/mp4" />
                <source src="/videos/apresentacao.webm" type="video/webm" />
                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
                  <div className="text-center">
                    <p className="text-lg mb-2">Vídeo de apresentação</p>
                    <p className="text-sm text-gray-400">Adicione o arquivo apresentacao.mp4 na pasta public/videos/</p>
                  </div>
                </div>
              </video>

              {/* Overlay de play central */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl">
                    <Play className="w-8 h-8 text-black ml-1" />
                  </div>
                </div>
              )}

              {/* Controles */}
              <div 
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${
                  showControls ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Barra de progresso */}
                <div className="mb-3">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={duration ? (currentTime / duration) * 100 : 0}
                    onChange={handleSeek}
                    className="w-full h-1 bg-white/30 rounded-full appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${duration ? (currentTime / duration) * 100 : 0}%, rgba(255,255,255,0.3) ${duration ? (currentTime / duration) * 100 : 0}%, rgba(255,255,255,0.3) 100%)`
                    }}
                  />
                </div>

                {/* Controles inferiores */}
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-3">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation()
                        togglePlay()
                      }}
                      className="text-white hover:bg-white/20 p-2"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </Button>

                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleMute()
                      }}
                      className="text-white hover:bg-white/20 p-2"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </Button>

                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation()
                        restart()
                      }}
                      className="text-white hover:bg-white/20 p-2"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </Button>

                    <span className="text-sm font-mono">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFullscreen()
                    }}
                    className="text-white hover:bg-white/20 p-2"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Indicador de carregamento */}
              {!hasInteracted && (
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  Clique para ativar o som
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  )
}
