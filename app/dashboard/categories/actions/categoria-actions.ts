"use server"

import { revalidatePath } from "next/cache"
import { db } from "@/lib/prisma"
import type { CategoriaWithUsuario } from "@/lib/types"

export async function getCategorias(): Promise<CategoriaWithUsuario[]> {
  return await db.categoria.findMany({
    orderBy: {
      id: "asc",
    },
    include: {
      usuario: {
        select: {
          id: true,
          nome: true,
        },
      },
    },
  })
}

export async function createCategoria(data: {
  nome: string
  descricao?: string
  usuarioId: number
}) {
  await db.categoria.create({
    data: {
      nome: data.nome,
      descricao: data.descricao,
      usuarioId: data.usuarioId,
    },
  })

  revalidatePath("/categorias")
}

export async function updateCategoria(data: {
  id: number
  nome: string
  descricao?: string
  usuarioId: number
}) {
  await db.categoria.update({
    where: {
      id: data.id,
    },
    data: {
      nome: data.nome,
      descricao: data.descricao,
      usuarioId: data.usuarioId,
    },
  })

  revalidatePath("/categorias")
}

export async function deleteCategoria(id: number) {
  await db.categoria.delete({
    where: {
      id,
    },
  })

  revalidatePath("/categorias")
}

