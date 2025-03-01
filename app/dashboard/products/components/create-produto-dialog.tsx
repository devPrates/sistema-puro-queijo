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
import { PlusCircle } from "lucide-react"
import { useUsuarios, useCategorias } from "@/lib/hooks"
import { TAMANHOS_EMBALAGEM } from "@/lib/constants"
import { slugify } from "@/lib/utils"
import Image from "next/image"
import { ProdutoFormValues, ProdutoSchema } from "../actions/produto-schema"
import { createProduto } from "../actions/produto-actions"

export function CreateProdutoDialog() {
  const [open, setOpen] = useState(false)
  const { usuarios, isLoading: isLoadingUsuarios } = useUsuarios()
  const { categorias, isLoading: isLoadingCategorias } = useCategorias()

  const form = useForm<ProdutoFormValues>({
    resolver: zodResolver(ProdutoSchema),
    defaultValues: {
      nome: "",
      imageURL: "",
      sabor: "",
      descricao: "",
      tamanhoEmbalagem: undefined,
      categoriaId: "",
      usuarioId: "",
    },
  })

  const watchNome = form.watch("nome")
  const watchImageURL = form.watch("imageURL")

  async function onSubmit(data: ProdutoFormValues) {
    try {
      await createProduto({
        ...data,
        slug: slugify(data.nome),
        categoriaId: Number.parseInt(data.categoriaId),
        usuarioId: Number.parseInt(data.usuarioId),
      })
      toast.success("Produto criado com sucesso!")
      form.reset()
      setOpen(false)
    } catch (error) {
      console.error(error)
      toast.error("Erro ao criar produto")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Novo Produto
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Criar Novo Produto</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Nome do produto" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sabor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sabor</FormLabel>
                      <FormControl>
                        <Input placeholder="Sabor do produto" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="imageURL"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>URL da Imagem</FormLabel>
                      <FormControl>
                        <Input placeholder="https://exemplo.com/imagem.jpg" {...field} />
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
                        <Textarea placeholder="Descrição do produto (opcional)" {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border aspect-square overflow-hidden">
                  {watchImageURL ? (
                    <Image
                      src={watchImageURL}
                      width={200}
                      height={200}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      Preview da imagem
                    </div>
                  )}
                </div>
                <FormField
                  control={form.control}
                  name="tamanhoEmbalagem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tamanho da Embalagem</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um tamanho" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {TAMANHOS_EMBALAGEM.map(({ value, label }) => (
                            <SelectItem key={value} value={value}>
                              {label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="categoriaId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Categoria</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione uma categoria" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {isLoadingCategorias ? (
                            <SelectItem value="loading" disabled>
                              Carregando categorias...
                            </SelectItem>
                          ) : (
                            categorias.map((categoria) => (
                              <SelectItem key={categoria.id} value={categoria.id.toString()}>
                                {categoria.nome}
                              </SelectItem>
                            ))
                          )}
                        </SelectContent>
                      </Select>
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
                          {isLoadingUsuarios ? (
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
              </div>
            </div>
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

