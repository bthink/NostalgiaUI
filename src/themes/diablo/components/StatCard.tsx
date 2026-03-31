import { cn } from '../../../core/lib/cn'

interface StatCardProps {
  label: string
  value: string | number
  unit?: string
  className?: string
}

export function StatCard({ label, value, unit, className }: StatCardProps) {
  return (
    <div
      className={cn(
        'border-2 border-diablo-border panel-diablo-top relative',
        'bg-gradient-to-b from-diablo-panel to-diablo-panel-dark',
        'stone-inset px-[16px] py-[12px] min-w-[110px]',
        className,
      )}
    >
      <span aria-hidden className="absolute -top-[6px] -left-[5px] text-diablo-border-light text-[11px] leading-none select-none">◆</span>
      <span aria-hidden className="absolute -top-[6px] -right-[5px] text-diablo-border-light text-[11px] leading-none select-none">◆</span>
      <span aria-hidden className="absolute -bottom-[5px] -left-[5px] text-diablo-border-light text-[11px] leading-none select-none">◆</span>
      <span aria-hidden className="absolute -bottom-[5px] -right-[5px] text-diablo-border-light text-[11px] leading-none select-none">◆</span>
      <div className="text-[9px] tracking-[3px] uppercase text-diablo-gold/60 font-medium mb-1 font-diablo">
        {label}
      </div>
      <div className="text-[26px] font-semibold text-diablo-gold-bright font-diablo leading-none">
        {value}
      </div>
      {unit && (
        <div className="text-[10px] text-diablo-text-dim tracking-[2px] mt-[3px] font-medium font-diablo">
          {unit}
        </div>
      )}
    </div>
  )
}
