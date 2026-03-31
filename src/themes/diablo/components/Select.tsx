import { SelectHTMLAttributes, useId } from 'react'
import { cn } from '../../../core/lib/cn'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id'> {
  label?: string
  options: SelectOption[]
}

export function Select({ label, options, className, ...props }: SelectProps) {
  const id = useId()

  return (
    <div className="flex flex-col gap-[5px]">
      {label && (
        <label
          htmlFor={id}
          className="text-[10px] tracking-[3px] uppercase text-diablo-gold/80 font-medium font-diablo"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        className={cn(
          'w-full bg-[#0e0a06] border border-diablo-border',
          'text-diablo-text font-diablo font-medium text-[14px] tracking-[1px]',
          'px-[12px] py-[8px] outline-none appearance-none cursor-pointer',
          'stone-inset transition-all duration-150',
          'focus:border-diablo-border-light focus:shadow-diablo-gold',
          '[background-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%2710%27%20height%3D%276%27%20viewBox%3D%270%200%2010%206%27%3E%3Cpath%20d%3D%27M0%200l5%206%205-6z%27%20fill%3D%27%23c8a84b%27%2F%3E%3C%2Fsvg%3E")]',
          '[background-repeat:no-repeat] [background-position:right_12px_center]',
          className,
        )}
        {...props}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value} className="bg-diablo-panel text-diablo-text">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
