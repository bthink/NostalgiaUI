import { ButtonHTMLAttributes } from 'react'
import { cn } from '../../../core/lib/cn'

type ButtonVariant = 'accent' | 'primary' | 'secondary' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const base =
  'inline-flex items-center justify-center font-nfsu italic uppercase tracking-widest transition-all duration-150 disabled:opacity-40 disabled:pointer-events-none clip-para cursor-pointer'

const variants: Record<ButtonVariant, string> = {
  accent:
    'bg-nfsu-cyan border border-[#50e0ff] text-[#020810] font-semibold shadow-nfsu-cyan hover:shadow-nfsu-cyan-lg',
  primary:
    'bg-[rgba(0,200,248,0.06)] border border-nfsu-cyan text-nfsu-cyan shadow-nfsu-cyan-sm hover:bg-[rgba(0,200,248,0.15)] hover:shadow-nfsu-cyan hover:text-white',
  secondary:
    'bg-transparent border border-nfsu-border text-nfsu-muted hover:border-nfsu-cyan-dim hover:text-nfsu-text hover:bg-[rgba(0,200,248,0.03)]',
  danger:
    'bg-transparent border border-nfsu-red text-[#cc5522] shadow-nfsu-orange hover:bg-[rgba(204,51,0,0.08)] hover:border-nfsu-orange hover:text-[#ff6030] hover:shadow-nfsu-orange-lg',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'text-xs px-[18px] py-[7px] tracking-[3px] clip-para-sm',
  md: 'text-sm px-[26px] py-[10px] tracking-[3px]',
  lg: 'text-base px-[34px] py-[13px] tracking-[4px]',
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
