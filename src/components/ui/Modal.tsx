import { ReactNode, useEffect } from 'react'
import { cn } from '../../lib/cn'

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(3,5,12,0.85)]"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        className={cn(
          'border border-nfsu-border panel-top-line relative',
          'bg-gradient-to-br from-nfsu-panel to-nfsu-panel-dark',
          'w-full max-w-sm',
          className,
        )}
        onClick={e => e.stopPropagation()}
      >
        {title && (
          <div className="flex items-center justify-between px-4 py-3 border-b border-nfsu-border">
            <span
              id="modal-title"
              className="font-nfsu italic uppercase tracking-[4px] text-xs text-nfsu-cyan font-medium"
            >
              {title}
            </span>
            <button
              onClick={onClose}
              aria-label="Close"
              className="text-nfsu-text-dim hover:text-nfsu-muted transition-colors text-base leading-none cursor-pointer"
            >
              &#x2715;
            </button>
          </div>
        )}
        <div className="p-4 text-sm text-[#6888a8] tracking-wide font-medium leading-relaxed">
          {children}
        </div>
        {footer && (
          <div className="px-4 py-3 border-t border-nfsu-border flex gap-[10px] justify-end">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}
