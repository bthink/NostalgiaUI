import { cn } from '../../../core/lib/cn'

interface NavItem {
  key: string
  label: string
  href?: string
}

interface NavMenuProps {
  items: NavItem[]
  activeKey?: string
  onSelect?: (key: string) => void
  className?: string
}

export function NavMenu({ items, activeKey, onSelect, className }: NavMenuProps) {
  return (
    <nav className={cn('flex flex-col', className)}>
      {items.map(item => {
        const isActive = item.key === activeKey
        const Tag = item.href ? 'a' : 'button'

        return (
          <Tag
            key={item.key}
            {...(item.href ? { href: item.href } : {})}
            onClick={item.href ? undefined : () => onSelect?.(item.key)}
            className={cn(
              'flex items-center justify-between w-full',
              'font-diablo uppercase tracking-[2px] text-[14px] font-medium',
              'px-4 py-[8px] border-l-2 transition-all duration-150 cursor-pointer',
              isActive
                ? 'text-diablo-gold border-diablo-gold bg-diablo-gold/5 [text-shadow:0_0_10px_rgba(200,168,75,0.2)]'
                : 'text-diablo-text-dim border-transparent hover:text-diablo-text hover:bg-diablo-gold/[0.03] hover:border-diablo-border',
            )}
          >
            <span>{item.label}</span>
            <span className={cn('text-[10px]', isActive ? 'text-diablo-gold' : 'text-diablo-border')}>
              &#9658;
            </span>
          </Tag>
        )
      })}
    </nav>
  )
}
