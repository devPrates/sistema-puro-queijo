import { z } from "zod"
import { TamanhoEmbalagem } from "@prisma/client"

export const ProdutoSchema = z.object({
  nome: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  imageURL: z.string().url("URL inválida"),
  sabor: z.string().min(2, "O sabor deve ter pelo menos 2 caracteres"),
  descricao: z.string().optional(),
  tamanhoEmbalagem: z.enum(
    [TamanhoEmbalagem.UM_KG, TamanhoEmbalagem.QUINHENTOS_G, TamanhoEmbalagem.DUZENTOS_CINQUENTA_G],
    {
      required_error: "Selecione um tamanho de embalagem",
    },
  ),
  categoriaId: z.string().min(1, "Selecione uma categoria"),
  usuarioId: z.string().min(1, "Selecione um usuário responsável"),
})

export const ProdutoUpdateSchema = ProdutoSchema.extend({
  id: z.number(),
})

export type ProdutoFormValues = z.infer<typeof ProdutoSchema>
export type ProdutoUpdateFormValues = z.infer<typeof ProdutoUpdateSchema>

