import { Suspense } from "react";
import { CreateUserDialog } from "./components/create-user-dialog";
import { UserTable } from "./components/user-table";
import { Button } from "@/components/ui/button";
import { FileText, Filter } from "lucide-react";

export default function UsersPage() {
    return (
        <div className="container mx-auto py-10 px-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Gerenciamento de Usuários</h1>
                <div className="flex items-center space-x-4">
                    <Button size="icon" variant='outline'> <Filter /> </Button>
                    <Button size="icon" variant='outline'> <FileText /> </Button>
                    <CreateUserDialog />
                </div>
            </div>
            <Suspense fallback={<div>Carregando usuários...</div>}>
                <UserTable />
            </Suspense>
        </div>
    )
}