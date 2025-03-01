import { Suspense } from "react";
import { CreateUserDialog } from "./components/create-user-dialog";
import { UserTable } from "./components/user-table";

export default function UsersPage() {
    return (
        <div className="container mx-auto py-10 px-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Gerenciamento de Usuários</h1>
                <CreateUserDialog />
            </div>
            <Suspense fallback={<div>Carregando usuários...</div>}>
                <UserTable />
            </Suspense>
        </div>
    )
}