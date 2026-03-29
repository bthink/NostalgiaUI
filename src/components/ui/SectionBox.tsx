import { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface SectionBoxProps {
  title?: string
  children: ReactNode
  className?: string
}

export function SectionBox({ title, children, className }: SectionBoxProps) {
  return (
    <div
      className={cn(
        'border border-[#0f1e30] border-l-2 border-l-nfsu-cyan-dim bg-nfsu-panel-dark p-4',
        className,
      )}
    >
      {title && (
        <div className="text-[10px] tracking-[3px] uppercase text-nfsu-cyan/60 font-medium mb-[10px]">
          {title}
        </div>
      )}
      {children}
    </div>
  )
}
