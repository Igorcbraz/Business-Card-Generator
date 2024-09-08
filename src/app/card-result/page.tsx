import Image from 'next/image'

import { freeTrial } from '@/constants/free-trial'

import { Button } from '@/components/Button'

import ArrowIcon from '@/assets/arrow.svg'
import LandingIllustration from '@/assets/landingpage-illustration.png'
import Logo from '@/assets/symbol.svg'
import DownloadIcon from '@/assets/download.svg'
import ArrowRightWhite from '@/assets/arrow-right-white.svg'

export default function CardResultPage() {
  return (
    <main className='flex flex-grow flex-row justify-evenly items-start lg:items-center flex-wrap max-w-screen-xl mx-auto p-5 w-full'>
      <Image
        src={LandingIllustration}
        alt="Ilustração de um homem com um rolo de pintar, pintando seu seu cartão de visita"
        className="hidden lg:block lg:w-[28rem] xl:w-[32rem]"
      />
      <section className='flex flex-col justify-between items-start gap-5 w-full sm:w-[600px] lg:w-[510px]'>
        <div className='flex items-center justify-between gap-4'>
          <Image
            src={ArrowIcon}
            alt="Seta indicando para baixo"
            className="w-3 h-3"
          />
          <p className='text-subtitle-sm'>
            Gerar outro cartão
          </p>
        </div>
        <div className='flex flex-row justify-center items-center bg-white rounded-3xl p-5 h-[160px] sm:h-[260px] w-full'>
          <Image
            src={Logo}
            alt="Logo da empresa"
            className='w-[45px] h-[38px] sm:w-[70px] sm:h-[60px]'
          />
          <div className='w-[3px] h-full bg-primary-800 mx-5'></div>
          <div className='flex flex-col gap-6 text-black text-subtitle-xs sm:text-subtitle-sm'>
            <p>{'Nome e Sobrenome'}</p>
            <p>{'(00) 0000-0000'}</p>
            <p>{'meuemail@email.com'}</p>
          </div>
        </div>
        <Button
          type="button"
          variant='highlight'
          showShadow
          disabled
          className='w-full flex justify-center items-center gap-3'
        >
          <Image
            src={DownloadIcon}
            alt="Logo da empresa"
            width={24}
            height={24}
          />
          Baixar cartão
        </Button>
        <a 
          href={freeTrial} 
          target="_blank" 
          rel="noopener noreferrer"
          className='self-center text-center w-[72%] sm:w-full flex justify-center items-center gap-0 sm:gap-3 text-primary-800 font-bold uppercase text-caption sm:text-body-md'
        >
          Fazer um teste grátis do RD Station Marketing
          <Image
            src={ArrowRightWhite}
            alt="Seta indicando para a direita"
            width={24}
            height={24}
          />
        </a>
      </section>
    </main>
  )
}