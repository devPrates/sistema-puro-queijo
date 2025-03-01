
import { EditCategoriaDialog } from "./edit-categoria-dialog"
import { DeleteCategoriaButton } from "./delete-categoria-button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getCategorias } from "../actions/categoria-actions"

export async function CategoriaTable() {
  const categorias = await getCategorias()

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Criado por</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categorias.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center h-24">
                Nenhuma categoria encontrada.
              </TableCell>
            </TableRow>
          ) : (
            categorias.map((categoria) => (
              <TableRow key={categoria.id}>
                <TableCell>{categoria.id}</TableCell>
                <TableCell className="font-medium">{categoria.nome}</TableCell>
                <TableCell>{categoria.descricao || "—"}</TableCell>
                <TableCell>{categoria.usuario.nome}</TableCell>
                <TableCell className="text-right space-x-2">
                  <EditCategoriaDialog categoria={categoria} />
                  <DeleteCategoriaButton categoriaId={categoria.id} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

