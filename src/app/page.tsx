import Image from 'next/image'

import { privacyPolice } from '@/app/constants/privacy-police'

import LandingIllustration from './assets/landingpage-illustration.png'

export default function Home() {
  return (
    <main className='flex flex-grow justify-center items-center flex-col gap-8 max-w-screen-xl mx-auto px-4 w-full'>
      <section className="flex justify-between items-center flex-col gap-4">
        <h1 className="text-center font-bold font-RedHatDisplay text-heading-xs md:text-heading-md">
          Gerador de Cartão de Visita
        </h1>
        <p className="w-[85%] md:w-[70%] text-center text-subtitle-xxs md:text-subtitle-sm">
          Crie grátis seu cartão de visita em passos rápidos! Você o insere no Instagram e demais canais digitais.
        </p>
      </section>
      <section className="flex justify-center flex-wrap items-center w-full lg:justify-between gap-5">
        <Image
          src={LandingIllustration}
          alt="Ilustração de um homem com um rolo de pintar, pintando seu seu cartão de visita"
          className="w-[17rem] sm:w-[18rem] md:w-[20rem] lg:w-[25rem] xl:w-[30rem]"
        />
        <form className="grid gap-5">
          <div className="col-span-2">
            <label htmlFor="name" className="block text-subtitle-xs font-bold mb-2">Nome*</label>
            <input
              type="text"
              id="name"
              name="name"
              className="input-default"
              placeholder="nome@email.com"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="phone" className="block text-subtitle-xs font-bold mb-2">Telefone*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="input-default"
              placeholder="Digite seu telefone"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="email" className="block text-subtitle-xs font-bold mb-2">E-mail*</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-default"
              placeholder="Digite seu e-mail"
            />
          </div>
          <div className="col-span-2 text-caption text-gray-300">
            <ul className="list-disc list-inside">
              <li>
                Ao preencher o formulário, concordo <strong>*</strong> em receber comunicações de acordo com meus interesses.
              </li>
              <li>
                Ao informar meus dados, eu concordo com a
                <a 
                  href={privacyPolice}
                  className="underline ml-1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Política de privacidade
                </a>
              </li>
            </ul>
            <p className="text-gray-200 mt-4">
              <strong>*</strong> Você pode alterar suas permissões de comunicação a qualquer tempo.
            </p>
          </div>
          <button
            type="submit"
            className="col-span-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Enviar
          </button>
        </form>
      </section>
    </main>
  )
}
