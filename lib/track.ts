/**
 * Tracking helpers — GA4 + Google Ads conversion
 *
 * IMPORTANTE: cliques que levam pra app externo (WhatsApp, mailto, tel) DEVEM
 * usar `transport_type: 'beacon'`. Senão o navegador mobile cancela o request
 * quando faz app-switch e a conversão é perdida.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

type GtagParams = Record<string, unknown>

function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return
  if (typeof window.gtag !== "function") return
  window.gtag(...args)
}

/**
 * Generic GA4 event with beacon transport (safe pra app-switch).
 */
export function trackEvent(name: string, params: GtagParams = {}) {
  gtag("event", name, {
    transport_type: "beacon",
    ...params,
  })
}

/**
 * Click no WhatsApp — fire GA4 event + Google Ads conversion (se configurado).
 *
 * @param source onde o clique aconteceu (ex: "hero", "final_cta", "header", "contato")
 * @param intent o que o user tava buscando (ex: "ajuda", "comprar", "doacao", "engajar")
 */
export function trackWhatsApp(source: string, intent: string = "ajuda") {
  trackEvent("whatsapp_click", {
    event_category: "engagement",
    event_label: `${source}:${intent}`,
    source,
    intent,
  })

  // Google Ads conversion — só dispara se as envs estiverem setadas
  const conversionId = process.env.NEXT_PUBLIC_GADS_CONVERSION_ID
  const conversionLabel = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL
  if (conversionId && conversionLabel) {
    gtag("event", "conversion", {
      send_to: `${conversionId}/${conversionLabel}`,
      transport_type: "beacon",
    })
  }
}

/**
 * Click em CTA de doação (PIX, transferência) — fire conversão de doação.
 */
export function trackDonation(method: "pix" | "bank" | "external") {
  trackEvent("donation_intent", {
    event_category: "donation",
    event_label: method,
    method,
  })
}
