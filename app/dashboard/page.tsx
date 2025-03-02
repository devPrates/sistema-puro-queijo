import { cookies } from "next/headers"
import { verify } from "jsonwebtoken"
import { LogoutButton } from "../login/components/logout-button"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export default function DashboardPage() {
  const token = cookies().get("session")?.value
  let email = "Usuário"

  if (token) {
    try {
      const decoded = verify(token, JWT_SECRET) as { email: string }
      email = decoded.email
    } catch (error) {
      // Ignora erro de decodificação
    }
  }

  return (
    <div className="container py-6">
      <p className="my-2 text-muted-foreground">Bem-vindo, {email}!</p>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <div className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <div className="text-sm font-medium text-muted-foreground">Total de Usuários</div>
          <div className="text-2xl font-bold">1,234</div>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="text-sm font-medium text-muted-foreground">Receita Mensal</div>
          <div className="text-2xl font-bold">R$ 12,345</div>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="text-sm font-medium text-muted-foreground">Novos Clientes</div>
          <div className="text-2xl font-bold">321</div>
        </div>
      </div>
    </div>
    </div>
  )
}

