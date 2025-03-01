import { NextResponse } from "next/server"
import { db } from "@/lib/prisma"

export async function GET() {
  try {
    const categorias = await db.categoria.findMany({
      orderBy: {
        nome: "asc",
      },
    })

    return NextResponse.json(categorias)
  } catch (error) {
    console.error("Erro ao buscar categorias:", error)
    return NextResponse.json({ error: "Erro ao buscar categorias" }, { status: 500 })
  }
}

