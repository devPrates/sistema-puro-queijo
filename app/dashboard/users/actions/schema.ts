import { z } from "zod"

export const UserSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  role: z.enum(["ADMIN", "USER"]),
})

export const UserUpdateSchema = z.object({
  id: z.number(),
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  senha: z
    .string()
    .optional()
    .transform((val) => (val === "" ? undefined : val)),
  role: z.enum(["ADMIN", "USER"]),
})

export type UserFormValues = z.infer<typeof UserSchema>
export type UserUpdateFormValues = z.infer<typeof UserUpdateSchema>
