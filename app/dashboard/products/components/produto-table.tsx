
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { formatTamanhoEmbalagem } from "@/lib/utils"
import { getProdutos } from "../actions/produto-actions"
import { EditProdutoDialog } from "./edit-produto-dialog"
import { DeleteProdutoButton } from "./delete-produto-button"

export async function ProdutoTable() {
  const produtos = await getProdutos()

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Imagem</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Sabor</TableHead>
            <TableHead>Tamanho</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Responsável</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {produtos.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center h-24">
                Nenhum produto encontrado.
              </TableCell>
            </TableRow>
          ) : (
            produtos.map((produto) => (
              <TableRow key={produto.id}>
                <TableCell>
                  <div className="relative w-12 h-12">
                    <Image
                      src={produto.imageURL || "/placeholder.svg"}
                      alt={produto.nome}
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  <div>
                    {produto.nome}
                    <p className="text-sm text-muted-foreground">{produto.descricao}</p>
                  </div>
                </TableCell>
                <TableCell>{produto.sabor}</TableCell>
                <TableCell>
                  <Badge variant="outline">{formatTamanhoEmbalagem(produto.tamanhoEmbalagem)}</Badge>
                </TableCell>
                <TableCell>{produto.categoria.nome}</TableCell>
                <TableCell>{produto.usuario.nome}</TableCell>
                <TableCell className="text-right space-x-2">
                  <EditProdutoDialog produto={produto} />
                  <DeleteProdutoButton produtoId={produto.id} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

