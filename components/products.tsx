'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const mockCategories = [
  { id: "description", label: "Pão de Queijo", content: "Nosso pão de queijo artesanal é a combinação perfeita de tradição e sabor, trazendo a autêntica receita mineira em cada mordida. Feito com ingredientes selecionados e queijo de alta qualidade, ele é crocante por fora e irresistivelmente macio e cremoso por dentro. Sem conservantes artificiais, é uma opção prática e deliciosa para qualquer momento do dia. Basta assar por alguns minutos para sentir o aroma envolvente e aproveitar o sabor caseiro que remete às melhores lembranças.", image: "/pao-queijo.jpg", color: "Blue", size: "Medium", quantity: 4 },
  { id: "reviews", label: "Chipa", content: "A chipa é a combinação perfeita de sabor e tradição, trazendo a essência da culinária sul-americana em uma receita simples e irresistível. Feita com queijo de verdade e ingredientes selecionados, ela tem uma textura levemente crocante por fora e macia por dentro, derretendo na boca a cada mordida. Perfeita para acompanhar um café fresquinho ou para matar a fome a qualquer hora do dia, sua praticidade permite que fique pronta em minutos, sempre com aquele aroma delicioso que remete ao aconchego de casa. Experimente e sinta o sabor autêntico da verdadeira chipa artesanal.", image: "/chipa.png", color: "Red", size: "Large", quantity: 2 },
  { id: "details", label: "Coxinha", content: "Nossa coxinha é a união perfeita entre crocância e cremosidade, feita com uma massa leve e saborosa que envolve um recheio irresistível de frango suculento e bem temperado. Cada mordida traz o equilíbrio ideal entre textura e sabor, com aquele toque caseiro que lembra as melhores lembranças da infância. Frita até atingir a douração perfeita, ela é ideal para qualquer momento, seja para um lanche rápido ou para compartilhar em boas companhias. Experimente e descubra o verdadeiro prazer de uma coxinha feita com carinho e tradição.", image: "/coxinha.jpg", color: "Green", size: "Small", quantity: 6 },
];

export default function Products() {
  const [selectedTab, setSelectedTab] = useState(mockCategories[0]);

  return (
    <section className="text-gray-600 body-font overflow-hidden mt-16" id='produtos'>

      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-[#732c02] tracking-widest font-medium title-font mb-1 uppercase">Venha conhecer nossos produtos</h2>
        <h1 className="text-4xl text-center font-bold leading-none tracking-tighter text-gray-600 md:text-7xl lg:text-5xl">Aqui você encontra os melhores produtos</h1>
      </div>

      <div className="container px-5 mt-10 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{mockCategories[0].label}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Pão de Queijo Tradicional</h1>

            <Tabs defaultValue={mockCategories[0].id} onValueChange={(value) => {
              const tab = mockCategories.find((tab) => tab.id === value);
              if (tab) setSelectedTab(tab);
            }}>
              <TabsList className="mb-4">
                {mockCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>{category.label}</TabsTrigger>
                ))}
              </TabsList>

              {mockCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <p className="leading-relaxed mb-4">{category.content}</p>
                </TabsContent>
              ))}
            </Tabs>

            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Carboidratos</span>
              <span className="ml-auto text-gray-900">16g</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Proteinas</span>
              <span className="ml-auto text-gray-900">3,2g</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Gorduras Totais</span>
              <span className="ml-auto text-gray-900">7,3g</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Size</span>
              <span className="ml-auto text-gray-900">1kg, 500g, 250g</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Sabores</span>
              <span className="ml-auto text-gray-900">Tradicional, Calabresa</span>
            </div>
            <div>
              <Button size={'sm'}>Ver mais detalhes <ArrowRight /></Button>
            </div>
          </div>

          {/* Imagem dinâmica */}
          {selectedTab?.image ? (
            <Image
              alt="imagem do produto"
              src={selectedTab.image}
              height={400}
              width={400}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            />
          ) : (
            <div className="lg:w-1/2 w-full lg:h-auto h-64 flex items-center justify-center bg-gray-200 rounded">
              <span className="text-gray-500">Imagem não encontrada</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
