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
    <Button variant="ghost" size="icon" onClick={handleLogout} title="Sair">
      <LogOut className="h-4 w-4" />
    </Button>
  )
}

