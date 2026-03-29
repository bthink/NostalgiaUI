import { InputHTMLAttributes, useId } from 'react'
import { cn } from '../../lib/cn'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
}

export function Checkbox({ label, checked, className, ...props }: CheckboxProps) {
  const id = useId()

  return (
    <label
      htmlFor={id}
      className={cn('flex items-center gap-[10px] cursor-pointer group', className)}
    >
      <input id={id} type="checkbox" checked={checked} className="sr-only" {...props} />
      <div
        className={cn(
          'w-4 h-4 border flex items-center justify-center flex-shrink-0 transition-all duration-150',
          checked
            ? 'border-nfsu-cyan bg-nfsu-cyan/10 shadow-nfsu-cyan-sm'
            : 'border-nfsu-border bg-[#08101c] group-hover:border-nfsu-cyan/40',
        )}
      >
        {checked && (
          <div className="w-2 h-2 bg-nfsu-cyan shadow-nfsu-cyan-sm" />
        )}
      </div>
      {label && (
        <span className="text-[13px] tracking-[2px] uppercase text-nfsu-muted font-medium font-nfsu">
          {label}
        </span>
      )}
    </label>
  )
}
