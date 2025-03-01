import { NextResponse } from "next/server"
import { db } from "@/lib/prisma"

export async function GET() {
  try {
    const usuarios = await db.usuario.findMany({
      select: {
        id: true,
        nome: true,
        email: true,
        role: true,
      },
      orderBy: {
        nome: "asc",
      },
    })

    return NextResponse.json(usuarios)
  } catch (error) {
    console.error("Erro ao buscar usuários:", error)
    return NextResponse.json({ error: "Erro ao buscar usuários" }, { status: 500 })
  }
}

