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
        'border border-nfsu-border panel-top-line relative',
        'bg-gradient-to-br from-nfsu-panel to-nfsu-panel-dark',
        'px-[18px] py-[14px] min-w-[120px]',
        className,
      )}
    >
      <div className="text-[9px] tracking-[3px] uppercase text-nfsu-cyan/70 font-medium mb-1">
        {label}
      </div>
      <div className="text-[28px] font-semibold italic text-white font-nfsu leading-none">
        {value}
      </div>
      {unit && (
        <div className="text-[11px] text-nfsu-muted tracking-[2px] mt-[2px] font-medium">
          {unit}
        </div>
      )}
    </div>
  )
}
