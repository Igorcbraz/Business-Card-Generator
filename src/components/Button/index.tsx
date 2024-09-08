import { cva, VariantProps } from 'class-variance-authority'
import { ReactNode, ButtonHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export function Button ({
  children,
  className,
  variant,
  size,
  showShadow,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, showShadow }), className)}
      {...props}
    >
      {children}
    </button>
  )
}

const buttonVariants = cva('font-extrabold text-center transition-colors duration-300 uppercase', {
  variants: {
    variant: {
      highlight: 'text-primary-900 bg-highlight-500 border border-primary-900 hover:bg-highlight-400 hover:border-primary-400 disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-600',
      tertiary: 'text-white bg-transparent hover:bg-white/16 disabled:text-gray-600',
    },
    size: {
      sm: 'body-sm py-2 px-4',
      md: 'body-md py-3 px-6',
      lg: 'body-lg py-4 px-8',
    },
    showShadow: {
      true: 'shadow-button-black disabled:shadow-button-disabled',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'highlight',
    size: 'md',
    showShadow: true,
  }
})