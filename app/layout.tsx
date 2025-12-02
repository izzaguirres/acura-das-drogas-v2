import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"

const fontSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://acuradasdrogas.com'),
  title: {
    default: "A Cura das Drogas | Projeto de Evangelização e Reabilitação",
    template: "%s | A Cura das Drogas",
  },
  description:
    "Projeto A Cura das Drogas: Levando esperança, fé e reabilitação para presídios. Conheça o livro que tem transformado vidas e famílias através da mensagem de Cristo.",
  keywords: [
    "A Cura das Drogas",
    "Reabilitação de drogados", 
    "Evangelização em presídios",
    "Livro cristão sobre drogas",
    "Ajuda para dependentes químicos",
    "Projeto social cristão",
    "Recuperação de viciados",
    "Testemunho ex-presidiário",
    "Como vencer as drogas",
    "Família de dependentes",
    "Capelania prisional"
  ],
  authors: [{ name: "Pr. Isac Gilberto Ricardo", url: "https://acuradasdrogas.com" }],
  creator: "A Cura das Drogas",
  publisher: "A Cura das Drogas",
  category: "Religião e Espiritualidade",
  classification: "Projeto Social / ONG",
  applicationName: "A Cura das Drogas",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://acuradasdrogas.com",
    title: "A Cura das Drogas | Transformando Vidas Além das Grades",
    description: "Descubra como o projeto A Cura das Drogas está levando a mensagem de liberdade e fé para dentro dos presídios. Junte-se a essa missão.",
    siteName: "A Cura das Drogas",
    images: [
      {
        url: "/images/header.png",
        width: 1200,
        height: 630,
        alt: "Capa do Livro A Cura das Drogas e Projeto Social",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Cura das Drogas | Projeto de Vida",
    description: "Projeto social de evangelização carcerária e combate às drogas através da fé.",
    images: ["/images/header.png"],
    creator: "@acuradasdrogas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: './',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={cn(fontSans.className, "min-h-screen bg-background antialiased selection:bg-primary/20 selection:text-primary")}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}