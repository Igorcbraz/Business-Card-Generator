import Image from 'next/image'

import { UserRegisterForm } from '@/components/UserRegisterForm'

import LandingIllustration from '@/assets/landingpage-illustration.png'

export default function Home() {
  return (
    <main className='flex flex-grow justify-center items-center flex-col gap-8 max-w-screen-xl mx-auto p-5 w-full'>
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
        <UserRegisterForm />
      </section>
    </main>
  )
}
