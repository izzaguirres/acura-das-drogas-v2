type Props = {
  text: string
  reference: string
}

export function ScriptureQuote({ text, reference }: Props) {
  return (
    <div
      className="rounded-[28px] flex flex-col items-center text-center gap-8 px-8 sm:px-14 lg:px-24 py-16 lg:py-24"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--sky-50)) 0%, hsl(0 0% 100%) 100%)",
      }}
    >
      <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 bg-white border border-sky-100">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        <span className="text-[11px] font-medium text-primary-800 tracking-[0.14em] uppercase">
          {reference}
        </span>
      </span>
      <p className="text-[28px] sm:text-[36px] lg:text-[40px] font-light text-foreground leading-[1.25] tracking-[-0.025em] max-w-[880px]">
        &ldquo;{text}&rdquo;
      </p>
    </div>
  )
}
