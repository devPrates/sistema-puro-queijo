import { z } from "zod"

export const CategoriaSchema = z.object({
  nome: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  descricao: z.string().optional(),
  usuarioId: z.string().min(1, "Selecione um usuário responsável"),
})

export const CategoriaUpdateSchema = z.object({
  id: z.number(),
  nome: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  descricao: z.string().optional(),
  usuarioId: z.string().min(1, "Selecione um usuário responsável"),
})

export type CategoriaFormValues = z.infer<typeof CategoriaSchema>
export type CategoriaUpdateFormValues = z.infer<typeof CategoriaUpdateSchema>