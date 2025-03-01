"use client"

import { useState, useEffect } from "react"
import type { Usuario } from "@prisma/client"

export function useUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const response = await fetch("/api/usuarios")
        if (!response.ok) {
          throw new Error("Falha ao carregar usuários")
        }
        const data = await response.json()
        setUsuarios(data)
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Erro desconhecido"))
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsuarios()
  }, [])

  return { usuarios, isLoading, error }
}