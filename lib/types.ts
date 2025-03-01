import type { Categoria } from "@prisma/client"

export type CategoriaWithUsuario = Categoria & {
  usuario: {
    id: number
    nome: string
  }
}

