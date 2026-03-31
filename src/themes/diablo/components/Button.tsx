import { ButtonHTMLAttributes } from 'react'
import { cn } from '../../../core/lib/cn'

type ButtonVariant = 'accent' | 'primary' | 'secondary' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const base =
  'inline-flex items-center justify-center font-diablo uppercase tracking-widest transition-all duration-150 disabled:opacity-40 disabled:pointer-events-none cursor-pointer stone-raised border border-diablo-border active:translate-y-px active:shadow-[inset_0_3px_6px_rgba(0,0,0,0.9),inset_0_-1px_0_rgba(0,0,0,0.6)] active:brightness-90'

const variants: Record<ButtonVariant, string> = {
  accent:
    'bg-gradient-to-b from-[#2a1e10] to-[#1a1008] border-diablo-border-light text-diablo-gold-bright shadow-diablo-gold hover:shadow-diablo-gold-lg hover:border-diablo-gold/50 hover:text-white',
  primary:
    'bg-gradient-to-b from-[#221a0e] to-[#150f07] text-diablo-gold hover:border-diablo-border-light hover:text-diablo-gold-bright',
  secondary:
    'bg-gradient-to-b from-[#181208] to-[#100c06] text-diablo-text-dim border-diablo-border hover:text-diablo-text hover:border-diablo-border-light',
  danger:
    'bg-gradient-to-b from-[#2a0c0c] to-[#180606] border-[#6a1818] text-[#cc4040] shadow-diablo-red hover:border-diablo-red-bright hover:text-[#ee5050]',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'text-[11px] px-[16px] py-[6px] tracking-[2px]',
  md: 'text-[13px] px-[24px] py-[9px] tracking-[2px]',
  lg: 'text-[15px] px-[32px] py-[12px] tracking-[3px]',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
