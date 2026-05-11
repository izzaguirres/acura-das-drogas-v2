"use client"

import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react"
import { trackWhatsApp } from "@/lib/track"

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  /** Onde o clique aconteceu (ex: "hero", "header", "final_cta") */
  source: string
  /** Intenção (ex: "ajuda", "comprar", "doacao", "engajar") */
  intent?: string
  children: ReactNode
}

/**
 * <a> wrapper que dispara `trackWhatsApp` no clique antes de navegar.
 * Use dentro de <Button asChild>.
 */
export const WaLink = forwardRef<HTMLAnchorElement, Props>(
  ({ href, source, intent, children, onClick, ...rest }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          trackWhatsApp(source, intent)
          onClick?.(e)
        }}
        {...rest}
      >
        {children}
      </a>
    )
  }
)
WaLink.displayName = "WaLink"
