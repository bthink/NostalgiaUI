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
              'font-nfsu italic uppercase tracking-[3px] text-[15px] font-medium',
              'px-4 py-[9px] border-l-2 transition-all duration-150 cursor-pointer',
              isActive
                ? 'text-nfsu-text border-nfsu-cyan bg-nfsu-cyan/5 [text-shadow:0_0_12px_rgba(0,200,248,0.25)]'
                : 'text-nfsu-muted border-transparent hover:text-nfsu-text hover:bg-nfsu-cyan/[0.03] hover:border-nfsu-cyan-dim',
            )}
          >
            <span>{item.label}</span>
            <span className={cn('text-[10px]', isActive ? 'text-nfsu-cyan' : 'text-nfsu-cyan/25')}>
              &#9658;
            </span>
          </Tag>
        )
      })}
    </nav>
  )
}
