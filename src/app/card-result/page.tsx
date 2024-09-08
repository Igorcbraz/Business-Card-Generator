import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

import { freeTrial } from '@/constants/free-trial'

import { Button } from '@/components/Button'
import { BusinessCard } from '@/components/BusinessCard'

import ArrowIcon from '@/assets/arrow.svg'
import LandingIllustration from '@/assets/landingpage-illustration.png'
import ArrowRightWhite from '@/assets/arrow-right-white.svg'
import DownloadIcon from '@/assets/download.svg'

export const metadata: Metadata = {
  title: 'Cartão de Visita | Resultado',
  description: 'Confira o resultado do seu cartão de visita e faça o download para utilizá-lo em seus canais digitais.',
  robots: 'index, follow',
  openGraph: {
    title: 'Cartão de Visita | Resultado',
    description: 'Confira o resultado do seu cartão de visita e faça o download para utilizá-lo em seus canais digitais.',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cartão de Visita | Resultado',
    description: 'Confira o resultado do seu cartão de visita e faça o download para utilizá-lo em seus canais digitais.',
  },
}

export default function CardResultPage() {
  return (
    <main className='flex flex-grow flex-row justify-evenly items-start lg:items-center flex-wrap max-w-screen-xl mx-auto p-5 w-full'>
      <Image
        src={LandingIllustration}
        alt="Ilustração de um homem com um rolo de pintar, pintando seu seu cartão de visita"
        className="hidden lg:block lg:w-[28rem] xl:w-[32rem]"
      />
      <section className='flex flex-col justify-between items-start gap-5 w-full sm:w-[600px] lg:w-[510px]'>
        <Link
          href='/'
          className='flex items-center justify-between gap-4'
          aria-label='Voltar para página inicial e gerar outro cartão de visita'
        >
          <Image
            src={ArrowIcon}
            alt="Seta indicando para baixo"
            className="w-3 h-3"
          />
          <p className='text-subtitle-sm'>
            Gerar outro cartão
          </p>
        </Link>
        <Suspense fallback={<div>Loading...</div>}>
          <BusinessCard />
        </Suspense>
        <Button
          type="button"
          variant='highlight'
          showShadow
          disabled
          className='w-full flex justify-center items-center gap-3'
          aria-label='Baixar cartão de visita personalizado'
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
          aria-label='Fazer um teste grátis do RD Station Marketing em uma nova aba'
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