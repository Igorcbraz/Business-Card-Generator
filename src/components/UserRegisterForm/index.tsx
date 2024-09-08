'use client'

import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import InputMask from 'react-input-mask'
import { useRouter } from 'next/navigation'

import ArrowRight from '@/assets/arrow-right.svg'
import { privacyPolice } from '@/constants/privacy-police'
import { Button } from '@/components/Button'
import { cn } from '@/utils/cn'

const registerUserFormSchema = zod.object({
  name: zod.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres' }).min(1, { message: 'O nome é obrigatório' }),
  phone: zod.string().regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, { message: 'O telefone deve estar no formato (99) 9999-9999 ou (99) 99999-9999' }).min(1, { message: 'O telefone é obrigatório' }),
  email: zod.string().email({ message: 'O email deve ser um endereço de email válido' }).min(1, { message: 'O email é obrigatório' }),
})

type RegisterUserFormData = zod.infer<typeof registerUserFormSchema>

export function UserRegisterForm () {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<RegisterUserFormData>({
    resolver: zodResolver(registerUserFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
    }
  })
  const router = useRouter()

  const handleRegisterUser = (formData: RegisterUserFormData) => {
    try {
      const url = new URL(`${window.location.href}card-result`)

      url.searchParams.append('name', formData.name)
      url.searchParams.append('phone', formData.phone)
      url.searchParams.append('email', formData.email)

      router.push(url.toString())
      reset()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className="grid grid-cols-2 gap-5 max-w-[500px]" onSubmit={handleSubmit(handleRegisterUser)}>
      <div className="col-span-2">
        <label htmlFor="name" className="block text-subtitle-xs font-bold mb-2">Nome*</label>
        <input
          {...register('name', { required: true })}
          name='name'
          type="text"
          id="name"
          className={cn('input-default w-full', { 'border-red-500': errors?.name })}
          placeholder="Nome"
        />
        {errors?.name && (
          <p className="errror-message">
            {errors?.name?.message}
          </p>
        )}
      </div>
      <div className="col-span-2 sm:col-span-1">
        <label htmlFor="phone" className="block text-subtitle-xs font-bold mb-2">Telefone*</label>
        <InputMask
          {...register('phone', { required: true })}
          mask="(99) 99999-9999"
          maskChar=""
          name='phone'
          id="phone"
          type={'text'}
          className={cn('input-default w-full', { 'border-red-500': errors?.phone })}
          placeholder="(00) 0 0000-0000"
        />
        {errors?.phone && (
          <p className="errror-message">
            {errors?.phone?.message}
          </p>
        )}
      </div>
      <div className="col-span-2 sm:col-span-1">
        <label htmlFor="email" className="block text-subtitle-xs font-bold mb-2">E-mail*</label>
        <input
          {...register('email', { required: true })}
          name='email'
          type="email"
          id="email"
          className={cn('input-default w-full', { 'border-red-500': errors?.email })}
          placeholder="nome@email.com"
        />
        {errors?.email && (
          <p className="errror-message">
            {errors?.email?.message}
          </p>
        )}
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
      <Button
        type="submit"
        variant='highlight'
        showShadow
        className="flex justify-center items-center gap-2 col-span-2 text-primary-900"
      >
        Gerar CARTÃO Grátis
        <Image
          src={ArrowRight}
          alt="Seta indicando para a direita"
          width={24}
          height={24}
        />  
      </Button>
    </form>
  )
}