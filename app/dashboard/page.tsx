import { cookies } from "next/headers"
import { verify } from "jsonwebtoken"
import ChartDashboard from "@/components/chart-dashboard"
import { ChartColumnStacked, ShoppingBag, User2 } from "lucide-react"

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
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-3xl font-bold mb-3">Dashboard</h1>
      </div>

      <div className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center  space-x-6">
              <div>
                <User2 className="w-10 h-10" />
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Total de Usuários</div>
                <div className="text-2xl font-bold">4</div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center  space-x-6">
              <div>
                <ChartColumnStacked className="w-10 h-10" />
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Total de Categorias</div>
                <div className="text-2xl font-bold">5</div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center  space-x-6">
              <div>
                <ShoppingBag className="w-10 h-10" />
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Total de Produtos</div>
                <div className="text-2xl font-bold">21</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <ChartDashboard />
      </div>
    </div>
  )
}

