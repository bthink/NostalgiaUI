import { ReactNode } from 'react'
import { cn } from '../../../core/lib/cn'

interface PanelProps {
  header?: string
  badge?: string
  footer?: ReactNode
  children: ReactNode
  className?: string
}

export function Panel({ header, badge, footer, children, className }: PanelProps) {
  return (
    <div
      className={cn(
        'border-2 border-diablo-border panel-diablo-top relative',
        'bg-gradient-to-b from-diablo-panel to-diablo-panel-dark',
        'shadow-[inset_0_1px_0_rgba(200,168,75,0.08),inset_0_-1px_0_rgba(0,0,0,0.5)]',
        className,
      )}
    >
      <span aria-hidden className="absolute -top-[6px] -left-[5px] text-diablo-border-light text-[11px] leading-none select-none">◆</span>
      <span aria-hidden className="absolute -top-[6px] -right-[5px] text-diablo-border-light text-[11px] leading-none select-none">◆</span>
      <span aria-hidden className="absolute -bottom-[5px] -left-[5px] text-diablo-border-light text-[11px] leading-none select-none">◆</span>
      <span aria-hidden className="absolute -bottom-[5px] -right-[5px] text-diablo-border-light text-[11px] leading-none select-none">◆</span>
      {header && (
        <div className="flex items-center gap-2 px-4 py-[10px] border-b border-diablo-border gold-divider">
          <span className="font-diablo uppercase tracking-[3px] text-[12px] text-diablo-gold font-medium">
            {header}
          </span>
          {badge && (
            <span className="ml-auto text-[10px] tracking-[2px] uppercase text-diablo-text-dim border border-diablo-border px-[8px] py-[1px] stone-inset">
              {badge}
            </span>
          )}
        </div>
      )}
      <div className="p-4">{children}</div>
      {footer && (
        <div className="px-4 py-3 border-t border-diablo-border">{footer}</div>
      )}
    </div>
  )
}
