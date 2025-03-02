"use client"

import type React from "react"

import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { toast } from "sonner"
import { logout } from "../actions/auth-actions"

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Adiciona um listener para o evento de expiração do token
    window.addEventListener("auth-error", async () => {
      await logout()
      toast.error("Sua sessão expirou. Por favor, faça login novamente.")
      router.push("/login")
    })

    return () => {
      window.removeEventListener("auth-error", () => {})
    }
  }, [router])

  return children
}

