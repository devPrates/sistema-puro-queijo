import { z } from "zod"

export const LoginSchema = z.object({
  email: z.string().email("Email inválido"),
  senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
})

export type LoginFormValues = z.infer<typeof LoginSchema>

