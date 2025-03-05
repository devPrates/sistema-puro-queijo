import { Suspense } from "react";
import { CreateProdutoDialog } from "./components/create-produto-dialog";
import { ProdutoTable } from "./components/produto-table";
import { Button } from "@/components/ui/button";
import { FileText, Filter } from "lucide-react";

export default function ProdutosPage() {
    return (
        <div className="container py-10 px-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Gerenciamento de Produtos</h1>
                <div className="flex items-center space-x-4">
                    <Button size="icon" variant='outline'> <Filter /> </Button>
                    <Button size="icon" variant='outline'> <FileText /> </Button>
                    <CreateProdutoDialog />
                </div>
            </div>
            <Suspense fallback={<div>Carregando produtos...</div>}>
                    <ProdutoTable />
            </Suspense>
        </div>
    )
}