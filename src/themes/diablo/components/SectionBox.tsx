import { ReactNode } from 'react'
import { cn } from '../../../core/lib/cn'

interface SectionBoxProps {
  title?: string
  children: ReactNode
  className?: string
}

export function SectionBox({ title, children, className }: SectionBoxProps) {
  return (
    <div
      className={cn(
        'border border-diablo-border border-l-2 border-l-diablo-gold/30 bg-diablo-panel-dark p-4 stone-inset',
        className,
      )}
    >
      {title && (
        <div className="text-[10px] tracking-[3px] uppercase text-diablo-gold/50 font-medium mb-[10px] font-diablo">
          {title}
        </div>
      )}
      {children}
    </div>
  )
}
