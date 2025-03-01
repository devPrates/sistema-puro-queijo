import type { Categoria, Produto } from "@prisma/client"

export type CategoriaWithUsuario = Categoria & {
  usuario: {
    id: number
    nome: string
  }
}

export type ProdutoWithRelations = Produto & {
  categoria: {
    id: number
    nome: string
  }
  usuario: {
    id: number
    nome: string
  }
}





