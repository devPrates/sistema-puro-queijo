import { LoginForm } from "./components/login-form";


export default function LoginPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-sm px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Login</h1>
          <p className="text-muted-foreground">Entre com suas credenciais para acessar o sistema</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

