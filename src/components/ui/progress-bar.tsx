import { clsx } from 'clsx'

interface ProgressBarProps {
  progress: number
  label?: string
  detail?: string
  className?: string
}

export function ProgressBar({ progress, label, detail, className }: ProgressBarProps) {
  return (
    <div className={clsx('w-full', className)}>
      {(label || detail) && (
        <div className="flex items-center justify-between mb-2">
          {label && <span className="text-sm font-medium text-[#1A1A1A]">{label}</span>}
          {detail && <span className="text-sm text-[#6B7280]">{detail}</span>}
        </div>
      )}
      <div className="w-full h-1 bg-[#E5E0D5] overflow-hidden">
        <div
          className="h-full bg-[#C8102E] transition-all duration-500 ease-out"
          style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
        />
      </div>
    </div>
  )
}
