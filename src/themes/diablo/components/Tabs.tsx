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
      <div className="flex border-b border-diablo-border">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={cn(
              'font-diablo uppercase tracking-[2px] text-[12px] px-[16px] py-[8px]',
              'border-b-2 -mb-px transition-all duration-150 font-medium cursor-pointer',
              active === tab.key
                ? 'text-diablo-gold border-diablo-gold [text-shadow:0_0_12px_rgba(200,168,75,0.25)]'
                : 'text-diablo-text-dim border-transparent hover:text-diablo-text',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-[14px] bg-diablo-panel-dark border-2 border-t-0 border-diablo-border stone-inset text-sm text-diablo-text-dim tracking-wide font-medium leading-relaxed">
        {current?.content}
      </div>
    </div>
  )
}
