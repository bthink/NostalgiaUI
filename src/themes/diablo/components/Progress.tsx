import { cn } from '../../../core/lib/cn'

type ProgressVariant = 'life' | 'mana' | 'experience'

interface ProgressProps {
  value: number
  variant?: ProgressVariant
  label?: string
  showValue?: boolean
  className?: string
}

const fills: Record<ProgressVariant, string> = {
  life:       'bg-gradient-to-r from-[#5c0000] via-diablo-red to-[#cc2828] shadow-[0_0_12px_rgba(139,16,16,0.7)]',
  mana:       'bg-gradient-to-r from-[#001060] via-diablo-blue to-[#3366cc] shadow-[0_0_12px_rgba(34,68,170,0.7)]',
  experience: 'bg-gradient-to-r from-[#3a2000] via-[#a87820] to-diablo-gold shadow-[0_0_10px_rgba(200,168,75,0.45)]',
}

export function Progress({
  value,
  variant = 'life',
  label,
  showValue = true,
  className,
}: ProgressProps) {
  const clamped = Math.min(100, Math.max(0, value))

  return (
    <div className={cn('flex flex-col gap-[6px]', className)}>
      {(label || showValue) && (
        <div className="flex justify-between text-[10px] tracking-[2px] uppercase text-diablo-text-dim font-medium font-diablo">
          {label && <span>{label}</span>}
          {showValue && <span>{clamped}%</span>}
        </div>
      )}
      <div className="h-[12px] bg-[#0a0704] border-2 border-diablo-border stone-inset relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]">
        <div
          className={cn('absolute top-0 left-0 h-full transition-all duration-300', fills[variant])}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}
