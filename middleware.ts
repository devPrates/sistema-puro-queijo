import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verify } from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

// Rotas que requerem autenticação
const protectedRoutes = ["/dashboard"]
// Rotas de autenticação
const authRoutes = ["/login"]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get("session")?.value

  // Verifica se é uma rota protegida
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route))
  // Verifica se é uma rota de autenticação
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route))

  // Se não tem token e tenta acessar rota protegida
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Se tem token e tenta acessar rota de autenticação
  if (token && isAuthRoute) {
    try {
      verify(token, JWT_SECRET)
      return NextResponse.redirect(new URL("/dashboard", request.url))
    } catch {
      // Se o token for inválido, remove-o
      const response = NextResponse.next()
      response.cookies.delete("session")
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}

