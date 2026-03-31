import { ReactNode, useState } from 'react'
import { cn } from '../../../core/lib/cn'

interface TooltipProps {
  content: ReactNode
  children: ReactNode
  className?: string
}

export function Tooltip({ content, children, className }: TooltipProps) {
  const [visible, setVisible] = useState(false)

  return (
    <div
      className={cn('relative inline-flex', className)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          role="tooltip"
          className={cn(
            'absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2',
            'bg-diablo-panel border-2 border-diablo-border panel-diablo-top',
            'stone-inset shadow-[0_0_24px_rgba(0,0,0,0.8)]',
            'text-[12px] tracking-[1px] text-diablo-text font-medium font-diablo',
            'px-3 py-[7px] whitespace-nowrap',
            'after:content-[""] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2',
            'after:border-[5px] after:border-transparent after:border-t-diablo-border',
          )}
        >
          {content}
        </div>
      )}
    </div>
  )
}
