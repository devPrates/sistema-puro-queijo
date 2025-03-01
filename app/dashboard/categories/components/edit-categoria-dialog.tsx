"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pencil } from "lucide-react"
import { useUsuarios } from "@/lib/hooks"
import type { CategoriaWithUsuario } from "@/lib/types"
import { CategoriaUpdateFormValues, CategoriaUpdateSchema } from "../actions/categoria-schema"
import { updateCategoria } from "../actions/categoria-actions"

interface EditCategoriaDialogProps {
  categoria: CategoriaWithUsuario
}

export function EditCategoriaDialog({ categoria }: EditCategoriaDialogProps) {
  const [open, setOpen] = useState(false)
  const { usuarios, isLoading } = useUsuarios()

  const form = useForm<CategoriaUpdateFormValues>({
    resolver: zodResolver(CategoriaUpdateSchema),
    defaultValues: {
      id: categoria.id,
      nome: categoria.nome,
      descricao: categoria.descricao || "",
      usuarioId: categoria.usuarioId.toString(),
    },
  })

  async function onSubmit(data: CategoriaUpdateFormValues) {
    try {
      await updateCategoria({
        ...data,
        usuarioId: Number.parseInt(data.usuarioId),
      })
      toast.success("Categoria atualizada com sucesso!")
      setOpen(false)
    } catch (error) {
      console.error(error)
      toast.error("Erro ao atualizar categoria")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Pencil className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Categoria</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome da categoria" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="descricao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Descrição da categoria (opcional)" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="usuarioId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Responsável</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um usuário" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {isLoading ? (
                        <SelectItem value="loading" disabled>
                          Carregando usuários...
                        </SelectItem>
                      ) : (
                        usuarios.map((usuario) => (
                          <SelectItem key={usuario.id} value={usuario.id.toString()}>
                            {usuario.nome}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
              </DialogClose>
              <Button type="submit">Salvar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

