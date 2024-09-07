import { privacyPolice } from '@/app/constants/privacy-police'

export function Footer () {
  return (
    <footer className="bg-white p-4 w-full">
      <section className='flex flex-wrap justify-center items-center gap-1 sm:gap-4 max-w-screen-xl mx-auto text-caption sm:text-body-sm text-gray-800'>
        <a 
          href={privacyPolice}
          className="underline font-bold" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Política de privacidade
        </a>
        <span>© 2023 - Todos os direitos reservados</span>
      </section>
    </footer>
  )
}