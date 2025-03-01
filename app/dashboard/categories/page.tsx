import { Suspense } from "react";
import { CreateCategoriaDialog } from "./components/create-categoria-dialog";
import { CategoriaTable } from "./components/categoria-table";

export default function CategoriasPage() {
    return (
        <div className="container py-10 px-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Gerenciamento de Categorias</h1>
                    <CreateCategoriaDialog />
            </div>
            <Suspense fallback={<div>Carregando categorias...</div>}>
                    <CategoriaTable />
            </Suspense>
        </div>
    )
}
