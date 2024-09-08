import * as zod from 'zod'

export const registerUserFormSchema = zod.object({
  name: zod.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres' }),
  phone: zod.string().min(1, { message: 'O telefone é obrigatório' }).regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, { message: 'O telefone deve estar no formato (99) 9999-9999 ou (99) 99999-9999' }),
  email: zod.string().min(1, { message: 'O email é obrigatório' }).email({ message: 'O email deve ser um endereço de email válido' }),
})

export type RegisterUserFormData = zod.infer<typeof registerUserFormSchema>