'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const mockCategories = [
  { id: "description", label: "Pão de Queijo", content: "Fam locavore kickstarter distillery...", image: "/chipa.png", color: "Blue", size: "Medium", quantity: 4 },
  { id: "reviews", label: "Chipa", content: "Customer reviews go here...", image: "/placeholder.svg", color: "Red", size: "Large", quantity: 2 },
  { id: "details", label: "Coxinha", content: "Product details and specifications...", image: "/placeholder.svg", color: "Green", size: "Small", quantity: 6 },
];

export default function Products() {
  const [selectedTab, setSelectedTab] = useState(mockCategories[0]);

  return (
    <section className="text-gray-600 body-font overflow-hidden mt-16">

      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-[#732c02] tracking-widest font-medium title-font mb-1 uppercase">Venha conhecer nossos produtos</h2>
        <h1 className="sm:text-4xl text-2xl font-bold title-font text-gray-900">Aqui você encontra os melhores produtos</h1>
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
              <span className="text-gray-500">Color</span>
              <span className="ml-auto text-gray-900">{selectedTab.color}</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Size</span>
              <span className="ml-auto text-gray-900">{selectedTab.size}</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Quantity</span>
              <span className="ml-auto text-gray-900">{selectedTab.quantity}</span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
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
              <span className="text-gray-500">No image available</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
