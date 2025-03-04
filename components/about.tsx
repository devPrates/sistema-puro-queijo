import { ArrowRight, House, ShoppingBag, Store } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function About() {
    return (
        <section className="container mx-auto relative py-24">
            <div className="px-6 sm:px-0">
                <div className="mx-auto flex max-w-7xl flex-wrap-reverse items-center">
                    <div className="w-full rounded-xl lg:w-1/2 lg:max-w-lg">
                        <div>
                            <div className="relative w-full max-w-lg">
                                <div className="relative ">
                                    <Image
                                        className="mx-auto rounded-lg object-cover object-center"
                                        alt="hero"
                                        width={500}
                                        height={700}
                                        src="/header.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-16 mt-12 flex flex-col items-center sm:items-start text-left md:mb-0 lg:w-1/2 lg:grow lg:pl-6 xl:mt-0 xl:pl-24">
                        <span className="mb-2 text-xs font-bold uppercase tracking-widest text-[#732c02]">
                            Conheça a Puro Queijo
                        </span>
                        <h1 className="mb-4 text-4xl font-bold leading-none tracking-tighter text-gray-600 md:text-7xl lg:text-5xl">
                            Empresa Pioneira no Mercado
                        </h1>
                        <p className="mb-4 text-left text-base leading-relaxed text-gray-500">
                            Nossa empresa é dedicada a fornecer soluções inovadoras que transformam a maneira como as pessoas trabalham e vivem. Com anos de experiência e uma equipe apaixonada, estamos comprometidos em fazer a diferença em cada projeto que realizamos.
                        </p>
                        <div className="mt-0 max-w-7xl flex-col sm:flex lg:mt-6">
                            <dl className="grid grid-cols-1 gap-12 md:grid-cols-2">
                                <div className="p-6 border-[1px] rounded-lg border-gray-100 bg-gray-50">
                                    <dt
                                        className="mb-5 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-[#e5ac62] text-[#732c02]">
                                        <Store />
                                    </dt>
                                    <dd className="grow">
                                        <h2 className="mb-3 text-lg font-medium tracking-tighter text-gray-600">
                                            Conheça a Empresa
                                        </h2>
                                        <p className="text-base leading-relaxed text-gray-400">
                                            Venha conhecer a historia da fundação da nossa empresa.
                                        </p>
                                        <Button className="mt-6 text-[#e5ac62]" variant="link">Ler mais <ArrowRight /></Button>
                                    </dd>
                                </div>
                                <div className="p-6 border-[1px] rounded-lg border-gray-100 bg-gray-50">
                                <dt
                                        className="mb-5 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-[#e5ac62] text-[#732c02]">
                                        <ShoppingBag />
                                    </dt>
                                    <dd className="grow">
                                        <h2 className="mb-3 text-lg font-medium tracking-tighter text-gray-600">
                                            Conheça os Produtos
                                        </h2>
                                        <p className="text-base leading-relaxed text-gray-400">
                                            Venha conhecer todos os produtos disponiveis na loja.
                                        </p>
                                        <Button className="mt-6 text-[#e5ac62]" variant="link">Ler mais <ArrowRight /></Button>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

