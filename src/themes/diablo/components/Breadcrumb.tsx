import { cn } from '../../../core/lib/cn'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-2', className)}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <span key={index} className="flex items-center gap-2">
            {isLast || !item.href ? (
              <span
                className={cn(
                  'font-diablo uppercase tracking-[2px] text-[12px] font-medium',
                  isLast ? 'text-diablo-gold' : 'text-diablo-text-dim',
                )}
              >
                {item.label}
              </span>
            ) : (
              <a
                href={item.href}
                className="font-diablo uppercase tracking-[2px] text-[12px] font-medium text-diablo-text-dim hover:text-diablo-text transition-colors duration-150"
              >
                {item.label}
              </a>
            )}
            {!isLast && (
              <span aria-hidden className="text-diablo-border-light text-[8px] leading-none select-none">◆</span>
            )}
          </span>
        )
      })}
    </nav>
  )
}
