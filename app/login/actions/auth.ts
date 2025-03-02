import { cookies } from "next/headers"
import { verify } from "jsonwebtoken"
import type { JWTPayload } from "jose"
import { db } from "@/lib/prisma"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export interface SessionUser {
  userId: number
  email: string
  role: string
}

export async function getSession(): Promise<SessionUser | null> {
  const token = cookies().get("session")

  if (!token) {
    return null
  }

  try {
    const verified = verify(token.value, JWT_SECRET) as JWTPayload & SessionUser

    return {
      userId: verified.userId,
      email: verified.email,
      role: verified.role,
    }
  } catch (error) {
    return null
  }
}

export async function validateSession(session: SessionUser): Promise<boolean> {
  try {
    // Verifica se o usuário ainda existe no banco
    const user = await db.usuario.findUnique({
      where: {
        id: session.userId,
      },
    })

    if (!user) {
      throw new Error("Usuário não encontrado")
    }

    return true
  } catch (error) {
    throw new Error("Sessão inválida")
  }
}

export function isAuthenticated(): boolean {
  const token = cookies().get("session")
  return !!token
}

