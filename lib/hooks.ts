"use client"

import { useState, useEffect } from "react"
import type { Usuario, Categoria } from "@prisma/client"

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

export function useCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchCategorias() {
      try {
        const response = await fetch("/api/categorias")
        if (!response.ok) {
          throw new Error("Falha ao carregar categorias")
        }
        const data = await response.json()
        setCategorias(data)
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Erro desconhecido"))
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategorias()
  }, [])

  return { categorias, isLoading, error }
}

