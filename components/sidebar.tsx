"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { BarChart3, ChartColumnStacked, Home, Settings, ShoppingBag, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Definição dos itens de menu
const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/dashboard",
    segment: null, // Página inicial não tem segmento
  },
  {
    title: "Usuários",
    icon: Users,
    href: "/dashboard/users",
    segment: "users",
  },
  {
    title: "Categorias",
    icon: ChartColumnStacked,
    href: "/dashboard/categories",
    segment: "categories",
  },
  {
    title: "Produtos",
    icon: ShoppingBag,
    href: "/dashboard/products",
    segment: "products",
  },
  {
    title: "Configurações",
    icon: Settings,
    href: "/dashboard/configuracoes",
    segment: "configuracoes",
  },
]

export function DashboardSidebar() {
  // Hook do Next.js para obter o segmento atual da URL
  const segment = useSelectedLayoutSegment()

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <span className="font-bold">PQ</span>
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Dashboard</span>
                  <span className="text-xs text-muted-foreground">Administração</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    // Adiciona a classe de cor de fundo quando o item está ativo
                    className={segment === item.segment ? "bg-[#e5ac62]" : ""}
                  >
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4">
          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm font-medium">Precisa de ajuda?</p>
            <p className="text-xs text-muted-foreground">
              Acesse nossa documentação ou entre em contato com o suporte.
            </p>
            <Link href="#" className="mt-2 inline-block text-xs font-medium text-primary">
              Centro de Ajuda
            </Link>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
