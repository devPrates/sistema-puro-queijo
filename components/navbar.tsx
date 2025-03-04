"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { LogoutButton } from "@/app/login/components/logout-button"

export function DashboardNavbar() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4">
      <SidebarTrigger className="lg:hidden" />

      <div className="relative hidden w-full max-w-sm md:flex">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Pesquisar..." className="w-full rounded-lg bg-muted pl-8" />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-primary"></span>
        </Button>
        <LogoutButton />
        
        
      </div>
    </header>
  )
}

