"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check, Building2, QrCode } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import Image from "next/image"

export function DonationMethods() {
  const { toast } = useToast()
  const [copiedPix, setCopiedPix] = useState(false)

  const bankData = {
    bank: "Nu Pagamentos S.A.",
    agency: "0001",
    account: "75257592-9",
    holder: "Isac Gilberto Ricardo",
  }

  const pixKey = "colaboracao@acuradasdrogas.com"

  const copyToClipboard = (text: string, type: 'pix' | 'bank') => {
    navigator.clipboard.writeText(text)
    
    if (type === 'pix') {
        setCopiedPix(true)
        setTimeout(() => setCopiedPix(false), 2000)
    }

    toast({
      title: "Copiado!",
      description: "A chave PIX foi copiada para sua área de transferência.",
    })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* PIX */}
      <Card className="p-6 rounded-2xl border-primary/20 bg-primary/5 relative overflow-hidden hover:shadow-md transition-all">
        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full -mr-4 -mt-4" />
        
        <div className="relative z-10 space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <Image src="/images/pix.png" alt="PIX" width={24} height={24} className="w-6 h-6 object-contain" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-slate-900">PIX</h3>
                <p className="text-xs text-slate-500">Transferência instantânea</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl border border-primary/10 shadow-sm">
              <p className="text-xs text-slate-400 mb-1 uppercase font-semibold tracking-wider">Chave PIX (E-mail)</p>
              <div className="flex items-center gap-2">
                <code className="text-sm font-mono text-slate-700 break-all flex-1">{pixKey}</code>
                <Button 
                    size="icon" 
                    variant="ghost" 
                    onClick={() => copyToClipboard(pixKey, 'pix')} 
                    className={copiedPix ? "text-green-600 bg-green-50" : "text-slate-400 hover:text-primary"}
                >
                  {copiedPix ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-primary/10 shadow-sm">
              <div className="w-16 h-16 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100">
                 <QrCode className="w-8 h-8 text-slate-300" />
              </div>
              <div>
                  <p className="text-sm font-medium text-slate-900">QR Code</p>
                  <p className="text-xs text-slate-500 mb-2">Escaneie para doar</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Bank Transfer */}
      <Card className="p-6 rounded-2xl hover:shadow-md transition-all border-slate-200">
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Building2 className="w-6 h-6" />
            </div>
             <div>
                <h3 className="text-xl font-bold text-slate-900">Transferência</h3>
                <p className="text-xs text-slate-500">DOC / TED</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-slate-50 p-5 rounded-xl space-y-3 border border-slate-100">
              <div className="flex justify-between border-b border-slate-200 pb-2 last:border-0 last:pb-0">
                <span className="text-sm text-slate-500">Banco</span>
                <span className="text-sm font-semibold text-slate-900">{bankData.bank}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2 last:border-0 last:pb-0">
                <span className="text-sm text-slate-500">Agência</span>
                <span className="text-sm font-semibold text-slate-900">{bankData.agency}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2 last:border-0 last:pb-0">
                <span className="text-sm text-slate-500">Conta</span>
                <span className="text-sm font-semibold text-slate-900">{bankData.account}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-sm text-slate-500">Titular</span>
                <span className="text-sm font-semibold text-slate-900 text-right max-w-[150px] truncate" title={bankData.holder}>{bankData.holder}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}