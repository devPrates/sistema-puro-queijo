'use client'

import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Menu, X } from 'lucide-react';
import { Fragment, useEffect, useState } from "react";
import { courgette } from "@/lib/fonts";
import { Button } from "./ui/button";

const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" }); // Rola suavemente até o elemento
  }
};

const sections = ["home", "produtos", "sobre", "contato"];

export default function PageNavbar() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => {
      let currentSection = activeSection;

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [activeSection]);

  return (
    <>
      <Popover className="bg-[#e5ac62] sticky top-0 flex items-center px-6 py-2 h-[10vh] z-50 shadow-md">
        <div className="container mx-auto flex items-center">
          <div className="flex gap-2 items-center">
            <h1 className={`${courgette.className} font-bold text-2xl text-[#732c02]`}>Puro Quejo</h1>
          </div>
          <div className="grow">
            <div className={`hidden sm:flex items-center justify-end gap-2 md:gap-8 text-lg font-semibold`} >
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() =>
                    handleScroll(section)}
                  className={`${activeSection === section
                      ? "text-[#732c02]"
                      : ""
                    } hover:underline`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>

              ))}
              <Link href="/login">
                <Button variant={'outline'} className="font-bold">Login</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-website-primary p-2 text-black hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Abrir Menu</span>
            <Menu className="h5 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30" />
        <Transition
          as={Fragment}
          enter="duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-1000 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
            <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <h1 className={`${courgette.className} font-bold text-lg text-[#732c02]`}>Puro Quejo</h1>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Fechar Menu</span>
                      <X className="h5 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className={`flex flex-col items-start gap-4 pl-4 text-lg font-semibold`} >
                    {sections.map((section) => (
                      <button
                        key={section}
                        onClick={() =>
                          handleScroll(section)}
                        className={`${activeSection === section
                            ? "text-[#732c02]"
                            : ""
                          } hover:underline`}
                      >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </button>

                    ))}
                    <Link href="/login">
                      <Button variant={'outline'} className="font-bold">Login</Button>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
}