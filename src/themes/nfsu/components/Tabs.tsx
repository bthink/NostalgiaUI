import { ReactNode, useState } from 'react'
import { cn } from '../../../core/lib/cn'

interface Tab {
  key: string
  label: string
  content: ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultKey?: string
  className?: string
}

export function Tabs({ tabs, defaultKey, className }: TabsProps) {
  const [active, setActive] = useState(defaultKey ?? tabs[0]?.key)
  const current = tabs.find(t => t.key === active)

  return (
    <div className={cn('flex flex-col', className)}>
      <div className="flex border-b border-nfsu-border">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={cn(
              'font-nfsu italic uppercase tracking-[3px] text-xs px-[18px] py-[9px]',
              'border-b-2 -mb-px transition-all duration-150 font-medium cursor-pointer',
              active === tab.key
                ? 'text-nfsu-cyan border-nfsu-cyan [text-shadow:0_0_10px_rgba(0,200,248,0.25)]'
                : 'text-nfsu-muted border-transparent hover:text-nfsu-text',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-[14px] bg-nfsu-panel-dark border border-nfsu-border border-t-0 text-sm text-nfsu-muted tracking-wide font-medium leading-relaxed">
        {current?.content}
      </div>
    </div>
  )
}
