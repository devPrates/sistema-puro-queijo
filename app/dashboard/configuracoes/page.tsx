export default function ConfiguracoesPage() {
    return (
      <div className="grid gap-4">
        <h1 className="text-2xl font-bold">Configurações</h1>
        <div className="rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-xl font-semibold">Perfil</h2>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nome
              </label>
              <input id="name" type="text" className="rounded-md border p-2" defaultValue="Administrador" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input id="email" type="email" className="rounded-md border p-2" defaultValue="admin@exemplo.com" />
            </div>
            <button className="w-fit rounded-md bg-primary px-4 py-2 text-primary-foreground">Salvar</button>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-xl font-semibold">Notificações</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Emails</div>
                <div className="text-sm text-muted-foreground">Receber notificações por email</div>
              </div>
              <div className="h-6 w-10 rounded-full bg-muted"></div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Push</div>
                <div className="text-sm text-muted-foreground">Receber notificações push</div>
              </div>
              <div className="h-6 w-10 rounded-full bg-muted"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  