import { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type BadgeVariant = 'cyan' | 'orange' | 'muted' | 'solid'

interface BadgeProps {
  variant?: BadgeVariant
  children: ReactNode
  className?: string
}

const variants: Record<BadgeVariant, string> = {
  solid: 'bg-nfsu-cyan border-nfsu-cyan text-[#020810] font-semibold',
  cyan: 'bg-nfsu-cyan/10 border-nfsu-cyan-dim text-nfsu-cyan',
  orange: 'bg-nfsu-orange/10 border-nfsu-orange/25 text-[#ff8040]',
  muted: 'bg-transparent border-nfsu-border text-nfsu-muted',
}

export function Badge({ variant = 'cyan', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block border font-nfsu italic font-medium',
        'text-[11px] tracking-[2px] uppercase px-[10px] py-[3px]',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
