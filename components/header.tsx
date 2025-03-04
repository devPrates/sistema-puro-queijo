import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <section className="container mx-auto pt-20 sm:pt-12 px-5 sm:px-0" id="home">
            <div className=" flex flex-col items-center text-center">
                <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">A Hora Mais Saborosa do Dia</h1>
                <p className="mb-8 max-w-3xl text-zinc-600 lg:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat
                    omnis! Porro facilis quo animi consequatur. Explicabo.
                </p>
                <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
                    <Button>Ver Produtos</Button>
                    <Button variant={'outline'}>Sobre Nós</Button>
                </div>
            </div>
            <div className="mt-12 aspect-video overflow-clip md:aspect-auto md:h-[420px]">
                <div className="relative mx-auto flex max-w-3xl flex-col">
                    <div
                        className="absolute right-[calc(100%+63px)] top-0 hidden size-[64px] rounded-2xl bg-zinc-100 ring-1 ring-inset ring-accent-foreground/10 md:block">
                        <Image
                            src="/icon-chipa.png"
                            alt="placeholder hero"
                            fill
                            className="h-full w-full rounded-md object-cover object-center p-3" />
                    </div>
                    <div
                        className="absolute right-[calc(100%+195px)] top-[52px] hidden size-[64px] rounded-2xl bg-zinc-100 ring-1 ring-inset ring-accent-foreground/10 md:block">
                        <Image
                            src="/icon-pao.png"
                            alt="placeholder hero"
                            fill
                            className="h-full w-full rounded-md object-cover object-center p-3"
                        />
                    </div>
                    <div
                        className="absolute right-[calc(100%+34px)] top-[144px] hidden size-[64px] rounded-2xl bg-zinc-100 ring-1 ring-inset ring-accent-foreground/10 md:block">
                        <Image
                            src="/icon-coxinha.png"
                            alt="placeholder hero"
                            fill
                            className="h-full w-full rounded-md object-cover object-center p-3"
                        />
                    </div>
                    <div
                        className="absolute right-[calc(100%+268px)] top-[164px] hidden size-[64px] rounded-2xl bg-zinc-100 ring-1 ring-inset ring-accent-foreground/10 md:block">
                        <Image
                            src="/icon-chipa.png"
                            alt="placeholder hero"
                            fill
                            className="h-full w-full rounded-md object-cover object-center p-3"
                        />
                    </div>
                    <div
                        className="absolute right-[calc(100%+156px)] top-[240px] hidden size-[64px] rounded-2xl bg-zinc-100 ring-1 ring-inset ring-accent-foreground/10 md:block">
                        <Image
                            src="/logo.png"
                            alt="placeholder hero"
                            fill
                            className="h-full w-full rounded-md object-cover object-center p-3"
                        />
                    </div>
                    <div
                        className="absolute right-[calc(100%+242px)] top-[340px] hidden size-[64px] rounded-2xl bg-zinc-100 ring-1 ring-inset ring-accent-foreground/10 md:block">
                        <Image
                            src="/icon-coxinha.png"
                            alt="placeholder hero"
                            fill
                            className="h-full w-full rounded-md object-cover object-center p-3"
                        />
                    </div>
                    <div
                        className="absolute right-[calc(100%+66px)] top-[366px] hidden size-[64px] rounded-2xl bg-zinc-100 ring-1 ring-inset ring-accent-foreground/10 md:block">
                        <Image
                            src="/icon-pao.png"
                            alt="placeholder hero"
                            fill
                            className="h-full w-full rounded-md object-cover object-center p-3"
                        />
                    </div>
                    <div
                        className="absolute left-[calc(100%+53px)] top-0 hidden size-[64px] rounded-2xl bg-zinc-100 ring-1 ring-inset ring-accent-foreground/10 md:block">
                        <Image
                            src="/logo.png"
                            alt="placeholder hero"
                            fill
                            className="h-full w-full rounded-md object-cover object-center p-3"
                        />
                    </div>
                    <div
                        className="absolute left-[calc(100%+202px)] top-[34px] hidden size-[64px] rounded-2xl bg-zinc-100 ring-1 ring-inset ring-accent-foreground/10 md:block">
                        <Image
                            src="/icon-pao.png"
                            alt="placeholder hero"
                            fill
                            className="h-full w-full rounded-md object-cover object-center p-3"
                        />
                    </div>
                    <div
                        className="absolute left-[calc(100%+97px)] top-[141px] hidden size-[64px] rounded-2xl bg-zinc-100 ring-1 ring-inset ring-accent-foreground/10 md:block">
                        <Image
                            src="/icon-chipa.png"
                            alt="placeholder hero"
                            fill
                            className="h-full w-full rounded-md object-cover object-center p-3"
                        />
                    </div>
                    <div
                        className="absolute left-[calc(100%+282px)] top-[138px] hidden size-[64px] rounded-2xl bg-zinc-100 ring-1 ring-inset ring-accent-foreground/10 md:block">
                        <Image
                            src="/icon-coxinha.png"
                            alt="placeholder hero"
                            fill
                            className="h-full w-full rounded-md object-cover object-center p-3"
                        />
                    </div>
                    <div
                        className="absolute left-[calc(100%+42px)] top-[262px] hidden size-[64px] rounded-2xl bg-zinc-100 ring-1 ring-inset ring-accent-foreground/10 md:block">
                        <Image
                            src="/icon-pao.png"
                            alt="placeholder hero"
                            fill
                            className="h-full w-full rounded-md object-cover object-center p-3"
                        />
                    </div>
                    <div
                        className="absolute left-[calc(100%+234px)] top-[282px] hidden size-[64px] rounded-2xl bg-zinc-100 ring-1 ring-inset ring-accent-foreground/10 md:block">
                        <Image
                            src="/icon-chipa.png"
                            alt="placeholder hero"
                            fill
                            className="h-full w-full rounded-md object-cover object-center p-3"
                        />
                    </div>
                    <div
                        className="absolute left-[calc(100%+112px)] top-[365px] hidden size-[64px] rounded-2xl bg-zinc-100 ring-1 ring-inset ring-accent-foreground/10 md:block">
                        <Image
                            src="/icon-coxinha.png"
                            alt="placeholder hero"
                            fill
                            className="h-full w-full rounded-md object-cover object-center p-3"
                        />
                    </div>
                    <div className="container mx-auto">
                        <div
                            className=" flex aspect-[27/10] min-h-[600px] w-full flex-col items-center overflow-clip rounded-xl border border-border bg-zinc-100 shadow-sm">
                            <Image
                                src="/header.jpg"
                                alt="placeholder hero"
                                fill
                                className="rounded-md object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}