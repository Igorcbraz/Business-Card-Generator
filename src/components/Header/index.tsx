import Image from 'next/image'
import Logo from '@/assets/logo.svg'

export function Header () {
  return (
    <header className="bg-white py-6 px-3 sm:px-5">
      <section className='flex justify-between items-center gap-4 max-w-screen-xl mx-auto'>
        <Image
          src={Logo}
          alt="Logo Resultados Digitais"
          className="w-24 sm:w-32 md:w-36 lg:w-40 xl:w-48"
        />
        <h1 className='text-gray-900 text-heading-xxs font-DarkerGrotesque font-bold sm:text-heading-xs'>
          Gerador de Cartão de Visita
        </h1>
      </section>
    </header>
  )
}
