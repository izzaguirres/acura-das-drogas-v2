"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, QrCode, Building2 } from "lucide-react"

export function DonationMethods() {
  const bankData = {
    bank: "Nu Pagamentos S.A.",
    agency: "0001",
    account: "75257592-9",
    holder: "Isac Gilberto Ricardo",
  }

  const pixKey = "colaboracao@acuradasdrogas.com"

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* PIX */}
      <Card className="p-6 rounded-2xl">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <img src="/images/pix.png" alt="PIX" className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">PIX</h3>
          </div>

          <div className="space-y-3">
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Chave PIX:</p>
              <div className="flex items-center justify-between">
                <code className="text-sm font-mono break-all flex-1 mr-2">{pixKey}</code>
                <Button size="sm" variant="ghost" onClick={() => copyToClipboard(pixKey)} className="flex-shrink-0">
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg text-center">
              <div className="w-32 h-32 bg-white rounded-lg mx-auto flex items-center justify-center">
                <img src="/images/pix.png" alt="QR Code PIX" className="w-full h-full object-contain" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">QR Code PIX</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Bank Transfer */}
      <Card className="p-6 rounded-2xl">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Building2 className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold">Transferência Bancária</h3>
          </div>

          <div className="space-y-3">
            <div className="bg-muted p-4 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Banco:</span>
                <span className="text-sm font-medium">{bankData.bank}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Agência:</span>
                <span className="text-sm font-medium">{bankData.agency}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Conta:</span>
                <span className="text-sm font-medium">{bankData.account}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Titular:</span>
                <span className="text-sm font-medium">{bankData.holder}</span>
              </div>

            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
