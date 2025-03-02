import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

export default function Header() {
    return (
        <>
            <header className="min-h-full container mx-auto flex items-center justify-center">
                <div className="relative mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
                    <div className="flex flex-col items-center justify-between lg:flex-row py-16">
                        <div className=" relative ">
                            <div className="absolute -top-10 -right-3 z-0 hidden md:block">
                                <Image
                                    alt="Logo Image"
                                    width={150}
                                    height={150}
                                    src="/logo.png"
                                />
                            </div>
                            <div className="lg:max-w-xl lg:pr-5 relative z-40 text-center lg:text-left">
                                <p className="flex text-sm uppercase text-g1 justify-center md:justify-start">
                                    Bem-vindo
                                </p>
                                <h2 className="mb-6 max-w-lg text-5xl font-normal leading-snug tracking-tight text-g1 sm:text-6xl sm:leading-snug">
                                    A hora Mais
                                    <span className="my-1 inline-block border-b-8 border-g4 bg-white font-bold text-g4 animate__animated animate__flash">Saborosa </span> do dia
                                </h2>
                                <p className="text-base text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque it.</p>
                                <div className="mt-10 flex justify-center items-center space-x-4 sm:flex-row sm:justify-start">
                                    <Button> Ver Produtos </Button>
                                    <Button variant={'outline'}>Sobre nós <ArrowDown /></Button>
                                </div>
                            </div>


                        </div>
                        <div className="relative mt-12 sm:mt-0 lg:ml-32 lg:block lg:w-1/2">

                            <div className="bg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
                                <Image
                                    alt="About Us"
                                    src="/header.jpg"
                                    width={450}
                                    height={400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}