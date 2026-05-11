"use client"

import {
  useEffect,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from "react"

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  /** Delay in seconds before fading in */
  delay?: number
}

export function Reveal({
  children,
  delay = 0,
  className,
  style: styleProp,
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reveal = () => {
      node.style.opacity = "1"
      node.style.transform = "none"
    }

    if (typeof IntersectionObserver === "undefined") {
      reveal()
      return
    }

    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      reveal()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          reveal()
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay * 1000}ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay * 1000}ms`,
        willChange: "opacity, transform",
        ...styleProp,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
