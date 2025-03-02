"use server"

import { cookies } from "next/headers"
import { db } from "@/lib/prisma"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { LoginFormValues } from "./auth-schema"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"
const SESSION_EXPIRY = 60 * 60 * 24 // 24 horas em segundos

export async function login(data: LoginFormValues): Promise<{ success: boolean; message?: string }> {
  try {
    // Busca o usuário pelo email
    const user = await db.usuario.findUnique({
      where: {
        email: data.email,
      },
    })

    if (!user) {
      return { success: false }
    }

    // Verifica a senha
    const passwordMatch = await compare(data.senha, user.senha)

    if (!passwordMatch) {
      return { success: false }
    }

    // Cria o token JWT
    const token = sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role,
      },
      JWT_SECRET,
      {
        expiresIn: SESSION_EXPIRY,
      },
    )

    // Salva o token nos cookies
    const cookieStore = cookies()
    cookieStore.set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: SESSION_EXPIRY,
      path: "/",
    })

    return { success: true }
  } catch (error) {
    console.error("Erro ao fazer login:", error)
    return {
      success: false,
      message: "Ocorreu um erro ao fazer login",
    }
  }
}

export async function logout() {
  const cookieStore = cookies()
  cookieStore.delete("session")
  return { success: true }
}

