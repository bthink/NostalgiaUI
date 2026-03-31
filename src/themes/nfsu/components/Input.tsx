import { InputHTMLAttributes, useState, useId } from 'react'
import { cn } from '../../../core/lib/cn'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  label?: string
  error?: string
}

const EyeOpen = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const EyeClosed = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <path d="M14.12 14.12a3 3 0 0 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
)

export function Input({ label, error, type, className, ...props }: InputProps) {
  const id = useId()
  const [visible, setVisible] = useState(false)
  const isPassword = type === 'password'
  const inputType = isPassword && visible ? 'text' : (type ?? 'text')

  return (
    <div className="flex flex-col gap-[5px]">
      {label && (
        <label
          htmlFor={id}
          className="text-[10px] tracking-[3px] uppercase text-nfsu-cyan/90 font-medium"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type={inputType}
          className={cn(
            'w-full bg-[#08101c] border border-nfsu-border border-b-nfsu-cyan-dim',
            'text-nfsu-text font-nfsu italic font-medium text-[15px] tracking-[2px]',
            'px-[14px] py-[9px] outline-none transition-all duration-150',
            'placeholder:text-nfsu-text-dim placeholder:font-normal',
            'focus:border-b-nfsu-cyan focus:shadow-nfsu-cyan-sm focus:bg-[#0a1420]',
            error && 'border-b-nfsu-red',
            isPassword && 'pr-[44px]',
            className,
          )}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            aria-label={visible ? 'Hide password' : 'Show password'}
            onClick={() => setVisible(v => !v)}
            className={cn(
              'absolute right-0 top-0 bottom-0 w-10',
              'flex items-center justify-center',
              'border-l border-nfsu-border bg-[#08101c]',
              'transition-colors duration-150',
              visible ? 'text-nfsu-cyan' : 'text-nfsu-text-dim hover:text-nfsu-cyan',
            )}
          >
            {visible ? <EyeClosed /> : <EyeOpen />}
          </button>
        )}
      </div>
      {error && (
        <span className="text-[11px] tracking-[2px] text-[#dd6644] font-medium">
          {error}
        </span>
      )}
    </div>
  )
}
