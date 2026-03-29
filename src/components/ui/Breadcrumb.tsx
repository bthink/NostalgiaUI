import { cn } from '../../lib/cn'

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
                  'font-nfsu italic uppercase tracking-[2px] text-[13px] font-medium',
                  isLast ? 'text-nfsu-cyan' : 'text-nfsu-muted',
                )}
              >
                {item.label}
              </span>
            ) : (
              <a
                href={item.href}
                className="font-nfsu italic uppercase tracking-[2px] text-[13px] font-medium text-nfsu-muted hover:text-nfsu-text transition-colors duration-150"
              >
                {item.label}
              </a>
            )}
            {!isLast && (
              <span className="text-nfsu-border text-sm font-medium">/</span>
            )}
          </span>
        )
      })}
    </nav>
  )
}
