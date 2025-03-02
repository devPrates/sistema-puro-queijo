"use client"

import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { logout } from "../actions/auth-actions"

export function LogoutButton() {
  async function handleLogout() {
    await logout()
    window.location.href = "/login"
  }

  return (
    <Button variant="destructive" onClick={handleLogout} title="Sair">
      Sair
    </Button>
  )
}

