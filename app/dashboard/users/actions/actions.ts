"use server"

import { revalidatePath } from "next/cache"
import { db } from "@/lib/prisma"
import { hash } from "bcrypt"
import { UserFormValues, UserUpdateFormValues } from "./schema"

export async function getUsers() {
  return await db.usuario.findMany({
    orderBy: {
      id: "asc",
    },
  })
}

export async function createUser(data: UserFormValues) {
  const hashedPassword = await hash(data.senha, 10)

  await db.usuario.create({
    data: {
      nome: data.nome,
      email: data.email,
      senha: hashedPassword,
      role: data.role,
    },
  })

  revalidatePath("/")
}

export async function updateUser(data: UserUpdateFormValues) {
  const updateData: any = {
    nome: data.nome,
    email: data.email,
    role: data.role,
  }

  if (data.senha) {
    updateData.senha = await hash(data.senha, 10)
  }

  await db.usuario.update({
    where: {
      id: data.id,
    },
    data: updateData,
  })

  revalidatePath("/")
}

export async function deleteUser(id: number) {
  await db.usuario.delete({
    where: {
      id,
    },
  })

  revalidatePath("/")
}

