import { ReactNode } from 'react'
import { cn } from '../../../core/lib/cn'

type BadgeVariant = 'gold' | 'red' | 'muted' | 'solid' | 'magic' | 'rare' | 'set' | 'unique' | 'rune'

interface BadgeProps {
  variant?: BadgeVariant
  children: ReactNode
  className?: string
}

const variants: Record<BadgeVariant, string> = {
  solid:  'bg-diablo-gold border-diablo-gold text-[#0a0604] font-semibold',
  gold:   'bg-diablo-gold/10 border-diablo-gold-dim text-diablo-gold',
  red:    'bg-diablo-red/15 border-diablo-red/35 text-[#dd4040]',
  muted:  'bg-transparent border-diablo-border text-diablo-text-dim',
  magic:  'bg-diablo-magic/10 border-diablo-magic/40 text-diablo-magic [text-shadow:0_0_8px_rgba(88,88,232,0.5)]',
  rare:   'bg-diablo-rare/10 border-diablo-rare/40 text-diablo-rare [text-shadow:0_0_8px_rgba(200,200,64,0.4)]',
  set:    'bg-diablo-set/10 border-diablo-set/40 text-diablo-set [text-shadow:0_0_8px_rgba(64,168,64,0.4)]',
  unique: 'bg-diablo-unique/10 border-diablo-unique/40 text-diablo-unique [text-shadow:0_0_8px_rgba(165,120,64,0.4)]',
  rune:   'bg-diablo-rune/10 border-diablo-rune/40 text-diablo-rune [text-shadow:0_0_8px_rgba(207,112,32,0.5)]',
}

export function Badge({ variant = 'gold', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block border font-diablo font-medium stone-inset',
        'text-[11px] tracking-[2px] uppercase px-[10px] py-[3px]',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
