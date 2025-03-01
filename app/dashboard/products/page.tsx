import { Suspense } from "react";
import { CreateProdutoDialog } from "./components/create-produto-dialog";
import { ProdutoTable } from "./components/produto-table";

export default function ProdutosPage() {
    return (
        <div className="container py-10 px-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Gerenciamento de Produtos</h1>
                    <CreateProdutoDialog />
            </div>
            <Suspense fallback={<div>Carregando produtos...</div>}>
                    <ProdutoTable />
            </Suspense>
        </div>
    )
}