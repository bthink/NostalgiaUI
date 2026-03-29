import { ReactNode, useState } from 'react'
import { cn } from '../../lib/cn'

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
            'bg-nfsu-panel border border-nfsu-border border-t-nfsu-cyan-dim',
            'text-[12px] tracking-[1px] text-[#b0cce0] font-medium',
            'px-3 py-[7px] whitespace-nowrap',
            'shadow-[0_0_20px_rgba(0,0,0,0.5)]',
            'after:content-[""] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2',
            'after:border-[5px] after:border-transparent after:border-t-nfsu-border',
          )}
        >
          {content}
        </div>
      )}
    </div>
  )
}
