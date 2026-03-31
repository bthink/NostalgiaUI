import { InputHTMLAttributes, useId } from 'react'
import { cn } from '../../../core/lib/cn'

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
          'w-[18px] h-[18px] border-2 flex items-center justify-center flex-shrink-0 transition-all duration-150 stone-inset',
          checked
            ? 'border-diablo-red bg-[#200808] shadow-diablo-red'
            : 'border-diablo-border bg-[#0e0a06] group-hover:border-diablo-border-light',
        )}
      >
        {checked && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1.5 5.5L4 8L8.5 2" stroke="#cc3030" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      {label && (
        <span
          className={cn(
            'text-[13px] tracking-[1px] uppercase font-medium font-diablo transition-colors duration-150',
            checked ? 'text-diablo-text' : 'text-diablo-text-dim group-hover:text-diablo-text',
          )}
        >
          {label}
        </span>
      )}
    </label>
  )
}
