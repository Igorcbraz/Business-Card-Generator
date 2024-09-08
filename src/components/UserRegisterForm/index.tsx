'use client'

import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import InputMask from 'react-input-mask'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/Button'
import { InputField } from '@/components/Input/index'
import { privacyPolice } from '@/constants/privacy-police'
import { cn } from '@/utils/cn'
import { registerUserFormSchema, RegisterUserFormData } from '@/schemas/UserRegister'

import ArrowRight from '@/assets/arrow-right.svg'

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
      <InputField
        label="Nome"
        name="name"
        type="text"
        id="name"
        placeholder="Nome"
        className='w-full'
        containerClassName='col-span-2'
        register={register}
        errors={errors}
        options={{ required: true }}
      />
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
          aria-invalid={errors?.phone ? 'true' : 'false'}
          aria-describedby={errors?.email ? 'message-error' : undefined}
        />
        {errors?.phone && (
          <p className="error-message" id='message-error' role="alert">
            {errors?.phone?.message}
          </p>
        )}
      </div>
      <InputField
        label="E-mail"
        name='email'
        type="email"
        id="email"
        placeholder="nome@email.com"
        className='w-full'
        containerClassName='col-span-2 sm:col-span-1'
        register={register}
        errors={errors}
        options={{ required: true }}
      />
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
              aria-label='Abrir política de privacidade em uma nova aba'
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
        className="flex justify-center items-center gap-2 col-span-2 text-primary-900 font-extrabold"
        aria-label="Registrar dados do formulário para gerar o cartão personalizado"
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