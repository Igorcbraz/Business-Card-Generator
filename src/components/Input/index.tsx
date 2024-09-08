import { InputHTMLAttributes } from 'react'
import { UseFormRegister, FieldErrors, RegisterOptions } from 'react-hook-form'

import { cn } from '@/utils/cn'
import { RegisterUserFormData } from '@/schemas/UserRegister'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: keyof RegisterUserFormData;
  options?: RegisterOptions<RegisterUserFormData>
  register: UseFormRegister<RegisterUserFormData>
  errors: FieldErrors<RegisterUserFormData>
  containerClassName?: string
  labelClassName?: string
}

export function InputField({
  label,
  register,
  errors,
  name,
  className,
  containerClassName,
  labelClassName,
  options,
  ...props
}: InputFieldProps) {
  return (
    <div className={containerClassName}>
      <label htmlFor={name} className={cn('block text-subtitle-xs font-bold mb-2', labelClassName)}>
        {label}{options?.required && '*'}
      </label>
      <input
        {...register(name, options)}
        name={name}
        className={cn('input-default', className, { 'border-red-500': errors?.[name] })}
        aria-invalid={errors?.[name] ? 'true' : 'false'}
        aria-describedby={errors?.[name] ? `${name}-error` : undefined}
        {...props}
      />
      {errors?.[name] && (
        <p className="error-message" id={`${name}-error`} role="alert">
          {errors?.[name]?.message}
        </p>
      )}
    </div>
  )
}