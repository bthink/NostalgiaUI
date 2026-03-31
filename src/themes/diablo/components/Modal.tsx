import { ReactNode, useEffect } from 'react'
import { cn } from '../../../core/lib/cn'

interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  footer?: ReactNode
  className?: string
}

export function Modal({ open, onClose, title, children, footer, className }: ModalProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(4,2,1,0.88)]"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        className={cn(
          'border-2 border-diablo-border panel-diablo-top relative',
          'bg-gradient-to-b from-diablo-panel to-diablo-panel-dark',
          'shadow-[0_0_40px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(200,168,75,0.08)]',
          'w-full max-w-sm',
          className,
        )}
        onClick={e => e.stopPropagation()}
      >
        <span aria-hidden className="absolute -top-[6px] -left-[5px] text-diablo-border-light text-[11px] leading-none select-none">◆</span>
        <span aria-hidden className="absolute -top-[6px] -right-[5px] text-diablo-border-light text-[11px] leading-none select-none">◆</span>
        <span aria-hidden className="absolute -bottom-[5px] -left-[5px] text-diablo-border-light text-[11px] leading-none select-none">◆</span>
        <span aria-hidden className="absolute -bottom-[5px] -right-[5px] text-diablo-border-light text-[11px] leading-none select-none">◆</span>
        {title && (
          <div className="flex items-center justify-between px-4 py-3 border-b border-diablo-border gold-divider">
            <span
              id="modal-title"
              className="font-diablo uppercase tracking-[3px] text-[13px] text-diablo-gold font-medium"
            >
              {title}
            </span>
            <button
              onClick={onClose}
              aria-label="Close"
              className="text-diablo-text-dim hover:text-diablo-text transition-colors text-base leading-none cursor-pointer"
            >
              &#x2715;
            </button>
          </div>
        )}
        <div className="p-4 text-sm text-diablo-text tracking-wide font-medium leading-relaxed font-diablo">
          {children}
        </div>
        {footer && (
          <div className="px-4 py-3 border-t border-diablo-border flex gap-[10px] justify-end">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}
