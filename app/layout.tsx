import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://acuradasdrogas.com'),
  title: {
    default: "A Cura das Drogas - Livro de Transformação e Liberdade | Evangelização em Presídios",
    template: "%s | A Cura das Drogas",
  },
  description:
    "Livro 'A Cura das Drogas' - Transformação espiritual e liberdade das drogas. Evangelização em presídios, distribuição gratuita, mensagem de esperança para pessoas encarceradas. Projeto social cristão.",
  keywords: [
    "cura das drogas",
    "livro cura das drogas", 
    "transformação espiritual",
    "liberdade das drogas",
    "evangelização presídios",
    "pessoas encarceradas",
    "projeto social cristão",
    "superação vícios",
    "fé e transformação",
    "distribuição gratuita livros",
    "mensagem esperança",
    "reabilitação espiritual"
  ],
  authors: [{ name: "A Cura das Drogas", url: "https://acuradasdrogas.com" }],
  creator: "A Cura das Drogas",
  publisher: "A Cura das Drogas",
  category: "Religião e Espiritualidade",
  classification: "Projeto Social Cristão",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://acuradasdrogas.com",
    title: "A Cura das Drogas - Livro de Transformação e Liberdade",
    description: "Livro 'A Cura das Drogas' - Transformação espiritual e liberdade das drogas. Evangelização em presídios, distribuição gratuita.",
    siteName: "A Cura das Drogas",
    images: [
      {
        url: "/images/header.png",
        width: 1200,
        height: 630,
        alt: "Livro A Cura das Drogas - Transformação e Liberdade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Cura das Drogas - Livro de Transformação e Liberdade",
    description: "Livro 'A Cura das Drogas' - Transformação espiritual e liberdade das drogas. Evangelização em presídios.",
    images: ["/images/header.png"],
    creator: "@acuradasdrogas",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.dev'
}

// Dados estruturados para SEO e IAs
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "A Cura das Drogas",
  "url": "https://acuradasdrogas.com",
  "logo": "https://acuradasdrogas.com/images/logo.png",
  "description": "Projeto social cristão de evangelização em presídios através do livro 'A Cura das Drogas'",
  "foundingDate": "2024",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "colaboracao@acuradasdrogas.com.br",
    "availableLanguage": "Portuguese"
  },
  "sameAs": [
    "https://www.instagram.com/acuradasdrogas"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Livro A Cura das Drogas",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Book",
          "name": "A Cura das Drogas",
          "description": "Livro sobre transformação espiritual e liberdade das drogas",
          "author": {
            "@type": "Person",
            "name": "Autor do Projeto"
          },
          "genre": "Religião e Espiritualidade",
          "inLanguage": "pt-BR"
        },
        "price": "0",
        "priceCurrency": "BRL",
        "availability": "https://schema.org/InStock"
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>{children}</body>
    </html>
  )
}
