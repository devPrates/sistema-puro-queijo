"use server"

import { revalidatePath } from "next/cache"
import { db } from "@/lib/prisma"
import type { ProdutoWithRelations } from "@/lib/types"

export async function getProdutos(): Promise<ProdutoWithRelations[]> {
  return await db.produto.findMany({
    orderBy: {
      id: "asc",
    },
    include: {
      categoria: {
        select: {
          id: true,
          nome: true,
        },
      },
      usuario: {
        select: {
          id: true,
          nome: true,
        },
      },
    },
  })
}

export async function createProduto(data: {
  nome: string
  slug: string
  imageURL: string
  sabor: string
  descricao?: string
  tamanhoEmbalagem: string
  categoriaId: number
  usuarioId: number
}) {
  await db.produto.create({
    data: {
      nome: data.nome,
      slug: data.slug,
      imageURL: data.imageURL,
      sabor: data.sabor,
      descricao: data.descricao,
      tamanhoEmbalagem: data.tamanhoEmbalagem as any,
      categoriaId: data.categoriaId,
      usuarioId: data.usuarioId,
    },
  })

  revalidatePath("/produtos")
}

export async function updateProduto(data: {
  id: number
  nome: string
  slug: string
  imageURL: string
  sabor: string
  descricao?: string
  tamanhoEmbalagem: string
  categoriaId: number
  usuarioId: number
}) {
  await db.produto.update({
    where: {
      id: data.id,
    },
    data: {
      nome: data.nome,
      slug: data.slug,
      imageURL: data.imageURL,
      sabor: data.sabor,
      descricao: data.descricao,
      tamanhoEmbalagem: data.tamanhoEmbalagem as any,
      categoriaId: data.categoriaId,
      usuarioId: data.usuarioId,
    },
  })

  revalidatePath("/produtos")
}

export async function deleteProduto(id: number) {
  await db.produto.delete({
    where: {
      id,
    },
  })

  revalidatePath("/produtos")
}

