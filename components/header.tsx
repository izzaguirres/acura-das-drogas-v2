"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import {
  Home01Icon,
  Book02Icon,
  Target01Icon,
  Mail01Icon,
  WhatsappIcon,
  FavouriteIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { trackWhatsApp } from "@/lib/track"

const navItems = [
  { name: "Início", href: "/", icon: Home01Icon },
  { name: "O Livro", href: "/o-livro", icon: Book02Icon },
  { name: "O Projeto", href: "/o-projeto", icon: Target01Icon },
  { name: "Contato", href: "/contato", icon: Mail01Icon },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const isHome = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Glass over hero only on home + while not scrolled.
  const isGlass = isHome && !scrolled

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isGlass
            ? "bg-transparent"
            : "bg-background/85 backdrop-blur-xl border-b border-border/60"
        )}
      >
        {/* Same height in both modes — prevents white line at the top of the hero */}
        <div className="container flex items-center justify-between h-[76px] lg:h-[88px]">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 lg:w-11 lg:h-11 transition-transform group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="A Cura das Drogas"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className={cn(
                "font-medium text-lg lg:text-xl tracking-tight transition-colors",
                isGlass ? "text-white" : "text-foreground"
              )}
            >
              A Cura das Drogas
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-[15px] font-medium tracking-tight transition-colors",
                    isGlass
                      ? isActive
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                      : isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full w-11 h-11 transition-colors hidden sm:flex",
                isGlass
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <a
                href="https://wa.me/+34673017500?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20projeto!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                onClick={() => trackWhatsApp("header", "info")}
              >
                <HugeiconsIcon icon={WhatsappIcon} size={20} strokeWidth={1.6} />
              </a>
            </Button>

            <Button
              asChild
              size="sm"
              className={cn(
                "rounded-full px-5 h-11 font-medium gap-2 transition-all hover:scale-[1.02]",
                isGlass
                  ? "bg-white text-ocean hover:bg-white/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-brand"
              )}
            >
              <Link href="/doar">
                <HugeiconsIcon icon={FavouriteIcon} size={16} strokeWidth={2} />
                Doar
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-border shadow-[0_-4px_16px_rgba(15,39,72,0.06)]">
        <nav className="flex items-center justify-around h-16 px-2 pb-safe">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative flex flex-col items-center justify-center w-full h-full gap-1 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <span className="absolute top-0 w-10 h-0.5 bg-primary rounded-b-full" />
                )}
                <HugeiconsIcon
                  icon={item.icon}
                  size={22}
                  strokeWidth={isActive ? 2 : 1.6}
                />
                <span className="text-[10px] font-medium tracking-tight">{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}
