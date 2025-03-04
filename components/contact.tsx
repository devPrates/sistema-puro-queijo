'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="text-gray-600 body-font relative px-6 sm:px-0">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-[#732c02] tracking-widest font-medium title-font mb-1 uppercase">Ficou interessado em nossos produtos?</h2>
        <h1 className="sm:text-4xl text-2xl font-bold title-font text-gray-900">Entre em Contato com Nossa Equipe</h1>
      </div>
      <div className="container px-5 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d917.778807106511!2d-54.22439497907325!3d-23.056236737907206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1741040699529!5m2!1spt-BR!2sbr"
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-md">Endereço</h2>
              <p className="mt-1 text-sm">Rua Exemplo, 123 - Bairro, Cidade - Estado, 12345-678</p>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-md mt-2">Telefone</h2>
              <p className="mt-1 text-sm">(11) 1234-5678</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-md">EMAIL</h2>
              <a className=" text-sm">example@email.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-md mt-4">Horario Atendimento</h2>
              <p className="text-sm">Segunda a Sexta: 9h às 18h</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-xl mb-1 font-bold title-font">Envie um Email</h2>
          <p className="mb-5 text-gray-600 text-sm">Ao preencher o formulario o email sera enviado para nossa equipe.</p>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nome</label>
              <Input type="text" id="name" name="name" value={form.name} onChange={handleChange} />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <Input type="email" id="email" name="email" value={form.email} onChange={handleChange} />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Mensagem</label>
              <Textarea id="message" name="message" value={form.message} onChange={handleChange} />
            </div>
            <Button type="submit" className="w-full">Enviar</Button>
          </form>
        </div>
      </div>
    </section>
  );
};


