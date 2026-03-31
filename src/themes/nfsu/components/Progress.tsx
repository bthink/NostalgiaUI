import { cn } from '../../../core/lib/cn'

type ProgressVariant = 'cyan' | 'orange'

interface ProgressProps {
  value: number
  variant?: ProgressVariant
  label?: string
  showValue?: boolean
  className?: string
}

const fills: Record<ProgressVariant, string> = {
  cyan: 'bg-gradient-to-r from-[#0050cc] to-nfsu-cyan shadow-nfsu-cyan-sm',
  orange: 'bg-gradient-to-r from-[#cc4400] to-nfsu-orange shadow-nfsu-orange',
}

export function Progress({
  value,
  variant = 'cyan',
  label,
  showValue = true,
  className,
}: ProgressProps) {
  const clamped = Math.min(100, Math.max(0, value))

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {(label || showValue) && (
        <div className="flex justify-between text-[11px] tracking-[2px] uppercase text-nfsu-text-dim font-medium">
          {label && <span>{label}</span>}
          {showValue && <span>{clamped}%</span>}
        </div>
      )}
      <div className="h-1 bg-[#0f1e30] relative">
        <div
          className={cn('absolute top-0 left-0 h-full transition-all duration-300', fills[variant])}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}
