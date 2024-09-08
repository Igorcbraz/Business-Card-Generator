'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

import { RegisterUserFormData } from '@/schemas/UserRegister'

import Logo from '@/assets/symbol.svg'

export function BusinessCard() {
  const searchParams = useSearchParams()
  const { email, name, phone } = Object.fromEntries(searchParams) as RegisterUserFormData

  return (
    <div className='flex flex-row justify-center items-center bg-white rounded-3xl p-5 h-[160px] sm:h-[260px] w-full'>
      <Image
        src={Logo}
        alt="Logo da empresa"
        className='w-[45px] h-[38px] sm:w-[70px] sm:h-[60px]'
      />
      <div className='w-[3px] h-full bg-primary-800 mx-5'></div>
      <div className='flex flex-col gap-6 text-black text-subtitle-xs sm:text-subtitle-sm'>
        <p className="truncate max-w-[15ch] sm:max-w-[25ch]">{name || 'Nome e Sobrenome'}</p>
        <p>{phone || '(00) 0000-0000'}</p>
        <p className="truncate max-w-[15ch] sm:max-w-[25ch]">{email || 'meuemail@email.com'}</p>
      </div>
    </div>
  )
}