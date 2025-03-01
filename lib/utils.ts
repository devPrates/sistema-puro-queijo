import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim()
}

export function formatTamanhoEmbalagem(tamanho: string): string {
  switch (tamanho) {
    case "UM_KG":
      return "1 KG"
    case "QUINHENTOS_G":
      return "500g"
    case "DUZENTOS_CINQUENTA_G":
      return "250g"
    default:
      return tamanho
  }
}
