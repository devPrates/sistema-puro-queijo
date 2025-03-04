import { LoginForm } from "./components/login-form";
import Image from 'next/image';


export default function LoginPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-sm px-4">
        <div className="flex justify-center mb-6">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </div>
        <div className="text-center mb-8">
          <p className="text-muted-foreground">Entre com suas credenciais para acessar o sistema</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

