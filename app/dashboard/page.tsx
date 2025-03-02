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
    <div className="container py-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <LogoutButton />
      </div>
      <p className="mt-4 text-muted-foreground">Bem-vindo, {email}!</p>
    </div>
  )
}

