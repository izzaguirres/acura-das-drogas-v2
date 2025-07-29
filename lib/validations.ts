import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
  consent: z.boolean().refine((val) => val === true, "Você deve aceitar os termos"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
