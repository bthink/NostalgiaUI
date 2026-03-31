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
        'border border-nfsu-border panel-top-line relative',
        'bg-gradient-to-br from-nfsu-panel to-nfsu-panel-dark',
        className,
      )}
    >
      {header && (
        <div className="flex items-center gap-2 px-4 py-[10px] border-b border-nfsu-border">
          <span className="font-nfsu italic uppercase tracking-[4px] text-[11px] text-nfsu-cyan font-medium">
            {header}
          </span>
          {badge && (
            <span className="ml-auto text-[9px] tracking-[2px] uppercase text-nfsu-cyan border border-nfsu-cyan-dim px-[7px] py-[1px]">
              {badge}
            </span>
          )}
        </div>
      )}
      <div className="p-4">{children}</div>
      {footer && (
        <div className="px-4 py-3 border-t border-nfsu-border">{footer}</div>
      )}
    </div>
  )
}
