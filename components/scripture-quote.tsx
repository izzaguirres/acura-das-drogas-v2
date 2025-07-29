import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface ScriptureQuoteProps {
  text: string
  reference: string
}

export function ScriptureQuote({ text, reference }: ScriptureQuoteProps) {
  return (
    <Card className="p-8 bg-primary/5 border-primary/20 rounded-2xl">
      <div className="text-center space-y-4">
        <Quote className="w-8 h-8 text-primary mx-auto" />
        <blockquote className="text-lg italic text-muted-foreground">"{text}"</blockquote>
        <cite className="text-sm font-semibold text-primary">— {reference}</cite>
      </div>
    </Card>
  )
}
