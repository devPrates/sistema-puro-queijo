import { TamanhoEmbalagem } from "@prisma/client"

export const TAMANHOS_EMBALAGEM = [
  { value: TamanhoEmbalagem.UM_KG, label: "1 KG" },
  {
    value: TamanhoEmbalagem.QUINHENTOS_G,
    label: "500g",
  },
  {
    value: TamanhoEmbalagem.DUZENTOS_CINQUENTA_G,
    label: "250g",
  },
]

